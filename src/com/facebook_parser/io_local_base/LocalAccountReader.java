package com.facebook_parser.io_local_base;


import com.facebook_parser.model.AccountVector;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.StreamException;
import com.thoughtworks.xstream.io.xml.DomDriver;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class LocalAccountReader {

    public static AccountVector readAccountFromLocalBase(String path) {
        XStream xstream = new XStream(new DomDriver());
        xstream.alias(AccountVector.class.getName(), AccountVector.class);
        try {
            return (AccountVector) xstream.fromXML(new FileReader(path));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            return null;
        } catch (StreamException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static Map<String, AccountVector> readAllAccounts(String path) {
        Map<String, AccountVector> accounts = new HashMap<>();
        File myFolder = new File(path);
        File[] files = myFolder.listFiles();
        if (files == null) return Collections.emptyMap();
        for (File f : files) {
            AccountVector vector = LocalAccountReader.readAccountFromLocalBase(f.toString());
            accounts.put(vector.getId(), vector);
        }
        return accounts;
    }
}
