import com.alibaba.fastjson.JSONObject;
import org.java_websocket.client.WebSocketClient;
import org.java_websocket.drafts.Draft;
import org.java_websocket.handshake.ServerHandshake;

import java.net.URI;
import java.util.Iterator;
import java.util.Map;

public class WsClient extends WebSocketClient {

    public WsClient(URI serverUri, Draft draft, Map<String, String> httpHeaders) {
        //super(serverUri);
        super(serverUri, draft, httpHeaders);
    }

    @Override
    public void onOpen(ServerHandshake arg0) {
        System.out.println("握手成功");
        Iterator<String> fields = arg0.iterateHttpFields();
        while (fields.hasNext()) {
            String next = fields.next();
            System.out.println(next + " = " + arg0.getFieldValue(next));
        }
    }

    @Override
    public void onClose(int arg0, String arg1, boolean arg2) {
        System.out.println(arg0);
        System.out.println(arg1);
        System.out.println(arg2);
        System.out.println("连接关闭");
    }

    @Override
    public void onError(Exception arg0) {
        System.out.println("发生错误" + arg0);
    }

    @Override
    public void onMessage(String arg0) {
        System.out.println("收到消息" + arg0);
        JSONObject jsonObject = JSONObject.parseObject(arg0);
        String type = jsonObject.getString("type");
        //System.out.println(type);
        if ("ping".equalsIgnoreCase(type)) {
            JSONObject pong = new JSONObject();
            pong.put("type", "pong");
            send(pong.toJSONString());
            /*System.out.println("发送消息" + pong.toJSONString());
            send(pong.toJSONString());

            PingFrame pingFrame = new PingFrame();
            pingFrame.setPayload(ByteBuffer.wrap(pong.toJSONString().getBytes(StandardCharsets.UTF_8)));
            sendFrame(new PongFrame());*/
        }
    }
}