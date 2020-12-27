import org.java_websocket.extensions.permessage_deflate.PerMessageDeflateExtension;

public class MyPerMessageDeflateExtension extends PerMessageDeflateExtension {
    @Override
    public String getProvidedExtensionAsClient() {
        return "permessage-deflate; client_max_window_bits";
    }
}
