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
		//1.链接数据库:最后一个参数是数据库端口号
		$mySqli = new mySqli(SAE_MYSQL_HOST_M,SAE_MYSQL_USER,SAE_MYSQL_PASS,SAE_MYSQL_DB,SAE_MYSQL_PORT);
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

	//查询
	function selectDate($sql,$success=0,$fail=0){
		$mySqli = initmySqli();
		//执行sql:查询语句如果成功，不返回布尔类型值，是返回一个结果集对象：mysqli_result，如果查询失败，返回false
		$rel = $mySqli->query($sql);

		//var_dump($rel);
		//查询成功，并且查询的结果大于0
		//num_rows:查询到的条目数
		if($rel && $rel->num_rows){
			//5.6以上报错
			//$row = $rel->fetch_all(MYSQLI_ASSOC);
			// print_r($row);
			// json_encode:把数组或者对象转为json字符串
			//$jsonStr = json_encode($row);
			//echo $jsonStr;
			//$rel->fetch_object();
			$arr = array();
			while($row = $rel->fetch_object()){
				array_push($arr, $row);
			}
			if($success) $success($arr);
		}else{
			if($fail) $fail();
		}

		//4.断开数据库
		$mySqli->close();
	}
 ?>