<?php
	//不会在回调函数或者网页上显示
	//echo "00000000000000";
	//echo "alert(11111)";
	
	//想要实现跨域请求，访问别人的服务器，首先：别人的服务器得配合，得告诉你回调函数的参数名，就是百度的cb
	//GET
	if(!empty($_GET)){
		$wd = $_GET["wd"];
		$cb = $_GET["abc"];//callBack:函数名字符串
		
		$arr = array('s'=>["抽烟","喝酒","烫头"]);
		$json = json_encode($arr);
		
		//返回：调用html文件的一个叫callBack的函数，并把$json传出去
		echo $cb."($json)";//callBack($json)//callBack($json):被输出到script标签内
	}
?>