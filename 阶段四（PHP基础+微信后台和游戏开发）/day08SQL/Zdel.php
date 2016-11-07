<?php
require "SQL.php";
	if(!empty($_GET)){
		
		$id = $_GET["id"];
		$sql = "DELETE FROM user3 WHERE id = '{$id}'";
		deleteData($sql,function(){
			echo '{"code":"200","msg":"删除成功"}';
		},function(){
			echo '{"code":"0","msg":"删除失败"}';
		});
	}
?>