<?php 
	require "SQL.php";
	//var_dump($_GET);
	//给一个id
	$id = $_GET["id"];
	$name = $_GET["name"];
	$price = $_GET["price"];

	//判断之前有没有添加过
	$sql = "SELECT count AS count FROM shoppingCart WHERE id = {$id}";
	selectData($sql,function($data){//查询成功说明有记录，是添加的相同产品
		//获取该商品的个数
		$count = $data[0]->count;
		$count++;
		global $id;
		//第二次添加：更新count
		$updateSql = "UPDATE shoppingCart SET count = {$count} WHERE id = {$id}";
		upDateData($updateSql,function(){
			//查询所有的商品信息返回
			totalCount();
		});

	},function(){//查询失败说明没记录，也可能其他原因失败，存在漏洞暂时
		//echo "第一次添加";
		global $id,$name,$price;
		//count:默认1
		$insertSQL = "INSERT INTO shoppingCart (id,name,price,count) VALUES ({$id},'{$name}',{$price},1)";
		insertData($insertSQL,function(){
			totalCount();
		});

	});

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
       		global $id;
			$info = array('msg' => '插入成功','code'=>'OK','id'=> $id,'total'=>$total,'totalPrice'=>$totalPrice);
			echo json_encode($info);
        });        
    };
 ?>