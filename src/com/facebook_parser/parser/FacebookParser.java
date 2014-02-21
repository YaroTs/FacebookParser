package com.facebook_parser.parser;

import com.facebook_parser.model.AccountVector;
import com.facebook_parser.settings.Settings;
import com.facebook_parser.settings.Utils;
import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.*;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.Set;

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
        final HtmlPage destPage = webClient.getPage("https://www.facebook.com/artem.kirienko/friends_all");

        System.out.println(destPage.getWebResponse().getContentAsString());
//        System.out.println(extractAccountInfo(destPage));
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

    public void testParse() throws IOException {
        AccountVector vector = extractAccountVector();
        addAccountFriends(vector);
        System.out.println(vector);
    }

    private AccountVector extractAccountVector() throws IOException {
        AccountVector result = new AccountVector();
        String source = Utils.readFile(Settings.TEST_FILE_NAME, Charset.defaultCharset()).replace("<!--", "").replace("-->", "");
        Document doc = Jsoup.parse(source);
        Element nameSurname = doc.select(HtmlTags.USER_NAME_SURNAME).first();
        String link = nameSurname.attr("href");
        result.setId(InfoExtractor.extractId(link));
        String[] name = nameSurname.text().split(" ");
        result.setFirst_name(name[0]);
        result.setLast_name(name[1]);

        return result;
    }

    private void addAccountFriends(AccountVector vector) throws IOException {
        String source = Utils.readFile(Settings.TEST_FRIENDS_FILE_NAME, Charset.defaultCharset()).replace("<!--", "").replace("-->", "");
        Set<String> friends = InfoExtractor.getAccountFriends(source);
        for (String s : friends) {
            vector.addFriend(s);
        }
    }

}
