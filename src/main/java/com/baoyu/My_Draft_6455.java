package com.baoyu;

import org.java_websocket.drafts.Draft_6455;
import org.java_websocket.handshake.ClientHandshakeBuilder;
import org.java_websocket.util.Base64;

import java.util.Random;

public class My_Draft_6455 extends Draft_6455 {

    @Override
    public ClientHandshakeBuilder postProcessHandshakeRequestAsClient(ClientHandshakeBuilder request) {
        request.put("Upgrade", "websocket");
        request.put("Connection", "Upgrade");
        byte[] random = new byte[16];
        new Random().nextBytes(random);
        request.put("Sec-WebSocket-Key", Base64.encodeBytes(random));
        request.put("Sec-WebSocket-Version", "13");
        request.put("Sec-WebSocket-Extensions", "permessage-deflate; client_max_window_bits");
        return request;
    }
}
