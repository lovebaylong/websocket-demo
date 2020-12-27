import com.alibaba.fastjson.JSONObject;
import org.java_websocket.drafts.Draft_6455;
import org.java_websocket.enums.ReadyState;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;

public class MyClient {
    // 根据实际websocket地址更改
    private static String URL = "wss://webim4.muniao.com/";

    public static void main(String[] args) {
        try {

            MyPerMessageDeflateExtension iExtension = new MyPerMessageDeflateExtension();

            Draft_6455 draft6455 = new Draft_6455(iExtension);

            Map<String, String> httpHeaders = new HashMap<>();
            //httpHeaders.put("Connection", "Upgrade");
            //httpHeaders.put("Host", "webim4.muniao.com");
            //httpHeaders.put("Upgrade", "websocket");
            //httpHeaders.put("Sec-WebSocket-Extensions", "permessage-deflate; client_max_window_bits");
            //httpHeaders.put("Sec-WebSocket-Key", "u2w9nj0TM22KvFSs2+/EEg==");
            //httpHeaders.put("Sec-WebSocket-Version", "13");
            //httpHeaders.put("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60");
            httpHeaders.put("Origin", "http://user2.muniao.com");
            WsClient myClient = new WsClient(new URI(URL), draft6455, httpHeaders);
            myClient.connect();
            // 判断是否连接成功，未成功后面发送消息时会报错
            while (!myClient.getReadyState().equals(ReadyState.OPEN)) {
                System.out.println("连接中···请稍后");
                Thread.sleep(1000);
            }
            //1、连接握手成功后发起第一个登录消息
            String loginBody = assambleLoginBody();
            System.out.println(loginBody);
            myClient.send(loginBody);
            System.out.println("发送成功");


            //myClient.send("{\"type\":\"pong\"}");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static String assambleLoginBody() {
	    /*
	    Customer_rnd: "524061"
        Customer_show: "available"
        Customer_type: 1
        Customer_uid: 51192
        Customer_zend: "65ED1FEE73C086C84C18E2"
        type: "login"
	     */
        JSONObject loginBody = new JSONObject();
        loginBody.put("Customer_rnd", "557217");
        loginBody.put("Customer_show", "available");
        loginBody.put("Customer_type", 1);
        loginBody.put("Customer_uid", "51192");
        loginBody.put("Customer_zend", "1BCD60509E1CF845ED219E");
        loginBody.put("type", "login");
        return loginBody.toString();
    }
}