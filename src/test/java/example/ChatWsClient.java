package example;

import org.java_websocket.client.WebSocketClient;
import org.java_websocket.handshake.ServerHandshake;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URISyntaxException;

public class ChatWsClient extends WebSocketClient {
    public ChatWsClient(URI serverUri) {
        super(serverUri);
    }

    @Override
    public void onOpen(ServerHandshake serverHandshake) {
        System.out.println("You are connected to ChatServer: " + getURI() + "\n");
    }

    @Override
    public void onMessage(String s) {
        System.out.println("got: " + s);
    }

    @Override
    public void onClose(int code, String reason, boolean remote) {
        System.out.println("You have been disconnected from: " + getURI() + "; Code: " + code + " " + reason + "\n");
    }

    @Override
    public void onError(Exception e) {
        System.out.println("Exception occurred ...\n" + e + "\n");
    }

    public static void main(String[] args) throws URISyntaxException, IOException {
        ChatWsClient cc = new ChatWsClient(new URI("ws://localhost:8887"));
        cc.setConnectionLostTimeout(0);
        cc.connect();

        BufferedReader sysin = new BufferedReader(new InputStreamReader(System.in));
        while (true) {
            String in = sysin.readLine();
            if (in.equals("exit")) {
                cc.close(1000);
                break;
            } else {
                cc.send(in);
            }
        }
    }
}
