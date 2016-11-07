<?php 
	/*
	1.链接数据库
	2.执行sql语句
	3.使用结果
	4.断开数据库

	mySqli:面向对象
	mySqli参数
	参数1：主机地址，默认端口3306，不填
	参数2：访问的用户名
	参数3：密码
	参数4：数据库的名字
	其他默认
	 */
	
	function initmySqli(){
		//1.链接数据库
		$mySqli = new mySqli("localhost","root","","20161011");
		//判断数据库是否链接成功
		//connect_error:获取最后一次错误信息
		if($mySqli->connect_error){
			die("链接失败，失败信息：{$mySqli->connect_error}");
		}else{
			//echo "链接成功";
		}

		//设置编码格式
		//$mySqli->set_charset('utf8');
		//设置编码格式2
		$mySqli->query("set charset utf8");
		return $mySqli;
	}	



	//增
	function insertData($sql,$success=0,$fail=0){
		$mySqli = initmySqli();

		//返回一个bool类型
		$rel = $mySqli->query($sql);
		if($rel){
			//echo "添加成功";
			if($success) $success();
		}else{
			//echo "添加失败";
			if($fail) $fail();
		}
		//4.断开数据库
		$mySqli->close();
	}

	$name = "老王".rand(1,100);
		//执行sql语句
	$sql = "INSERT INTO user(name,age,sex,tel) VALUES('{$name}',12,'男','18435188888')";
	/*
	insertData($sql,function(){
		echo "添加成功";
	},function(){
		echo "添加失败";
	});*/



	//更新
	function upDateDate($sql,$success=0,$fail=0){
		
		$mySqli = initmySqli();

		//执行
		$rel = $mySqli->query($sql);
		if($rel){
			//echo "添加成功";
			if($success) $success();
		}else{
			//echo "添加失败";
			if($fail) $fail();
		}
		//4.断开数据库
		$mySqli->close();
	}

	$sql = "UPDATE user SET name = '小鹏' WHERE id=8";
	// upDateDate($sql,function(){
	// 	echo "更新成功";
	// },function(){
	// 	echo "更新失败";
	// });


	//删除数据
	function deleteDate($sql,$success=0,$fail=0){
		$mySqli = initmySqli();
		//执行
		$rel = $mySqli->query($sql);
		if($rel){
			//echo "添加成功";
			if($success) $success();
		}else{
			//echo "添加失败";
			if($fail) $fail();
		}
		//4.断开数据库
		$mySqli->close();
	}

	$sql = "DELETE FROM user WHERE id=8";
	// deleteDate($sql,function(){
	// 	echo "删除成功";
	// },function(){
	// 	echo "删除失败";
	// });


	//查询
	function selectDate($sql,$success=0,$fail=0){
		$mySqli = initmySqli();
		//执行sql:查询语句如果成功，不返回布尔类型值，是返回一个结果集对象：mysqli_result，如果查询失败，返回false
		$rel = $mySqli->query($sql);

		//var_dump($rel);
		//查询成功，并且查询的结果大于0
		//num_rows:查询到的条目数
		if($rel && $rel->num_rows){
			#fetch_row:取出数组，每次只能取出一个用户信息，每次查询指针自动累加，最终指向一个空
			// $row = $rel->fetch_row();
			// print_r($row);
			// echo "<hr>";
			// $row = $rel->fetch_row();
			// print_r($row);
			
			// 方法一
			// while($row = $rel->fetch_row()){
			// 	echo "<hr>";
			// 	print_r($row);
			// }
			
			// 方法二:通过关联数组返回
			//$row = $rel->fetch_assoc();
			//print_r($row);
			
			// $array = [];
			// while($row = $rel->fetch_assoc()){
			// 	array_push($array, $row);
			// }
			// print_r($array);
			
			//方式三:MYSQLI_ASSOC：关联数组，默认是索引数组
			$row = $rel->fetch_all(MYSQLI_ASSOC);
			// print_r($row);
			// json_encode:把数组或者对象转为json字符串
			$jsonStr = json_encode($row);
			//echo $jsonStr;
			if($success) $success($jsonStr);
		}else{
			if($fail) $fail();
		}

		//4.断开数据库
		$mySqli->close();
	}
	$sql = "SELECT * FROM user";
	selectDate($sql,function($jsonStr){
		//echo "查询结果:{$jsonStr}";
		//把json字符串转为对象或者数组
		$obj = json_decode($jsonStr);
		var_dump($obj);
	},function(){
		echo "查询失败";
	});
 ?>