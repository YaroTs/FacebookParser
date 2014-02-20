import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.*;

public class FacebookParser {

    public void parse() throws Exception{
        final WebClient webClient = new WebClient(BrowserVersion.CHROME);
//        webClient.setJavaScriptEnabled(true);
//        webClient.setThrowExceptionOnFailingStatusCode(false);
//        webClient.setThrowExceptionOnScriptError(false);
//        System.out.println("Parser on static data result:");
//        System.out.println(FacebookBasicParser.getAccountInfo("test_data/test_about.htm"));
//        System.out.println(FacebookBasicParser.getAccountFriends("test_data/test_friends.htm"));
//
        System.out.println("Parser on dynamic page:");

        final HtmlPage page = webClient.getPage("https://www.facebook.com/");
        final HtmlForm form = (HtmlForm) page.getElementById("login_form");
        final HtmlTextInput textField = form.getInputByName("email");
        final HtmlPasswordInput textField1 = form.getInputByName("pass");
        final HtmlLabel button = form.getElementById("loginbutton");
    }


}
