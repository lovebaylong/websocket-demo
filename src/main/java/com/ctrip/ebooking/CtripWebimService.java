package com.ctrip.ebooking;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.baoyu.HttpClientUtil;
import org.apache.commons.lang3.RandomStringUtils;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * 1、发一个open
 * 2、收到一个open和stream:features
 * 3、发一个auth
 * 4、收到一个success
 * 5、发一个_bind_auth_2
 * 6、收一个result
 * 7、发一个_session_auth_2
 * 8、收到一个result
 *
 * @author Alex
 */
public class CtripWebimService {
    private final String imTicket;
    private final Map<String, String> COMMON_HEADER_MAP;

    public CtripWebimService(String imTicket) {
        this.imTicket = imTicket;

        COMMON_HEADER_MAP = new HashMap<>();
        COMMON_HEADER_MAP.put("cpc", "pc");
        COMMON_HEADER_MAP.put("protocal", "https");
        COMMON_HEADER_MAP.put("language", "zh-CN");
        COMMON_HEADER_MAP.put("syscode", "89");
        COMMON_HEADER_MAP.put("appid", "99999999");
    }

    public Map<String, String> getCommonHeaders() {
        Map<String, String> headers = new HashMap<>();
        headers.put(":authority", "m.ctrip.com");
        headers.put(":scheme", "https");
        headers.put("accept", "*/*");
        headers.put("accept-encoding", "gzip, deflate, br");
        headers.put("accept-language", "zh-CN,zh;q=0.9,en;q=0.8");
        headers.put("cookieorigin", "https://ebooking.ctrip.com");
        headers.put("origin", "https://ebooking.ctrip.com");
        headers.put("referer", "https://ebooking.ctrip.com/ebkovsassembly/imWhole.html?pageid=10650009638&resource=%E6%9C%AA%E7%9F%A5%E6%9D%A5%E6%BA%90");
        headers.put("sec-fetch-dest", "empty");
        headers.put("sec-fetch-mode", "cors");
        headers.put("sec-fetch-site", "same-site");
        headers.put("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36");
        return headers;
    }

    public String open() {
        return "<open xmlns='urn:ietf:params:xml:ns:xmpp-framing' to='im.ctrip.com' version='1.0'/>";
    }

    /**
     * 发送一个auth消息，但是其中的148个长度的字符串不知道从哪里来？
     */
    public String auth() {
        //@TODO 查找协议体内的148个长度的字符串从何而来？即使我小范围的修改这个值也能正常通过请求，但是直接生成一个新的就不行
        //return "<auth xmlns='urn:ietf:params:xml:ns:xmpp-sasl' mechanism='PLAIN'>X2ltZWJrMzYxMDM3MzU3MkBpbS5jdHJpcC5jb20AX2ltZWJrMzYxMDM3MzU3MgBCODdFM0QyMDJGOTZEMkMyRUQ2QjU1QjE5MURCNzM4MDZBQTlFRDQ4ODI2ODhERkVGRDZFNjAzRkI4MjVCQTcz</auth>";
        return "<auth xmlns='urn:ietf:params:xml:ns:xmpp-sasl' mechanism='PLAIN'>X2ltZWJrMzYxMDM3MzU3MkBpbS5jdHJpcC5jb20AX2ltZWJrMzYxMDM3MzU3MgBCODdFM0QyMDJGOTZEMkMyRUQ2QjU1QjE5MURCNzM4MDZBQTlFRDQ4ODI2ODhERkVGRDZFNjAzRkI4MjVCQT36</auth>";
    }

    public String bindAuth2() {
        return "<iq type='set' id='_bind_auth_2' xmlns='jabber:client'><bind xmlns='urn:ietf:params:xml:ns:xmpp-bind'><resource>WEBSOCKET_1.3.0</resource></bind></iq>";
    }

    public String sessionAuth2() {
        return "<iq type='set' id='_session_auth_2' xmlns='jabber:client'><session xmlns='urn:ietf:params:xml:ns:xmpp-session'/></iq>";
    }

    public String heart(String jid) {
        //_imebk3610373572
        return "<iq from='" + jid + "@im.ctrip.com/WEBSOCKET_1.3.0' to='im.ctrip.com' id='" + System.currentTimeMillis() + "' type='get' xmlns='jabber:client'><ping xmlns='urn:xmpp:ping'/></iq>";
    }

    private JSONObject getCommonHeadJson() {
        JSONArray extensionArray = new JSONArray();
        for (Map.Entry<String, String> entry : COMMON_HEADER_MAP.entrySet()) {
            JSONObject eachJson = new JSONObject();
            eachJson.put("name", entry.getKey());
            eachJson.put("value", entry.getValue());
            extensionArray.add(eachJson);
        }

        JSONObject headJson = new JSONObject();
        //headJson.put("auth", "B87E3D202F96D2C2ED6B55B191DB73806AA9ED4882688DFEFD6E603FB825BA73");
        headJson.put("auth", imTicket);
        headJson.put("extension", extensionArray);
        return headJson;
    }

