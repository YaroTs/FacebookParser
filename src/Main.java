import org.apache.commons.logging.LogFactory;

import java.util.logging.Level;

public class Main {

    public static void main(String[] args) throws Exception {
        init();
    }

    private static void init() {
        LogFactory.getFactory().setAttribute("org.apache.commons.logging.Log", "org.apache.commons.logging.impl.NoOpLog");
        java.util.logging.Logger.getLogger("org.apache.commons.httpclient").setLevel(Level.OFF);
        java.util.logging.Logger.getLogger("com.gargoylesoftware").setLevel(Level.OFF);
    }
}
