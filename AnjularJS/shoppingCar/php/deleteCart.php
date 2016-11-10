<?php 
	require "SQL.php";
	//参数是商品的id
	$id = $_GET["id"];
	$sql = "DELETE FROM shoppingCart WHERE id ={$id}";
	deleteData($sql,function(){
		$info = array('code' => 200, 'msg'=>'删除成功');
		echo json_encode($info);
	});
 ?>