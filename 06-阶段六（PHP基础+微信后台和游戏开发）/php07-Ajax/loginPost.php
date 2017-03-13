<?php
	//echo "请求成功";
	
	if(!empty($_POST)){
		//print_r($_POST);
		$user = $_POST["userName"];
		$pass = $_POST["passWord"];
		
		//查询数据库
		if($user == "ning" && $pass == "123"){
			echo "登陆成功";
		}else{
			echo "登录失败";
		}
		
	}
	
?>