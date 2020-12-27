package com.baoyu;

import com.alibaba.fastjson.JSONObject;
import org.apache.commons.codec.digest.Md5Crypt;
import org.apache.commons.lang3.StringUtils;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

public class MuniaoWebimService {
    private String frontLoginUserKey;
    private int utype;
    private String tokenKey;
    private Integer buddyId;

    public MuniaoWebimService(String frontLoginUserKey, int utype) {
        this.frontLoginUserKey = frontLoginUserKey;
        this.utype = utype;
    }

    public String boot() {
        String bootUrl = "https://webim3.muniao.com/webim2/?action=boot&utype=";
        Map<String, String> headers = new HashMap<>();
        headers.put("Referer", "http://user2.muniao.com/");
        headers.put("Cookie", "Front_LoginUserKey=" + frontLoginUserKey);

        String s = HttpClientUtil.sendReq4Post(bootUrl + utype, headers);
        //拿到用户信息，解析出来里面的id/rnd/zend/type等用于后面的websocket登录
        //{"version":"1.0.165","product":"php5","path":"https:\/\/webim3.muniao.com\/webim2\/","static":"\/\/assets.muniao.com\/assets2\/2015\/webim2\/","is_login":"1","user":{"id":51192,"nick":"\u98ce\u7684\u6a21\u6837","presence":"online","show":"unavailable","avatar222":1,"avatar333":"UploadFiles\/root\/user\/51192\/49cf96b6472343009373fff0b9adba0a.jpg_150_150.jpg?0002","avatar":"https:\/\/assets.muniao.com\/UploadFiles\/root\/user\/51192\/49cf96b6472343009373fff0b9adba0a.jpg_150_150.jpg?0002","url":"#","role":"user","status":"","type":1,"rnd":"997836","zend":"B93B17CEDFC1863949728F","isnet":1},"setting":{"play_sound":true,"buddy_sticky":true,"minimize_layout":false,"msg_auto_pop":true},"min":".min","theme":"humanity","local":"zh-CN","emot":"default","opacity":"80","discussion":false,"enable_room":false,"enable_ask":false,"enable_chatlink":true,"enable_shortcut":true,"enable_noti":true,"enable_menu":false,"show_unavailable":true,"upload":false,"token_key":"3b3e8c92b16ca5062da6b9857084610a"}
        //var _IMC = 到;var WEB_SOCKET_SWF_LOCATION
        System.out.println(s);
        if (StringUtils.isEmpty(s)) {
            return null;
        }
        int startIndex = s.indexOf("var _IMC = ");
        //System.out.println(startIndex);
        int endIndex = s.indexOf(";var WEB_SOCKET_SWF_LOCATION");
        //System.out.println(endIndex);
        String substring = s.substring(startIndex + "var _IMC = ".length(), endIndex);
        System.out.println(substring);

        JSONObject imcJson = JSONObject.parseObject(substring);
        //拿到token_key的值 ，后面Online验证是需要用到它
        tokenKey = imcJson.getString("token_key");
        System.out.println("token_key=" + tokenKey);

        JSONObject userJson = imcJson.getJSONObject("user");
        buddyId = userJson.getInteger("id");
        Integer type = userJson.getInteger("type");
        String rnd = userJson.getString("rnd");
        String zend = userJson.getString("zend");

        JSONObject loginBody = new JSONObject();
        loginBody.put("Customer_rnd", rnd);
        loginBody.put("Customer_show", "available");
        loginBody.put("Customer_type", type);
        loginBody.put("Customer_uid", buddyId);
        loginBody.put("Customer_zend", zend);
        loginBody.put("type", "login");
        String wsLoginBody = loginBody.toString();
        //System.out.println(wsLoginBody);
        return wsLoginBody;
    }

