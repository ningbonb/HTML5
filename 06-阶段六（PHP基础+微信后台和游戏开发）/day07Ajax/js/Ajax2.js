
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

function ajax(urls,data,success,fail) {
		var request = null;
		if(window.XMLHttpRequest) {
			request = new XMLHttpRequest();
		} else {
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}

		//2.处理url函数
		urls = toUrl(urls,data);
		request.open("GET", urls, true);
		//test.txt?time=122122212 :解决浏览器缓存问题
		//3.发送:get方式参数不传
		request.send();

		//4.等待
		request.onreadystatechange = function() {
			if(request.readyState == 4) { //发送成功
				if(request.status >= 200 && request.status <= 206 || request.status == 304) {
					//成功：回调传出请求的数据
					if(success) success(request.responseText);
				}else{
					//失败：回调传出服务器错误码
					if(fail) fail(request.status);
				}
			}
		};
	}