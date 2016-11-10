<?php 
	require "SQL.php";
	//计算购物车总数
    function totalCount() {
        $sql = "SELECT * FROM shoppingCart";
        selectData($sql,function($data){
        	$total = 0;
        	$totalPrice = 0;
        	for ($i = 0; $i < count($data); $i++){
            	$total+=$data[$i]->count;
            	//总价
            	$totalPrice += $data[$i]->price * $data[$i]->count;
       		}
			$info = array('msg' => '查询成功','code'=>'OK','total'=>$total,'totalPrice'=>$totalPrice);
			echo json_encode($info);
        },function(){
        	//购物车空
        	$info = array('msg' => '查询成功','code'=>'OK','total'=>0,'totalPrice'=>0);
			echo json_encode($info);

        });        
    };
    totalCount();

 ?>