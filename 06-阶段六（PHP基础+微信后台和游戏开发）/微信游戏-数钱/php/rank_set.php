<?php 
	//http://ningbonuc.applinzi.com/countMoney2/php/rank_set.php
	require "SQL.php";
	//参数是score：返回这个成绩在当前数据库下的一个名次
	$score = $_GET["score"];
	$sql = "SELECT count(*) AS rank FROM wxuser WHERE score>{$score}";
	/*
	array(1) {
	  [0]=>
	  object(stdClass)#6 (1) {
	    ["rank"]=>
	    string(1) "0"
	  }
	}
	 */
	selectDate($sql,function($data){
		//var_dump($data);
		$rank = $data[0]->rank;
		//排名：大于自身个数+1
		$rank = (int)$rank + 1;
		$rankObj = array('rank' => $rank, 'code'=>0);
		echo json_encode($rankObj);
	},function(){
		//echo "查询失败";
		$rankObj = array('rank' => 0, 'code'=>0,'msg'=>'查询失败');
		echo json_encode($rankObj);
	});
 ?>