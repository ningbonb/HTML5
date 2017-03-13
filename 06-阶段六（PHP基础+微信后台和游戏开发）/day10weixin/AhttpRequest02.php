<?php 
	function httpGet($url){
		//1.:curl_init参数可以指定一个链接，不过一般可以放到第二步配置curl时指定。返回值是一个resource类型
		$curl = curl_init();
		//var_dump($curl);
		
		//2.配置:三个参数
		//参数1：curl_init返回值
		//参数2：设置选项：比如：设置请求链接选项，请求方式选项等
		
		
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

		return $res;
	}//get请求结束

	$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxb56f1725c4f779a9&secret=4a117fe4a98122c519623c5300bc1e21";

	//echo httpGet($url);
	
	function httpPost($url,$data){
		//1
		$curl = curl_init();
		//2
		//配置请求的url链接
		curl_setopt($curl, CURLOPT_URL, $url);
		//是否检测服务器证书，FALSE不检测（）
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
		//关闭默认输出，TRUE 将curl_exec()获取的信息以字符串返回，而不是直接输出。
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
		//指定post请求方式
		curl_setopt($curl, CURLOPT_POST, TRUE);
		//设置Post请求参数
		curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
		
		//3执行
		$res = curl_exec($curl);

		//4关闭
		curl_close($curl);

		//返回数据
		return $res;
	}

	//设置用户备注名
	//TK（每次请求都会变化，请求一次，上次的token失效）：：：：：:Pm0sjRbb4KbYZi2fgyYtN8RkyPo1DrviMfv_0jOIyzfXF5E45Epdb57sV3rHAK9XCUkkcvosOEE9na5d05LwjsYd7IrD3tXX18ChuVfG-TI1LC_3BooCGz_duvHW6ZNIBBUeAIARRK
	//
	//https://api.weixin.qq.com/cgi-bin/user/info/updateremark?access_token=ACCESS_TOKEN
	
	/*参数实例
	POST数据例子：
	{
	"openid":"oDF3iY9ffA-hqb2vVvbr7qxf6A0Q",
	"remark":"pangzi"
	}
	 */
	
	$url = "https://api.weixin.qq.com/cgi-bin/user/info/updateremark?access_token=Pm0sjRbb4KbYZi2fgyYtN8RkyPo1DrviMfv_0jOIyzfXF5E45Epdb57sV3rHAK9XCUkkcvosOEE9na5d05LwjsYd7IrD3tXX18ChuVfG-TI1LC_3BooCGz_duvHW6ZNIBBUeAIARRK";
	$data = '{
	"openid":"o5_qOwOADVK1RTsi81VxdUeejgu8",
	"remark":"ningbo"
	}';

	//echo httpPost($url,$data);

	//获取用户基本信息
	//GET https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN 
	
	$url = "https://api.weixin.qq.com/cgi-bin/user/info?access_token=Pm0sjRbb4KbYZi2fgyYtN8RkyPo1DrviMfv_0jOIyzfXF5E45Epdb57sV3rHAK9XCUkkcvosOEE9na5d05LwjsYd7IrD3tXX18ChuVfG-TI1LC_3BooCGz_duvHW6ZNIBBUeAIARRK&openid=o5_qOwOADVK1RTsi81VxdUeejgu8&lang=zh_CN ";

	echo httpGet($url);

	//http://ningbonuc.applinzi.com/NUC/wx.php
 ?>