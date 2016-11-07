
function ajax(urls,success,fail) {
		var request = null;
		if(window.XMLHttpRequest) {
			request = new XMLHttpRequest();
		} else {
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}

		//2.设置请求方式，和URL
		var time = new Date().getTime();
		request.open("GET", urls+"?time="+time, true);
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