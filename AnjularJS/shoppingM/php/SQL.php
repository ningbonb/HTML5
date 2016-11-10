<?php 
	/*
	1.链接数据库
	2.执行sql语句
	3.使用结果
	4.断开数据库


	mySQLi:面向对象

	mySqli:参数
	参数1：主机地址，默认端口3306,不填
	参数2:访问的用户名
	参数3:密码
	参数4：数据库名
	其他默认

	*/
	
	function initMySqli(){
		//1.链接数据库
		$mySqli = new mySqli("localhost","root","","20161011");
		//判断数据库是否链接成功
		//connect_error:获取最后一次错误信息
		if ($mySqli->connect_error) {
			# code...
			die("链接失败,失败信息:{$mySqli->connect_error}");
		}else{
			//echo "链接成功";
		}
		//设置编码格式
		//$mySqli->set_charset('utf8');
		//2.设置编码格式
		$mySqli->query("set charset utf8");

		return $mySqli;

	}
	function insertData($sql,$success=0,$fail=0){

		$mySqli = initMySqli();
		//返回一个bool类型
		$rel = $mySqli->query($sql);
		if ($rel) {
			//echo("添加成功");
			if ($success) $success($mySqli->insert_id);
		}else{
			//echo "添加失败";
			if ($fail) $fail();

		}
		//4.断开数据库
		$mySqli->close();
	}	

	//更新
	function upDateData($sql,$success=0,$fail=0){

		$mySqli = initMySqli();
		//执行sql
		$rel = $mySqli->query($sql);
		if ($rel) {
			# code...
			//echo "更新成功";
			if ($success) $success();

		}else{
			//echo "更新失败";
			if ($fail) $fail();
		}
		//4.断开数据库
		$mySqli->close();
	}


	//删除数据
	function deleteData($sql,$success=0,$fail=0){
		$mySqli = initMySqli();
		//执行sql
		$rel = $mySqli->query($sql);
		if ($rel) {
			# code...
			//echo "更新成功";
			if ($success) $success();

		}else{
			//echo "更新失败";
			if ($fail) $fail();
		}
		//4.断开数据库
		$mySqli->close();
	}
	
	//查询
	function selectData($sql,$success=0,$fail=0){
		$mySqli = initMySqli();
		$rel = $mySqli->query($sql);
		
		//var_dump($rel);
		//exit("停止");
		
		if ($rel && $rel->num_rows) {
			$arr = array();
			while ($row = $rel->fetch_object()) {
				array_push($arr, $row);
			}
			if ($success) $success($arr);
		}else{
			if ($fail) $fail();
		}
		//4.断开数据库
		$mySqli->close();
	}
	





 ?>