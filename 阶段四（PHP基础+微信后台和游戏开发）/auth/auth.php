<?php 
	require "network.php";
	require "SQL.php";
// http://ningbonuc.applinzi.com/auth/auth.php
// code
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
 	$sql = "INSERT INTO user(openid,nickname,sex,headimgurl) VALUES('{$openid}','{$nickname}','{$sex}','{$headimgurl}')";
 	insertData($sql,function(){
 		echo "<hr>添加成功".$nickname;
 	},function(){
 		echo "<hr>添加失败".$nickname;
 	});
 	//echo("<script>window.location.href='http://ningbonuc.applinzi.com/auth/game.html';</script>");
 ?>
