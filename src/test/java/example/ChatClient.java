package example;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.baoyu.MuniaoWebimService;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;
import org.java_websocket.client.WebSocketClient;
import org.java_websocket.drafts.Draft;
import org.java_websocket.drafts.Draft_6455;
import org.java_websocket.enums.ReadyState;
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

public class ChatClient extends JFrame implements ActionListener {
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
    private MuniaoWebimService muniaoWebimService;

    public ChatClient(String defaultlocation, String frontLoginUserKey) {
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

        while (true) {
            try {
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            if (muniaoWebimService != null && cc != null && !cc.getReadyState().equals(ReadyState.OPEN)) {
                System.out.println("准备重连。。。");
                cc.reconnect();
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                //System.out.println(frontLoginUserKeyField.getText());
                //MuniaoWebimService muniaoWebimService = new MuniaoWebimService(frontLoginUserKeyField.getText());

                cc.send(muniaoWebimService.boot());

                close.setEnabled(true);
                connect.setEnabled(false);
                uriField.setEditable(false);
            }
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

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
                // cc = new ChatClient(new URI(uriField.getText()), area, ( Draft ) draft.getSelectedItem() );
                Map<String, String> httpHeaders = new HashMap<>();
                httpHeaders.put("Accept-Encoding", "gzip, deflate, br");
                httpHeaders.put("Accept-Language", "zh-CN,zh;q=0.9,en;q=0.8");
                httpHeaders.put("Cache-Control", "no-cache");
                httpHeaders.put("Host", "webim4.muniao.com");
                httpHeaders.put("Pragma", "no-cache");
                httpHeaders.put("Origin", "http://user2.muniao.com");
                httpHeaders.put("Sec-WebSocket-Extensions", "permessage-deflate; client_max_window_bits");
                httpHeaders.put("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60");
                cc = new WebSocketClient(new URI(uriField.getText()), (Draft) draft.getSelectedItem(), httpHeaders) {
                    @Override
                    public void onMessage(String message) {
                        System.out.println("got: " + message);
                        ta.append("got: " + message + "\n");
                        ta.setCaretPosition(ta.getDocument().getLength());

                        if (StringUtils.isNotEmpty(message)) {
                            JSONObject receiveMessageJson = JSONObject.parseObject(message);
                            String type = receiveMessageJson.getString("type");
                            if ("ping".equalsIgnoreCase(type)) {
                                JSONObject pong = new JSONObject();
                                pong.put("type", "pong");
                                cc.send(pong.toJSONString());
                            } else if ("messages".equalsIgnoreCase(type)) {
                              /*
                              body: "宝寓测试，请勿回;我是房东111111"
                              from: 51192
                              nick: "风的模样"
                              offline: "false"
                              stype: ""
                              timestamp: 1607953728213.3
                              to: "3536480"
                              to_nick: "Paget-MN351"
                              type: "chat"
                              unique_value: "ff5beb21-2134-3ef1-147d-517e977507d4"

                              {
                                  "nick": "风的模样",
                                  "offline": "false",
                                  "unique_value": "75f83a5f-86e5-4e0b-86a0-c24ed446e08c",
                                  "stype": "",
                                  "from": "51192",
                                  "to": "3536480",
                                  "body": "宝寓测试，请勿回；我是房东--44538",
                                  "to_nick": "Paget-MN351",
                                  "type": "chat",
                                  "timestamp": 1607954981002
                              }
                               */
                                //MuniaoWebimService muniaoWebimService = new MuniaoWebimService(frontLoginUserKeyField.getText());
                                JSONArray messageJsonJSONArray = receiveMessageJson.getJSONArray("messages");
                                for (int i = 0; i < messageJsonJSONArray.size(); i++) {
                                    JSONObject messages = messageJsonJSONArray.getJSONObject(i);
                                    /*JSONArray sendMessageArray = new JSONArray();
                                    JSONObject sendMessageJson = new JSONObject();
                                    sendMessageJson.put("body", "宝寓测试，请勿回；我是房东--" + RandomStringUtils.randomNumeric(5));
                                    sendMessageJson.put("from", messages.getInteger("to"));
                                    sendMessageJson.put("nick", messages.getString("to_nick"));
                                    sendMessageJson.put("to", messages.getString("from"));
                                    sendMessageJson.put("to_nick", messages.getString("nick"));
                                    sendMessageJson.put("offline", "false");
                                    sendMessageJson.put("type", "chat");
                                    sendMessageJson.put("stype", "");
                                    sendMessageJson.put("timestamp", "1607955181237.7");
                                    sendMessageJson.put("unique_value", UUID.randomUUID().toString());
                                    sendMessageArray.add(sendMessageJson);
                                    System.out.println(sendMessageArray.toJSONString());*/
                                    //cc.send(sendMessageArray.toJSONString());
                                    muniaoWebimService.sendMessage(messages.getString("from"), "宝寓测试，请勿回；我是房东--" + RandomStringUtils.randomNumeric(5));
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
            muniaoWebimService = new MuniaoWebimService(frontLoginUserKeyField.getText(), 1);
            cc.send(muniaoWebimService.boot());
            connect.setEnabled(false);
            login.setEnabled(false);
            close.setEnabled(true);

            timer = null;
            timer = new java.util.Timer("Timer-online");
            timer.schedule(new TimerTask() {
                public void run() {
                    muniaoWebimService.online();
                }
            }, 30000, 30000);
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
            location = "wss://webim4.muniao.com/";
            //location = "ws://localhost:8887";
            System.out.println("Default server url not specified: defaulting to \'" + location + "\'");
        }
        String frontLoginUserKey = "85EFE19FA89BC480274758C1C7B5A992F6673B1E146D15E4FD1E8EF2D8C8469EAEC32D96F0354A5E4CE2B9318AA8563A63CD6913CF89DB00AD35F5201156A07E335947D1C754A541C5CC94704830B9914D9849FE1865E5A0226E02ED3F101FB3A1114007DA6550E630B2F9FD4ED9797435991E47596C058F886DAF4E7AE3EFF7EBB2E45C3C51FCD12D4CBE19F31A7A3767873DB13015E5285AC190669F1E130A18E440BBCF1591D5DC3C1D72A67EF77ECF8CBE5F90201A68ADAF15981553B8BC";
        new ChatClient(location, frontLoginUserKey);
    }

}