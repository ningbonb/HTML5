
function toUrl(urls,data){
	//给对象添加时间戳属性
	data.time = new Date().getTime();
	
	var arr = [];
	//遍历参数对象
	for(var k in data){
		var str = k+"="+data[k];
		//保存每一个key=value
		arr.push(str);
	}
	//数组转字符串
	var paraStr = arr.join("&");
	//完整url
	urls = urls + "?" + paraStr;
	
	return urls;
}

/*
 ajax({
			//外层属性名Ajax内部需要使用
			//urls:"loginPOST.php",
			urls:"loginGET.php",
			type:"GET",
			data:{
				//userName?password:服务器需要使用
				userName:user.val(),
				passWord:pass.val()
			},
			success:function(responseTest){
				alert(responseTest);
			},
			fail:function(status){
				alert(status);
			}
		});
 * */

function ajax(obj) {
		var request = null;
		if(window.XMLHttpRequest) {
			request = new XMLHttpRequest();
		} else {
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}

		//2.处理url函数
		//判断用户是否传了参数
		var data = obj.data || {};
		
		urls = toUrl(obj.urls,data);
		
		//把url的文件路径和参数分割
		var urlArr = urls.split("?");
		
		//判断请求方式
		var type = obj.type || "GET";
		if(type == "GET"){
			request.open("GET",urls,true);
			request.send();
		}else if(type == "POST"){
			//设置请求头
			request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			request.open("POST", urls, true);
			//test.txt?time=122122212 :解决浏览器缓存问题
			//3.发送:get方式参数不传
			request.send(urlArr[1]);
		}
		

		//4.等待
		request.onreadystatechange = function() {
			if(request.readyState == 4) { //发送成功
				if(request.status >= 200 && request.status <= 206 || request.status == 304) {
					//成功：回调传出请求的数据
					if(obj.success) obj.success(request.responseText);
				}else{
					//失败：回调传出服务器错误码
					if(obj.fail) obj.fail(request.status);
				}
			}
		};
	}