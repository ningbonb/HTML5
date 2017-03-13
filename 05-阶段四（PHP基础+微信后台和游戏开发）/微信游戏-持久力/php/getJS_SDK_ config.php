<?php 
	// 参数是需要使用js_sdk的网页
	require "jssdk.php";
	//获取参数
	$url = $_GET["url"];
	//获取jssdk对象
	$jssdk = new JSSDK("wxb56f1725c4f779a9","4a117fe4a98122c519623c5300bc1e21",$url);
	//信息配置
	$infoArr = $jssdk->getSignPackage();
	//返回信息
	echo json_encode($infoArr);


 ?>