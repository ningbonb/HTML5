<?php
	require "SQL.php";
	
	$sql = "SELECT * FROM user3";
	
	selectDate($sql,function($row){
		$newObj = array("msg"=>"查询成功","code"=>"200","data"=>$row);
		
		echo json_encode($newObj);
	},function(){
		echo '{"msg":"查询失败","code":"0"}';
	});
	
	
?>