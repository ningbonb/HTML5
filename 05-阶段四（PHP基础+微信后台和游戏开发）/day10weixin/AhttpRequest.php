<?php 
//测试appid：wxb56f1725c4f779a9
//测试密钥：4a117fe4a98122c519623c5300bc1e21
/*
	1.初始化一歌请求对象,curl
	2.对curl进行配置
	3.执行curl进行请求
	4.关闭curl
 */ 
	//1.:curl_init参数可以指定一个链接，不过一般可以放到第二步配置curl时指定。返回值是一个resource类型
	$curl = curl_init();
	//var_dump($curl);
	
	//2.配置:三个参数
	//参数1：curl_init返回值
	//参数2：设置选项：比如：设置请求链接选项，请求方式选项等
	
	$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxb56f1725c4f779a9&secret=4a117fe4a98122c519623c5300bc1e21";
	//配置请求的url链接
	curl_setopt($curl, CURLOPT_URL, $url);
	//是否检测服务器证书，FALSE不检测（）
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
	//关闭默认输出，TRUE 将curl_exec()获取的信息以字符串返回，而不是直接输出。
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);

	//3.执行：返回值默认Boolean类型，curl_exec会自动输入执行结果，把结果返回给浏览器
	$res = curl_exec($curl);

	//4.关闭
	curl_close($curl);
	echo "<hr>";
	var_dump($res);
 ?>