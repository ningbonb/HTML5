<?php 
	//常量：不能修改
	//变量：可以访问并且可以修改
	define('PI', 3.1415926);
	echo PI."<hr>";
	// PI = 3000;//报语法错误
	//define("PI",3.14);//不能重复定义
	var_dump(PI);
	//判断常量是否被定义
	if (defined("G")) {
		# code...
		echo "定义过了常量";
	}else{
		echo "没有定义常量";
		define('G', 9.8,true);//参数3控制大小写不敏感
	}
	echo G;
	echo g;

	//魔术常量
	echo "<hr>".__LINE__."<hr>";
	echo "<hr>".__LINE__."<hr>";
	//当前文件所在路径
	echo __FILE__."<hr>";
	//函数的名称
	function fn(){
		echo __FUNCTION__."<hr>";
	}
	fn();
?>
