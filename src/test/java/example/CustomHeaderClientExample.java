package example;

import com.baoyu.MuniaoWebimService;
import org.java_websocket.enums.ReadyState;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

/**
 * This class shows how to add additional http header like "Origin" or "Cookie".
 * <p>
 * To see it working, start ServerRejectHandshakeExample and then start this example.
 */
public class CustomHeaderClientExample {
    //private static String URL = "wss://webim4.muniao.com/";
    private static String URL = "ws://localhost:8887";
    private static String loginCookie = "85EFE19FA89BC480274758C1C7B5A992F6673B1E146D15E4FD1E8EF2D8C8469EAEC32D96F0354A5E4CE2B9318AA8563A63CD6913CF89DB00AD35F5201156A07E335947D1C754A541C5CC94704830B9914D9849FE1865E5A0226E02ED3F101FB3A1114007DA6550E630B2F9FD4ED9797435991E47596C058F886DAF4E7AE3EFF7EBB2E45C3C51FCD12D4CBE19F31A7A3767873DB13015E5285AC190669F1E130A18E440BBCF1591D5DC3C1D72A67EF77ECF8CBE5F90201A68ADAF15981553B8BC";

    public static void main(String[] args) throws URISyntaxException, InterruptedException {
        MuniaoWebimService muniaoWebimService = new MuniaoWebimService(loginCookie, 1);

        Map<String, String> httpHeaders = new HashMap<String, String>();
        httpHeaders.put("Origin", "http://user2.muniao.com");
        ExampleClient c = new ExampleClient(new URI(URL), httpHeaders);
        //We expect no successful connection
        c.connectBlocking();
        //c.send(muniaoWebimService.boot(loginCookie, 1));
        while (true) {
            if (!c.getReadyState().equals(ReadyState.OPEN)) {
                c.reconnect();
            }
            Thread.sleep(1000);
        }
    }
}