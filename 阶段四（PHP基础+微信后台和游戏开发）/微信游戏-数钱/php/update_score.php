<?php 
	//http://ningbonuc.applinzi.com/countMoney2/php/update_score.php
	require "SQL.php";
	//两个参数，一个是用户id，另一个是当前玩的分数：数据库更新最高分，并且把最高分返回给你
	$openid = $_GET["openid"];
	$score = $_GET["score"];

	//echo $openid."<hr>";
	//echo $score."<hr>";

	//查出数据库玩家旧的分数
	$sqlOld = "SELECT score FROM wxuser WHERE openid='{$openid}'";
	selectDate($sqlOld,function($data){
		global $score,$openid;//使用全局变量
		//var_dump($data);//数组->对象
		$oldScore = $data[0]->score;
		//判断旧分数和新分数
		if($score > $oldScore){
			//echo "可以更新数据库了".$score;
			$sqlUp = "UPDATE wxuser	SET score={$score} WHERE openid='{$openid}'";
			//echo $sqlUp;//调试数据库操作失败，网页执行该语句测试
			upDateDate($sqlUp,function(){
				//echo "更新成功";
				global $score,$openid;//使用全局变量
				$bestObj = array('bestScore' => $score,'code'=>0);
				echo json_encode($bestObj);
			},function(){
				//echo "更新失败";
				//global $oldScore,$openid;//使用全局变量
				$bestObj = array('bestScore' => $oldScore,'code'=>10,'msg'=>'不好意思，更新失败，白玩了');
				echo json_encode($bestObj);
			});
		}else{
			//echo "这次玩的分数不够,历史最高：".$oldScore;
			$bestObj = array('bestScore' => $oldScore,'code'=>0);
			echo json_encode($bestObj);
		}
	},function(){
		$log = array('msg' => '没有该用户信息','code'=>20);
		echo json_encode($log);
	});
 ?>