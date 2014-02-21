package com.facebook_parser.io_local_base;

import com.facebook_parser.model.AccountVector;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class LocalAccountWriter {

    public static void writeAccountToLocalBase(AccountVector vector, String path) {
        XStream xstream = new XStream(new DomDriver());
        xstream.alias(AccountVector.class.getName(), AccountVector.class);
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(new File(path));
            xstream.toXML(vector, fileOutputStream);
            fileOutputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