    public void sendMessage(String to, String body) {
        String url = "https://webim3.muniao.com/webim2/?action=send_message&type=chat&to=%s&body=%s&callback=jsonp%s&_=%s&utype=" + utype;
        try {
            String finalUrl = String.format(url, to, URLEncoder.encode(body, StandardCharsets.UTF_8.name()), System.currentTimeMillis(), System.currentTimeMillis());
            System.out.println(finalUrl);

            Map<String, String> httpHeaders = new HashMap<>();
            httpHeaders.put("Accept", "*/*");
            httpHeaders.put("Cookie", "Front_LoginUserKey=" + frontLoginUserKey);
            httpHeaders.put("Accept-Encoding", "gzip, deflate, br");
            httpHeaders.put("Accept-Language", "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6");
            httpHeaders.put("Cache-Control", "no-cache");
            httpHeaders.put("Connection", "keep-alive");
            httpHeaders.put("Host", "webim3.muniao.com");
            httpHeaders.put("Pragma", "no-cache");
            httpHeaders.put("Referer", "http://user2.muniao.com/");
            httpHeaders.put("Sec-Fetch-Des", "script");
            httpHeaders.put("Sec-Fetch-Mode", "no-cors");
            httpHeaders.put("Sec-Fetch-Site:", "cross-site");
            httpHeaders.put("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60");
            String sendReq4Get = HttpClientUtil.sendReq4Get(finalUrl, httpHeaders);
            System.out.println(sendReq4Get);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void online() {
        System.out.println("自动online检查");
        String url = "https://webim3.muniao.com/webim2/?action=online_v6_8&callback=%s&_=%s&buddy_ids=%s&csrf_token=%s&crrf_token=%s&crrf_time=%s&crrf_crypto=md5&show=available&utype=%s&chatlink_ids=";
        try {
            String callback = "jsonp" + System.currentTimeMillis();
            String crrf_time = DateTimeFormatter.ofPattern("yyyyMMddHHmmssSS").format(LocalDateTime.now());
            String csrf_token = tokenKey;
            String crrf_token = Md5Crypt.md5Crypt((crrf_time + csrf_token).getBytes(StandardCharsets.UTF_8));
            String finalUrl = String.format(url, callback, System.currentTimeMillis(), buddyId, csrf_token, crrf_token, crrf_time, utype);
            System.out.println(finalUrl);

            Map<String, String> httpHeaders = new HashMap<>();
            httpHeaders.put("Accept", "*/*");
            httpHeaders.put("Cookie", "Front_LoginUserKey=" + frontLoginUserKey);
            httpHeaders.put("Accept-Encoding", "gzip, deflate, br");
            httpHeaders.put("Accept-Language", "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6");
            httpHeaders.put("Cache-Control", "no-cache");
            httpHeaders.put("Connection", "keep-alive");
            httpHeaders.put("Host", "webim3.muniao.com");
            httpHeaders.put("Pragma", "no-cache");
            httpHeaders.put("Referer", "http://user2.muniao.com/");
            httpHeaders.put("Sec-Fetch-Des", "script");
            httpHeaders.put("Sec-Fetch-Mode", "no-cors");
            httpHeaders.put("Sec-Fetch-Site:", "cross-site");
            httpHeaders.put("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60");
            String sendReq4Get = HttpClientUtil.sendReq4Get(finalUrl, httpHeaders);
            System.out.println(sendReq4Get);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        MuniaoWebimService webimService = new MuniaoWebimService("85EFE19FA89BC480274758C1C7B5A992F6673B1E146D15E4FD1E8EF2D8C8469EAEC32D96F0354A5E4CE2B9318AA8563A63CD6913CF89DB00AD35F5201156A07E335947D1C754A541C5CC94704830B9914D9849FE1865E5A0226E02ED3F101FB3A1114007DA6550E630B2F9FD4ED9797435991E47596C058F886DAF4E7AE3EFF7EBB2E45C3C51FCD12D4CBE19F31A7A3767873DB13015E5285AC190669F1E130A18E440BBCF1591D5DC3C1D72A67EF77ECF8CBE5F90201A68ADAF15981553B8BC", 1);
        webimService.boot();
    }
}
