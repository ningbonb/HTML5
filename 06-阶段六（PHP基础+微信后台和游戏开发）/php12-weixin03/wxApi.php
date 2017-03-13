<?php 
	//这个文件主动调用，主动调用微信api来实现微信的功能
	/**
	* 
	*/
	use sinacloud\sae\Storage as Storage;
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

		/*
		1.第一次获取access_token:(token,过期时间7200s)
		保存：token和过期的时间点
		过期时间：time()+过期时间-200(防止有延迟，过期时间早200s) == 有效期

		2.非第一次查询查询：说明文件已经存在，应该读取文件
		判断token是否过期
		如果没有过期，返回本地的token
		如果过期了，重新请求一个token，并且把新的token和过期时间保存的文件，覆盖之前的。
		 */ 

		//获取token::GET
		function getAccessToken(){
			$s = new Storage();
			//判断是否第一次请求token：查看bucket是否存在
			$bucket = @$s->getBucket("weixin");
			if ($bucket == FALSE) {
				# 说明storage没有存储过第一次请求
				//创建一个bucket用来保存下面请求来的token和过期时间
				//ACL_PUBLIC_READ：公有常量
				$s->putBucket("weixin",'.r:*');
				//请求新的token
				$access_token = $this->getNewAccessToken();
				return $access_token;
			}else{
				//说明之前存储过
				$response = $s->getObject("weixin","token.txt");
				//var_dump($response);
				//读取存储内容
				$saveJson = $response->body;
				//解析
				$json_obj = json_decode($saveJson);
				//获取过期时间
				$expires_time = $json_obj->expires_time;
				//当前时间对比
				$current_time = time();
				if ($current_time < $expires_time) {
					# 没过期
					$access_token = $json_obj->access_token;
					return $access_token;
				}else{//过期
					//创建新的token并覆盖保存旧的
					$access_token = $this->getNewAccessToken();
					return $access_token;
				}
			}
		}
		//网络请求新的toktn
		function getNewAccessToken(){
			$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$this->appID}&secret={$this->appsecret}";
			$json_str = $this->httpGet($url);
			//解析
			$json_obj = json_decode($json_str);
			//var_dump($json_obj);
			//拿到access_token
			$access_token = $json_obj->access_token;
			//拿到有效期
			$expires_in = $json_obj->expires_in;
			//设置过期时间
			$expires_time = time() + $expires_in - 200;

			$saveData = array('access_token' => $access_token, 'expires_time' => $expires_time);
			//变为json字符串
			$saveJsonStr = json_encode($saveData);

			$s = new Storage();
			//存储到bucket中
			$s->putObject($saveJsonStr, "weixin", "token.txt", array(), array('Content-Type' => 'text/plain'));

			//返回token
			return $access_token;
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
			       			},
			       			{
					            "type": "media_id", 
					            "name": "图片", 
					            "media_id": "VuRKUygdH2LMjchnSve5omfnae2O_zz0kdLnVB2uqYM"
					        }, 
					        {
					            "type": "view_limited", 
					            "name": "图文消息", 
					            "media_id": "VuRKUygdH2LMjchnSve5oqSIWzrnO0qeRvZhOGha2hs"
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

		//上传文件：临时文件:文件类型和文件路径名
		function uploadTempMedia($type,$fileName){
			$access_token = $this->getAccessToken();
			$url = "https://api.weixin.qq.com/cgi-bin/media/upload?access_token={$access_token}&type={$type}";
			//上传多媒体文件：postBody必须是数组类型
			//media:是一个完整的文件路径
			//curl -F media=@test.jpg
			$postBody = array('media'=> "@".realpath($fileName));

			return $this->httpPost($url,$postBody);
		}

		//新增永久素材(f非图文素材)
		function uploadForeverMedia($type,$fileName){
			$access_token = $this->getAccessToken();
			$url = "https://api.weixin.qq.com/cgi-bin/material/add_material?access_token={$access_token}&type={$type}";
			$postBody = array('media'=> "@".realpath($fileName));
			return $this->httpPost($url,$postBody);
		}

		//新增图文素材
		function uploadImageText($postBody){
			$access_token = $this->getAccessToken();
			$url = "https://api.weixin.qq.com/cgi-bin/material/add_news?access_token={$access_token}";
			return $this->httpPost($url,$postBody);
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
	//echo $wx->cMenu();

	//上传临时文件
	//hek8H8KLDEgkXV1aK0DxVhoXlszxeml56uEJn1pqIx6stMkWfIAZ2AboWHyfIS3K
	//$res = $wx->uploadTempMedia("image","img/test.jpg");
	//echo $res;
	//put_Pz3eRkFVfU8BxJ0gvaP92mJxstRWO2ABtS4GdgMpyy9FPVadYTlyuVNMiTl4
	//$res = $wx->uploadTempMedia("video","img/test.mp4");
	//echo $res;
	//JY68H_khQBme_9pK1T5v1ohewXiQ-BQIPgJMweQFNXbt2XQUIkIZglNURzS5d2wj
	//$res = $wx->uploadTempMedia("voice","img/test.mp3");
	//echo $res;
	
	//上传永久图片
	//$res = $wx->uploadForeverMedia("image","img/testt.jpg");
	//echo $res;
	//id:VuRKUygdH2LMjchnSve5omfnae2O_zz0kdLnVB2uqYM
	//url:http:\/\/mmbiz.qpic.cn\/mmbiz_jpg\/br4uFzbL6Xq8wQQx1xDGwzKwv96va6glQUQDOJ55zaAXdKp3g796NT99sXzCD1A3uyichnygkIEiaFGplRSABIibQ\/0?wx_fmt=jpeg
	
	//上传缩略图
	//$res = $wx->uploadForeverMedia("thumb","img/testt.jpg");
	//echo $res;
	//id:VuRKUygdH2LMjchnSve5oqcEJEvku0-a0LQsdCMtkZM
	//url:http:\/\/mmbiz.qpic.cn\/mmbiz_jpg\/br4uFzbL6Xq8wQQx1xDGwzKwv96va6glQUQDOJ55zaAXdKp3g796NT99sXzCD1A3uyichnygkIEiaFGplRSABIibQ\/0?wx_fmt=jpeg
	
	//新增图文素材
	/*
	$postBody = '{
	 	"articles": [{
	       	"title": "这是一个标题",
	       	"thumb_media_id": "VuRKUygdH2LMjchnSve5oqcEJEvku0-a0LQsdCMtkZM",
	       	"author": "毛毛",
	       	"digest": "摘要信息",
	       	"show_cover_pic": 1,
	       	"content": "这是一个内容部分",
	       	"content_source_url": "http://www.baidu.com"
	    },{
	       	"title": "这是第二个标题",
	       	"thumb_media_id": "VuRKUygdH2LMjchnSve5oqcEJEvku0-a0LQsdCMtkZM",
	       	"author": "毛毛2",
	       	"digest": "摘要信息2",
	       	"show_cover_pic": 1,
	       	"content": "这是一个内容部分2",
	       	"content_source_url": "http://www.baidu.com"
	    }
	    //若新增的是多图文素材，则此处应还有几段articles结构
	 	]
	}';
	*/
	//echo $wx->uploadImageText($postBody);
	//id:VuRKUygdH2LMjchnSve5ouheDIgvQfClT1Hsc6LZAQ8
	
	//2个图文：VuRKUygdH2LMjchnSve5oqSIWzrnO0qeRvZhOGha2hs
	
	$access_token = $wx->getAccessToken();
	echo $access_token;
	//wwMVzAUdfNVXDf211IeBGNVjE3lKACGWSRvtaqPlvGX5IKENa0NKT0z9Jg6SrwKpLufLvAqF_coGI9Jt8LYw4acSVQR9FutJFrPbVCXjdE9itB8ljBNGtrGkFx29YhuHGATeAIANHA
 ?>