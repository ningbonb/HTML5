<?php 
	require "network.php";
	require "SQL.php";
	session_start();//语句前面有输出语句会报警告
	//session_start：$_SESSION就可以使用缓存数据，里面的数据可以保存，也可以在其他页面获取（会话的生命周期是临时的，网页被关闭后数据被清除）
	//http://ningbonuc.applinzi.com/countMoney2/php/auth.php
	//1.引导用户点击这个链接，授权成功，存储用户信息，开始玩游戏
	//https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb56f1725c4f779a9&redirect_uri=http://ningbonuc.applinzi.com/countMoney2/php/auth.php&response_type=code&scope=snsapi_userinfo&state=canshu#wechat_redirect
	//code
	//print_r($_GET);
	//echo("<hr>");
	$code = $_GET["code"];
	$state = $_GET["state"];
	echo "{$code}<hr>{$state}<hr>";

	//2.通过code值获取access_token openid
	$url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxb56f1725c4f779a9&secret=4a117fe4a98122c519623c5300bc1e21&code={$code}&grant_type=authorization_code";

	$response = httpGet($url);
	//echo $response;
	$tokenObj = json_decode($response);

	//换取用户信息的参数
	$access_token = $tokenObj->access_token;
	$openid = $tokenObj->openid;

	//3.获取用户信息
	$userUrl = "https://api.weixin.qq.com/sns/userinfo?access_token={$access_token}&openid={$openid}&lang=zh_CN";
	$responseUser = httpGet($userUrl);
	//echo $responseUser;
 	$userObj = json_decode($responseUser);
 	$openid = $userObj->openid;
 	$nickname = $userObj->nickname;
 	$sex = $userObj->sex == 1 ? "男" : "女";
 	$headimgurl = $userObj->headimgurl;

 	echo ($nickname."<hr>".$sex."<hr>");
 	echo ("<img src='{$headimgurl}'>");

 	//保存到数据库
 	$sql = "INSERT INTO wxuser(openid,nickname,sex,headimgurl) VALUES('{$openid}','{$nickname}','{$sex}','{$headimgurl}')";
 	insertData($sql,function(){
 		global $nickname;
 		echo "<hr>添加成功".$nickname;
 	},function(){
 		global $nickname;
 		echo "<hr>添加失败".$nickname;
 	});

 	//保存当前玩家的openid
 	//session_start();
 	$_SESSION['openid'] = $openid;
 	//http://ningbonuc.applinzi.com/countMoney2/home.html

 	echo("<script>window.location.href='http://ningbonuc.applinzi.com/countMoney2/home.html';</script>");
 ?>
