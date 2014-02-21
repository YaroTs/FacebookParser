package com.facebook_parser.parser;

import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.*;
import com.facebook_parser.settings.Settings;

import java.io.IOException;

public class FacebookParser {

    public void parse() throws IOException {
        final WebClient webClient = new WebClient(BrowserVersion.CHROME);

        System.out.println("Start");
        try {
            auth(webClient);
        } catch (IOException e) {
            System.out.println("Facebook authorization failed");
            e.printStackTrace();
            return;
        }
        final HtmlPage destPage = webClient.getPage("https://www.facebook.com/artem.kirienko/about");
        String source = destPage.getWebResponse().getContentAsString();

        System.out.println(source);

        System.out.println("Finish");
        webClient.closeAllWindows();
    }

    private void auth(WebClient webClient) throws IOException {

        final HtmlPage startPage = webClient.getPage("https://www.facebook.com/");
        final HtmlForm form = (HtmlForm) startPage.getElementById("login_form");
        final HtmlTextInput loginField = form.getInputByName("email");
        final HtmlPasswordInput passwordField = form.getInputByName("pass");

        loginField.setValueAttribute(Settings.getInstance().getLogin());
        passwordField.setValueAttribute(Settings.getInstance().getPassword());

        //our own button for submitting
        HtmlElement button = (HtmlElement) startPage.createElement("button");
        button.setAttribute("type", "submit");
        form.appendChild(button);

        button.dblClick();
    }

}
