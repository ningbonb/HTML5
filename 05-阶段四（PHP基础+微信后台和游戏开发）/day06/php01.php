<?php 
	/*
	1.链接数据库
	2.执行sql语句
	3.使用结果
	4.断开数据库

	MySQLi:面向对象
	mysqli参数
	参数1：主机地址，默认端口3306，不填
	参数2：访问的用户名
	参数3：密码
	参数4：数据库的名字
	其他默认
	 */
	
	

	function insertData($sql,$success=0,$fail=0){
			//1.链接数据库
		$MySqli = new mysqli("localhost","root","","20161011");
		//判断数据库是否链接成功
		//connect_error:获取最后一次错误信息
		if($MySqli->connect_error){
			die("链接失败，失败信息：{$MySqli->connect_error}");
		}else{
			//echo "链接成功";
		}

		//设置编码格式
		//$MySqli->set_charset('utf8');
		//设置编码格式2
		$MySqli->query("set charset utf8");

		//返回一个bool类型
		$rel = $MySqli->query($sql);
		if($rel){
			//echo "添加成功";
			if($success) $success();
		}else{
			//echo "添加失败";
			if($fail) $fail();
		}

		//4.断开数据库
		$MySqli->close();
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
		$mySqli = new mySqli("localhost","root","","20161011");
		//判断
		if($mySqli->connect_error){
			die("链接失败，失败信息：{$MySqli->connect_error}");
		}else{
			//echo "打开成功";
		}
		//设置编码
		$mySqli->set_charset("utf8");
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
		$MySqli->close();
	}
	$sql = "UPDATE user SET name = '小鹏' WHERE id=15";
	upDateDate($sql,function(){
		echo "更新成功";
	},function(){
		echo "更新失败";
	});

 ?>