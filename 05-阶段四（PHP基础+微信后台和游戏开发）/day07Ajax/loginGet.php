<?php
	//echo "请求成功";
	
	if(!empty($_GET)){
		//print_r($_GET);
		$user = $_GET["userName"];
		$pass = $_GET["passWord"];
		
		//查询数据库
		if($user == "ning" && $pass == "123"){
			echo "登陆成功";
		}else{
			echo "登录失败";
		}
		
	}
	
?>