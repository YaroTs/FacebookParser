package com.facebook_parser.settings;

public class AuthData {

    private String login;
    private String password;

    public String getLogin() {
        return login;
    }

    public String getPassword() {
        return password;
    }

    public AuthData(String login, String password) {
        this.login = login;
        this.password = password;
    }
}
