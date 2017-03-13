<?php
	require "SQL.php";
	//print_r($_GET);
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
		
		//開始查詢數據庫是否存在
		$sql = "SELECT * FROM user3 WHERE user = '{$user}' AND pass = '{$pass}'";
		selectDate($sql,function($json_s){
			//這個方法被迴調，説明可以查詢到結果，賬號存在
			//轉換對象（數組）
			$objs = json_decode($json_s);
			//獲取到對象
			$obj = $objs[0];
			//取出id
			$id = $obj->id;
			//取出用戶名
			$user = $obj->user;
			//寫一個json格式字符串
			$formartArr = array('msg'=>"登錄成功，歡迎{$user}你回來","code"=>"200","id"=>$id);
			//轉爲json字符串給前端
			echo json_encode($formartArr);
			
		},function(){
			//説明賬號不存在
			echo '{"msg":"登錄失敗，用戶名密碼錯誤，或者你沒有注冊","code":"0"}';
		});
	}
?>