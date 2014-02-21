package com.facebook_parser.settings;

import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.StreamException;
import com.thoughtworks.xstream.io.xml.DomDriver;

import java.io.*;

public class Utils {
    public static AuthData getAuthInfo(String path) {
        XStream xstream = new XStream(new DomDriver());
        try {
            return (AuthData) xstream.fromXML(new FileReader(path));

        } catch (FileNotFoundException | StreamException e) {
            System.out.println("Error in login-password loading");
            e.printStackTrace();
        }
        return null;
    }

    public static void writeAuthData(AuthData authData, String path) {
        XStream xstream = new XStream(new DomDriver());
        xstream.alias(AuthData.class.getName(), AuthData.class);
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(new File(path));
            xstream.toXML(authData, fileOutputStream);
            fileOutputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
