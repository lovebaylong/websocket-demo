package com.baoyu;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpOptions;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class HttpClientUtil {

    public static String sendReq4Post(String url, Map<String, String> params, String reqBody, String contentType, Map<String, String> headers) {
        CloseableHttpClient httpclient = HttpClients.createDefault();
        String result = null;
        String status = null;
        try {
            HttpPost httpPost = new HttpPost(url);
            if (null != params && !params.isEmpty()) {
                List<NameValuePair> nvps = new ArrayList<>();
                for (Map.Entry<String, String> entry : params.entrySet()) {
                    nvps.add(new BasicNameValuePair(entry.getKey(), entry.getValue()));
                }
                httpPost.setEntity(new UrlEncodedFormEntity(nvps, StandardCharsets.UTF_8));
            }

            if (StringUtils.isNotEmpty(reqBody)) {
                StringEntity reqBodyEntity = new StringEntity(reqBody, StandardCharsets.UTF_8);
                if (StringUtils.isNotEmpty(contentType)) {
                    reqBodyEntity.setContentType(contentType);
                }
                httpPost.setEntity(reqBodyEntity);
            }

            if (null != headers && !headers.isEmpty()) {
                for (Map.Entry<String, String> header : headers.entrySet()) {
                    httpPost.addHeader(header.getKey(), header.getValue());
                }
            }

            try (CloseableHttpResponse response1 = httpclient.execute(httpPost)) {
                if (null != response1) {
                    if (null != response1.getStatusLine()) {
                        status = response1.getStatusLine().toString();
                    }
                    if (null != response1.getEntity()) {
                        result = EntityUtils.toString(response1.getEntity(), StandardCharsets.UTF_8);
                    }
                }
            } catch (Exception e) {
                System.out.println("向Http服务端发送请求时发生异常，原因：" + e);
            }
        } catch (Exception e) {
            System.out.println("向Http服务端发送请求时发生异常，原因：" + e);
        } finally {
            if (httpclient != null) {
                try {
                    httpclient.close();
                } catch (Exception e) {
                    System.out.println("向Http服务端发送请求时发生异常，原因：" + e);
                }
            }
        }
        System.out.println(String.format("\n\n------------------------------------------------------------------\n向Http服务端发送请求：\n请求地址：%s\n请求体：%s\n响应状态：%s\n响应结果：%s\n------------------------------------------------------------------\n\n", url, reqBody, status, result));
        return result;
    }

    public static String sendReqBody4Post(String url, String reqBody, String contentType, Map<String, String> headers) {
        return sendReq4Post(url, null, reqBody, contentType, headers);
    }

    public static String sendReq4Post(String url, Map<String, String> headers) {
        return sendReq4Post(url, null, null, null, headers);
    }

    public static String sendReq4Get(String url, Map<String, String> headers) {
        CloseableHttpClient httpclient = HttpClients.createDefault();
        String result = null;
        String status = null;
        try {
            HttpGet httpGet = new HttpGet(url);
            if (null != headers && !headers.isEmpty()) {
                for (Map.Entry<String, String> header : headers.entrySet()) {
                    httpGet.addHeader(header.getKey(), header.getValue());
                }
            }

            try (CloseableHttpResponse response1 = httpclient.execute(httpGet)) {
                if (null != response1) {
                    if (null != response1.getStatusLine()) {
                        status = response1.getStatusLine().toString();
                    }
                    if (null != response1.getEntity()) {
                        result = EntityUtils.toString(response1.getEntity(), StandardCharsets.UTF_8);
                    }
                }
            } catch (Exception e) {
                System.out.println("向Http服务端发送请求时发生异常，原因：" + e);
            }
        } catch (Exception e) {
            System.out.println("向Http服务端发送请求时发生异常，原因：" + e);
        } finally {
            if (httpclient != null) {
                try {
                    httpclient.close();
                } catch (Exception e) {
                    System.out.println("向Http服务端发送请求时发生异常，原因：" + e);
                }
            }
        }
        System.out.println(String.format("\n\n------------------------------------------------------------------\n向Http服务端发送请求：\n请求地址：%s\n响应状态：%s\n响应结果：%s\n------------------------------------------------------------------\n\n", url, status, result));
        return result;
    }

    public static String sendReq4Options(String url, Map<String, String> headers) {
        CloseableHttpClient httpclient = HttpClients.createDefault();
        String result = null;
        String status = null;
        try {
            HttpOptions httpOptions = new HttpOptions(url);
            if (null != headers && !headers.isEmpty()) {
                for (Map.Entry<String, String> header : headers.entrySet()) {
                    httpOptions.addHeader(header.getKey(), header.getValue());
                }
            }

            try (CloseableHttpResponse response1 = httpclient.execute(httpOptions)) {
                if (null != response1) {
                    if (null != response1.getStatusLine()) {
                        status = response1.getStatusLine().toString();
                    }
                    if (null != response1.getEntity()) {
                        result = EntityUtils.toString(response1.getEntity(), StandardCharsets.UTF_8);
                    }
                }
            } catch (Exception e) {
                System.out.println("向Http服务端发送请求时发生异常，原因：" + e);
            }
        } catch (Exception e) {
            System.out.println("向Http服务端发送请求时发生异常，原因：" + e);
        } finally {
            if (httpclient != null) {
                try {
                    httpclient.close();
                } catch (Exception e) {
                    System.out.println("向Http服务端发送请求时发生异常，原因：" + e);
                }
            }
        }
        System.out.println(String.format("\n\n------------------------------------------------------------------\n向Http服务端发送请求：\n请求地址：%s\n响应状态：%s\n响应结果：%s\n------------------------------------------------------------------\n\n", url, status, result));
        return result;
    }
}
