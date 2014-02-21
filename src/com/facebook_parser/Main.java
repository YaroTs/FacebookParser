package com.facebook_parser;

import com.facebook_parser.parser.FacebookParser;
import org.apache.commons.logging.LogFactory;

import java.io.IOException;
import java.util.logging.Level;

public class Main {

    public static void main(String[] args) {
        init();
//        Utils.writeAuthData(new AuthData("login","password"),"config/settings.xml");
        try {
            FacebookParser parser = new FacebookParser();
            parser.testParse();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void init() {
        LogFactory.getFactory().setAttribute("org.apache.commons.logging.Log", "org.apache.commons.logging.impl.NoOpLog");
        java.util.logging.Logger.getLogger("org.apache.commons.httpclient").setLevel(Level.OFF);
        java.util.logging.Logger.getLogger("com.gargoylesoftware").setLevel(Level.OFF);
    }
}
