<?php 
	require "SQL.php";
	//0:全部 1篮球  2：乒乓球 3:羽毛球 4:足球
	$categary = $_GET["categary"];
	if ($categary == "全部") {
		# code...
		$sql = "SELECT * FROM product";

	}else{
		$sql = "SELECT * FROM product WHERE categary = '{$categary}'";

	}
	selectData($sql,function($data){
		$array = array('code' => 0,'msg'=>"ok",'data'=>$data );
		echo(json_encode($data));
	},function(){
		$echoArr = array('code' =>"100",'data'=>"{}",'msg'=>"失败");
		echo json_encode($echoArr);
	});


 ?>