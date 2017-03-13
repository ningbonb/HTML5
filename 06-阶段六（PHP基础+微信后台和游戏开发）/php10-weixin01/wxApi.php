<?php 
	//这个文件主动调用，主动调用微信api来实现微信的功能
	/**
	* 
	*/
	class WeiXin
	{
		public $appID = "wxb56f1725c4f779a9";
		public $appsecret = "4a117fe4a98122c519623c5300bc1e21";

		//get请求
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

		//post请求
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

		//获取token::GET
		function getAccessToken(){
			$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$this->appID}&secret={$this->appsecret}";
			$json_str = $this->httpGet($url);
			//解析
			$json_obj = json_decode($json_str);
			//返回token
			return $json_obj->access_token;
		}

		//删除自定义菜单
		function deleteMenu(){
			$access_token = $this->getAccessToken();
			$url = "https://api.weixin.qq.com/cgi-bin/menu/delete?access_token={$access_token}";
			return $this->httpGet($url);
		}

		//自定义菜单POST
		function ceateMenu(){
			$access_token = $this->getAccessToken();
			$url = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token={$access_token}";
			//post请求参数
			$postBody = '{
			     "button":[
			     {	
			          "name":"点击事件",
			          "sub_button":[
						{
							"name":"发送文字",
							"type":"click",
							"key":"sendText"
						},
						{
							"name":"发送图片",
							"type":"click",
							"key":"sendImage"
						},
						{
							"name":"发送语音",
							"type":"click",
							"key":"sendVoice"
						},{
							"name":"发送视频",
							"type":"click",
							"key":"sendVideo"
						}]
			      },
			      {
			           "name":"相册扫码",
			           "sub_button":[
			           {	
			               "type":"pic_sysphoto",
			               "name":"相机",
			               "key":"camera",
			               "sub_button":[]
			            },
			            {	
			               "type":"pic_photo_or_album",
			               "name":"相机或者相册",
			               "key":"phoneOralbum",
			               "sub_button":[]
			            },
			            {	
			               "type":"pic_weixin",
			               "name":"相册",
			               "key":"album",
			               "sub_button":[]
			            },
			            {
							"type": "scancode_waitmsg", 
			                "name": "扫码带提示", 
			                "key": "scancodeText", 
			                "sub_button": []
			            },
			            {
							"type": "scancode_push", 
		                    "name": "扫码推事件", 
		                    "key": "scancodepush", 
		                    "sub_button": []
			            }]
			       },{
			       		"name":"其他",
			       		"sub_button":[
			       			{
			       				"name":"个人博客",
			       				"type":"view",
			       				"url":"http://www.ningbo00.top"
			       			},
			       			{
			       				"name": "发送位置", 
					            "type": "location_select", 
					            "key": "sendLocation"
			       			}]
			       }]
			}';

			return $this->httpPost($url,$postBody);
		}

		//自定义菜单查询
		function cMenu(){
			$access_token = $this->getAccessToken();
			$url = "https://api.weixin.qq.com/cgi-bin/menu/get?access_token={$access_token}";
			return $this->httpGet($url);
		}

	}//微信类结束

	$wx = new WeiXin();
	//$access_token = $wx->getAccessToken();
	//echo $access_token;
	
	//删除菜单
	//echo($wx->deleteMenu());
	
	//创建自定义菜单
	//echo $wx->ceateMenu();
	
	//自定义菜单查看
	echo $wx->cMenu();
 ?>