package com.ctrip.ebooking;

import org.apache.commons.lang3.RandomStringUtils;
import org.java_websocket.client.WebSocketClient;
import org.java_websocket.drafts.Draft;
import org.java_websocket.drafts.Draft_6455;
import org.java_websocket.handshake.ServerHandshake;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowEvent;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.TimerTask;

public class CtripChatClient extends JFrame implements ActionListener {
    private static final long serialVersionUID = -6056260699202978657L;

    private final JTextField uriField;
    private final JButton connect;
    private final JButton login;
    private final JButton close;
    private final JTextArea ta;
    private final JTextField chatField;
    private final JTextField frontLoginUserKeyField;
    private final JComboBox draft;
    private WebSocketClient cc;
    private java.util.Timer timer;
    private CtripWebimService ctripWebimService;

    public CtripChatClient(String defaultlocation, String frontLoginUserKey) {
        super("WebSocket Chat Client");
        Container c = getContentPane();
        GridLayout layout = new GridLayout();
        layout.setColumns(1);
        layout.setRows(8);
        c.setLayout(layout);

        Draft[] drafts = {new Draft_6455()};
        draft = new JComboBox(drafts);
        c.add(draft);

        uriField = new JTextField();
        uriField.setText(defaultlocation);
        c.add(uriField);

        connect = new JButton("Connect");
        connect.addActionListener(this);
        c.add(connect);

        frontLoginUserKeyField = new JTextField();
        frontLoginUserKeyField.setText(frontLoginUserKey);
        frontLoginUserKeyField.addActionListener(this);
        c.add(frontLoginUserKeyField);

        login = new JButton("Login");
        login.addActionListener(this);
        login.setEnabled(false);
        c.add(login);

        close = new JButton("Close");
        close.addActionListener(this);
        close.setEnabled(false);
        c.add(close);

        JScrollPane scroll = new JScrollPane();
        ta = new JTextArea();
        scroll.setViewportView(ta);
        c.add(scroll);

        chatField = new JTextField();
        chatField.setText("");
        chatField.addActionListener(this);
        c.add(chatField);

        java.awt.Dimension d = new java.awt.Dimension(300, 400);
        setPreferredSize(d);
        setSize(d);

        addWindowListener(new java.awt.event.WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                if (cc != null) {
                    cc.close();
                }
                dispose();
            }
        });

        setLocationRelativeTo(null);
        setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == chatField) {
            if (cc != null) {
                System.out.println(chatField.getText());
                cc.send(chatField.getText());
                chatField.setText("");
                chatField.requestFocus();
            }
        } else if (e.getSource() == connect) {
            try {
                Map<String, String> httpHeaders = new HashMap<>();
                httpHeaders.put("Accept-Encoding", "gzip, deflate, br");
                httpHeaders.put("Accept-Language", "zh-CN,zh;q=0.9,en;q=0.8");
                httpHeaders.put("Cache-Control", "no-cache");
                httpHeaders.put("Host", "im3.ctrip.com");
                httpHeaders.put("Pragma", "no-cache");
                httpHeaders.put("Connection", "Upgrade");
                httpHeaders.put("Upgrade", "websocket");
                httpHeaders.put("Origin", "https://ebooking.ctrip.com");
                httpHeaders.put("Sec-WebSocket-Extensions", "permessage-deflate; client_max_window_bits");
                httpHeaders.put("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36");
                cc = new WebSocketClient(new URI(uriField.getText()), (Draft) draft.getSelectedItem(), httpHeaders) {
                    @Override
                    public void onMessage(String message) {
                        System.out.println("got: " + message);
                        ta.append("got: " + message + "\n");
                        ta.setCaretPosition(ta.getDocument().getLength());

                        if (message.contains("stream:features")) {
                            cc.send(ctripWebimService.auth());
                        } else if (message.equalsIgnoreCase("<success xmlns='urn:ietf:params:xml:ns:xmpp-sasl'/>")) {
                            cc.send(ctripWebimService.bindAuth2());
                        } else if (message.contains("_bind_auth_2")) {
                            cc.send(ctripWebimService.sessionAuth2());
                        } else if (message.contains("_session_auth_2")) {
                            //拿到用户的jid
                            String jid = ctripWebimService.getUserJid();
                            //收到session_auth回复确认后，每间隔5秒向服务端发起一次握手消息
                            timer = null;
                            timer = new java.util.Timer("Timer-online");
                            timer.schedule(new TimerTask() {
                                @Override
                                public void run() {
                                    cc.send(ctripWebimService.heart(jid));
                                }
                            }, 0, 5000);
                        } else if (message.startsWith("<message") && message.contains(" type=\"groupchat\" ")) {
                            //处理可能的消息，要区分是用户发的还是系统IM机器人发的，如果是机器人发的忽略.。以及系统会将房东发送的消息再发回到房东端，所以这部分消息也需要过滤掉。
                            //它的流程是ws xmpp负责：房东 - 平台 - 顾客 之间消息同步。
                            //通过SendMessage.json接口来发消息到平台，平台收到消息后同步到房东与顾客的展示侧，所以无论是哪一侧发的消息，最终都会通过ws同步到两端
                            int i1 = message.indexOf("_imebk");
                            int i2 = message.lastIndexOf("_imebk");
                            if (i1 == i2) {
                                if (!message.contains("_imbot_")) {
                                    int i = message.indexOf("<body>");
                                    int j = message.indexOf("</body>");
                                    String msgBody = message.substring(i + "<body>".length(), j);
                                    System.out.println(msgBody);
                                    //系统发的消息一般都是json格式的，用户发的消息都是普通文本的，这里可以再做一下区分。
                                    if (!ctripWebimService.mayBeJSON(msgBody)) {
                                        String partnerJid = message.substring(message.indexOf("from=\"") + "from=\"".length(), message.indexOf("@muc.im.ctrip.com"));
                                        System.out.println("用户的编号是：" + partnerJid);
                                        ctripWebimService.sendMessage(partnerJid, "宝寓测试，请勿回；我是房东--" + RandomStringUtils.randomNumeric(5));
                                    }
                                }
                            }
                        }
                    }

                    @Override
                    public void onOpen(ServerHandshake handshake) {
                        ta.append("You are connected to ChatServer: " + getURI() + "\n");
                        ta.setCaretPosition(ta.getDocument().getLength());
                        Iterator<String> fields = handshake.iterateHttpFields();
                        while (fields.hasNext()) {
                            String next = fields.next();
                            System.out.println(next + " = " + handshake.getFieldValue(next));
                        }
                    }

                    @Override
                    public void onClose(int code, String reason, boolean remote) {
                        ta.append("You have been disconnected from: " + getURI() + "; Code: " + code + " " + reason + "\n");
                        ta.setCaretPosition(ta.getDocument().getLength());
                        connect.setEnabled(true);
                        uriField.setEditable(true);
                        draft.setEditable(true);
                        login.setEnabled(false);
                        close.setEnabled(false);
                    }

                    @Override
                    public void onError(Exception ex) {
                        ta.append("Exception occurred ...\n" + ex + "\n");
                        ta.setCaretPosition(ta.getDocument().getLength());
                        ex.printStackTrace();
                        connect.setEnabled(true);
                        uriField.setEditable(true);
                        draft.setEditable(true);
                        login.setEnabled(false);
                        close.setEnabled(false);
                    }
                };

                login.setEnabled(true);
                close.setEnabled(true);
                connect.setEnabled(false);
                uriField.setEditable(false);
                draft.setEditable(false);
                cc.setConnectionLostTimeout(0);
                cc.connect();
            } catch (URISyntaxException ex) {
                ta.append(uriField.getText() + " is not a valid WebSocket URI\n");
            }
        } else if (e.getSource() == login) {
            ctripWebimService = new CtripWebimService(frontLoginUserKeyField.getText());
            cc.send(ctripWebimService.open());
            connect.setEnabled(false);
            login.setEnabled(false);
            close.setEnabled(true);
        } else if (e.getSource() == close) {
            cc.close();
        }
    }

    public static void main(String[] args) {
        String location;
        if (args.length != 0) {
            location = args[0];
            System.out.println("Default server url specified: \'" + location + "\'");
        } else {
            location = "wss://im3.ctrip.com/ws-xmpp/";
            //location = "ws://localhost:8887";
            System.out.println("Default server url not specified: defaulting to \'" + location + "\'");
        }
        //就是登录在pc浏览器里存储的imticket的值
        String frontLoginUserKey = "B87E3D202F96D2C2ED6B55B191DB73803D1C90D3C34C39D5EC33E31FE04DEEEA";
        new CtripChatClient(location, frontLoginUserKey);
    }

}