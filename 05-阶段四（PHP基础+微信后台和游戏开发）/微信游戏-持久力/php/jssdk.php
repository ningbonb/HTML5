<?php
use sinacloud\sae\Storage as Storage;
class JSSDK {
  private $appId;
  private $appSecret;
  private $url;


  public function __construct($appId, $appSecret,$url) {
    $this->appId = $appId;
    $this->appSecret = $appSecret;
    $this->url = $url;
  }
  //主方法，获取配置信息
  public function getSignPackage() {
    $jsapiTicket = $this->getJsApiTicket();

    //注意 URL 一定要动态获取,外教调用接口传给我url，服务器配置好返回签名信息
    $url = $this->url;

    $timestamp = time();
    $nonceStr = $this->createNonceStr();

    // 这里参数的顺序要按照 key 值 ASCII 码升序排序
    $string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";

    $signature = sha1($string);

    $signPackage = array(
      "appId"     => $this->appId,
      "nonceStr"  => $nonceStr,
      "timestamp" => $timestamp,
      "url"       => $url,
      "signature" => $signature,
      "rawString" => $string,
      "jsapiTicket"=>$jsapiTicket//验证每次都是返回相同的，外接不需要
    );
    return $signPackage; 
  }

  private function createNonceStr($length = 16) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $str = "";
    for ($i = 0; $i < $length; $i++) {
      $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
    }
    return $str;
  }
  
  private function httpGet($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, 500);
    // 为保证第三方服务器与微信服务器之间数据传输的安全性，所有微信接口采用https方式调用，必须使用下面2行代码打开ssl安全校验。
    // 如果在部署过程中代码在此处验证失败，请到 http://curl.haxx.se/ca/cacert.pem 下载新的证书判别文件。
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, true);
    curl_setopt($curl, CURLOPT_URL, $url);

    $res = curl_exec($curl);
    curl_close($curl);

    return $res;
  }


      //获取ticket::GET
  function getJsApiTicket(){
    $s = new Storage();
    //判断是否第一次请求tocken：查看bucket是否存在
    $bucket = @$s->getBucket("ticket");
    if ($bucket == FALSE) {
      #说是storage没有存储过，第一次请求
      //创建一个bucket用来保存下面请求来的tocken和过期时间 ACL_PUBLIC_READ:公有常量
      $s->putBucket("ticket",'.r:*');
      //请求新的tocken
      $ticket = $this->getNewJsApiTicket();
      return $ticket;

    }else{
      //说明之前存储过
      $response = $s->getObject("ticket","ticket.txt");
      //var_dump($response);
      //读取存储内容
      $saveJson = $response->body;
      //解析
      $josn_obj = json_decode($saveJson);
      //获取过期时间
      $expires_time = $josn_obj->expires_time;
      //当前时间对比
      $current_time = time();
      if ($current_time < $expires_time) {
        #没过期
        $ticket = $josn_obj->ticket;
        return $ticket;
      }else{//过期
        //创建新的token并覆盖保存旧的
        $ticket = $this->getNewJsApiTicket();
        return $ticket;

      }



    }

  }
  //网络请求新的ticket
  function getNewJsApiTicket(){
    $accessToken = $this->getAccessToken();
      // 如果是企业号用以下 URL 获取 ticket
      // $url = "https://qyapi.weixin.qq.com/cgi-bin/get_jsapi_ticket?access_token=$accessToken";
    $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=$accessToken";
    $json_str = $this->httpGet($url);
    //解析
    $josn_obj = json_decode($json_str);

    //var_dump($josn_obj);

    //拿到access_token
    $ticket = $josn_obj->ticket;
    //拿到有效期
    $expires_in = $josn_obj->expires_in;
    //设置过期时间
    $expires_time = time() + $expires_in - 200;

    $saveData = array('ticket' => $ticket, 'expires_time'=>$expires_time);
    //变为json字符串
    $saveJsonStr = json_encode($saveData);
    $s = new Storage();
    //存储到bucket中
    $s->putObject($saveJsonStr, "ticket", "ticket.txt", array(), array('Content-Type' => 'text/plain'));
    //返回token
    return $ticket;

  }


    //获取token::GET
  function getAccessToken(){
    $s = new Storage();
    //判断是否第一次请求tocken：查看bucket是否存在
    $bucket = @$s->getBucket("weixin");
    if ($bucket == FALSE) {
      #说是storage没有存储过，第一次请求
      //创建一个bucket用来保存下面请求来的tocken和过期时间 ACL_PUBLIC_READ:公有常量
      $s->putBucket("weixin",'.r:*');
      //请求新的tocken
      $access_token = $this->getNewAccessToken();
      return $access_token;

    }else{
      //说明之前存储过
      $response = $s->getObject("weixin","token.txt");
      //var_dump($response);
      //读取存储内容
      $saveJson = $response->body;
      //解析
      $josn_obj = json_decode($saveJson);
      //获取过期时间
      $expires_time = $josn_obj->expires_time;
      //当前时间对比
      $current_time = time();
      if ($current_time < $expires_time) {
        #没过期
        $access_token = $josn_obj->access_token;
        return $access_token;
      }else{//过期
        //创建新的token并覆盖保存旧的
        $access_token = $this->getNewAccessToken();
        return $access_token;

      }



    }

  }
  //网络请求新的tocken
  function getNewAccessToken(){
    $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$this->appId}&secret={$this->appSecret}";
    $json_str = $this->httpGet($url);
    //解析
    $josn_obj = json_decode($json_str);

    //var_dump($josn_obj);

    //拿到access_token
    $access_token = $josn_obj->access_token;
    //拿到有效期
    $expires_in = $josn_obj->expires_in;
    //设置过期时间
    $expires_time = time() + $expires_in - 200;

    $saveData = array('access_token' => $access_token, 'expires_time'=>$expires_time);
    //变为json字符串
    $saveJsonStr = json_encode($saveData);
    $s = new Storage();
    //存储到bucket中
    $s->putObject($saveJsonStr, "weixin", "token.txt", array(), array('Content-Type' => 'text/plain'));
    //返回token
    return $access_token;
  } 
}

?>


