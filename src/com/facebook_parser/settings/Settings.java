package com.facebook_parser.settings;

public class Settings {

    private static final String AUTH_DATA_FILE_PATH = "config/settings.xml";
    private AuthData authData;

    public static final String TEST_FILE_NAME = "testdata/testPage.html";
    public static final String TEST_FRIENDS_FILE_NAME = "testdata/testFriend.html";

    private static Settings instance;

    private Settings() {
        authData = Utils.getAuthInfo(AUTH_DATA_FILE_PATH);
    }

    public static synchronized Settings getInstance() {
        if (instance == null)
            instance = new Settings();
        return instance;
    }

    public String getLogin() {
        return authData.getLogin();
    }

    public String getPassword() {
        return authData.getPassword();
    }


}
