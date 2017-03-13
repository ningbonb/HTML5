<?php 
	require "SQL.php";
	$sql = "SELECT * FROM shoppingCart";

	selectData($sql,function($data){
		echo json_encode($data);
	});
 ?>