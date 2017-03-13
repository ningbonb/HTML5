<?php
	require "SQL.php";
	
	if(!empty($_GET)){
		$user = $_GET["user"];
		$pass = $_GET["pass"];
		
		//判斷是否爲空
		if(empty($user)){
			$json_s = '{"msg":"請輸入用戶名","code":"0"}';
			exit($json_s);
		}
		if(empty($pass)){
			$json_s = '{"msg":"請輸入密碼","code":"0"}';
			exit($json_s);
		}
		//查詢數據庫:判斷該賬號是否被注冊過
		$select_sql = "SELECT * FROM user3 WHERE user='{$user}'";
		selectDate($select_sql,function($json_s){
			//衹要迴調説明用戶存在
			$json_s = '{"msg":"用戶存在了","code":"0"}';
			exit($json_s);
		},function(){
			//聲明全局變量
			global $user,$pass;
			//可以注冊新的用戶了
			$insert_sql = "INSERT INTO user3(user,pass) VALUES('{$user}','{$pass}')";		
		});  
		insertData($insert_sql,function($id){
			//聲明全局變量
			global $user,$pass;
			
			$info = array("id"=>$id,"user"=>$user,"pass"=>$pass);
			
			$arr = array("msg"=>"注冊成功","code"=>"200","info"=>$info);
			echo json_encode($arr);
			//echo '{"msg":"注冊成功","code":"200"}';
		},function(){
			echo '{"msg":"注冊失敗，系統錯誤","code":"0"}';
		});
		
	}
?>