    /**
     * 获取用户信息
     *
     * @return jid
     */
    public String getUserJid() {
        //先检查登录token,接口：checkImLoginToken
        checkImLoginToken();

        String url = "https://m.ctrip.com/restapi/soa2/11679/GetMyInfo.json";
        String path = "/restapi/soa2/11679/GetMyInfo.json";
        //真正调用获取用户信息前要先调用OPTIONS方法获取对应的权限
        sendOptions(url, path);

        Map<String, String> headers = getCommonHeaders();
        headers.put(":method", "POST");
        headers.put(":path", path);
        headers.put("content-type", "application/json");

        JSONObject mesage = new JSONObject();
        mesage.put("head", getCommonHeadJson());
        String s = mesage.toJSONString();
        System.out.println(s);
        /*
        {
            "ResponseStatus": {
                "Timestamp": "/Date(1610356731444+0800)/",
                "Ack": "Success",
                "Errors": [],
                "Extension": [{
                    "Id": "CLOGGING_TRACE_ID",
                    "Value": "7709410785341179615"
                }, {
                    "Id": "RootMessageId",
                    "Value": "100025527-0a3d50aa-447321-3356838"
                }]
            },
            "name": "花悦梵星海景客栈",
            "avatar": "http://dimg04.c-ctrip.com/images/200b070000002poa2DC71_R_120_120.jpg",
            "jid": "_imebk3610373572",
            "extPropertys": {
                "foreignNickName": "",
                "type": "NEW"
            }
        }
         */
        String reqBody4Post = HttpClientUtil.sendReqBody4Post(url, s, "application/json", headers);
        JSONObject jsonObject = JSONObject.parseObject(reqBody4Post);
        String jid = jsonObject.getString("jid");
        System.out.println(jid);
        return jid;
    }

    public String sendMessage(String partnerJid, String content) {
        String url = "https://m.ctrip.com/restapi/soa2/11679/SendMessage.json";
        String path = "/restapi/soa2/11679/SendMessage.json";
        //真正调用发送消息前要先调用OPTIONS方法获取对应的权限
        sendOptions(url, path);

        /*
        bizType: 1356
        head: {,…}
        auth: "B87E3D202F96D2C2ED6B55B191DB73806AA9ED4882688DFEFD6E603FB825BA73"
        extension: [{name: "cpc", value: "pc"}, {name: "protocal", value: "https"}, {name: "language", value: "zh-CN"},…]
        localId: "3507ef59-1326-4402-52a7-161019842996"
        localTimeStamp: 1610348292996
        messageBody: "房东宝寓测试聊天10↵"
        msgType: 0
        newthread: null
        partnerJid: "1655828376486674653"
        resource: "WEBSOCKET_1.3.0"
        subject: null
        threadId: "603b135c-816f-4f87-8839-2bed5a5b7a64"
        type: "groupchat"
         */

        JSONObject message = new JSONObject();
        message.put("bizType", "1356");
        message.put("localId", UUID.randomUUID());
        message.put("localTimeStamp", System.currentTimeMillis());
        message.put("messageBody", content);
        message.put("msgType", 0);
        message.put("newthread", null);
        //message.put("partnerJid", "1655828376486674653");
        message.put("partnerJid", partnerJid);
        message.put("resource", "WEBSOCKET_1.3.0");
        message.put("subject", null);
        message.put("threadId", UUID.randomUUID());
        message.put("type", "groupchat");

        message.put("head", getCommonHeadJson());
        String s = message.toJSONString();
        System.out.println(s);

        Map<String, String> headers = getCommonHeaders();
        headers.put(":method", "POST");
        headers.put(":path", path);
        headers.put("content-type", "application/json");

        return HttpClientUtil.sendReqBody4Post(url, s, "application/json", headers);
    }

    private void sendOptions(String url, String path) {
        Map<String, String> headers = getCommonHeaders();
        headers.put(":method", "OPTIONS");
        headers.put(":path", path);
        headers.put("access-control-request-headers", "content-type,cookieorigin");
        headers.put("access-control-request-method", "POST");
        HttpClientUtil.sendReq4Options(url, headers);
    }

    public boolean mayBeJSON(String string) {
        return (string != null && string.trim().length() > 0) && (("null".equals(string))
                || ((string.startsWith("[")) && (string.endsWith("]"))) || ((string.startsWith("{")) && (string.endsWith("}"))));
    }

    private void checkImLoginToken() {
        String url = "https://ebooking.ctrip.com/ebkovsassembly/api/checkImLoginToken";
        Map<String, String> headers = getCommonHeaders();
        headers.put(":authority", "ebooking.ctrip.com");
        headers.put(":method", "POST");
        headers.put(":path", "/ebkovsassembly/api/checkImLoginToken");
        headers.put("accept", "application/json, text/javascript, */*; q=0.01");
        headers.put("content-type", "application/json;charset=UTF-8");
        headers.put("cookie", "_RF1=113.119.111.207; _RSG=kS4SOu6An524o.fCippit8; _RDG=284e319dbbecb52d0b1d902f8c154022a3; _RGUID=2171286e-1870-472e-8dec-cf3b0ca7ec84; imuid=_IMEBK3610373572; ebk_user_token=8bddf31c-586a-4ab3-bf22-385c9a506efe; autoLogin=T; VoiceType=ctrip; OrderCount=0; fastreplyswitch=1; LOGIN_GUID=DD29AC029EE24D18901B64DBA056F6CB; randomkey=41ae9410-f627-4624-a71d-47e49c451f10; usertoken=41ae9410-f627-4624-a71d-47e49c451f10; imislogin=8653815^1; imticket=" + imTicket + "; _bfi=p1%3D10650009638%26p2%3D10650020120%26v1%3D43%26v2%3D42; _bfa=1.1610327871517.24oq80.1.1610348251550.1610352841464.6.44; _bfs=1.19");
        headers.put("x-requested-with", "XMLHttpRequest");
        HttpClientUtil.sendReq4Post(url, headers);
    }
}
