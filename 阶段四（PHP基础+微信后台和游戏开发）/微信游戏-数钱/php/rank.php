<?php 
	//http://ningbonuc.applinzi.com/countMoney2/php/rank.php
	// 等级查询php
	require "SQL.php";
	//对数据库进行查询, 按照分数降序排序, 取5条
	$sql = "SELECT * FROM wxuser ORDER BY score DESC limit 5";
	//查询
	selectDate($sql,function($data){
		//echo "查询成功";
		//var_dump($data);
		//$json_arr = json_encode($data);
		$data_arr = array('code'=>0,'data'=>$data);
		echo(json_encode($data_arr));
	},function(){
		$data_arr = array('code'=>40,'data'=>'{}');
		echo(json_encode($data_arr));
	});




 ?>