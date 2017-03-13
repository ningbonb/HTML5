<?php 
	//1.索引数组
	$days = array("星期一","星期二");
	print_r($days);
	//类型查看
	echo gettype($days);

	//长度
	$length = count($days);
	echo("<hr>".$length."<hr>");
	//数组遍历
	for ($i=0; $i < count($days); $i++) { 
		echo($days[$i]."<hr>");
	}
	$days[0] = "星期一";
	$days[] = "星期三";//默认从最后添加
	$days[] = "星期四";

	print_r($days);


	//数组遍历2
	foreach ($days as $key => $value) {
		echo "<hr>{$key}={$value}<hr>";
	}
	//数组遍历3
	foreach ($days as $key => $value) {
		echo "<hr>{$value}<hr>";
	}

	//创建2
	$days = ["星期天"];
	print_r($days);

	//关联数组
	$fruits = array('fr1' => '西瓜','fr2' => '桃子');
	echo "<hr>";
	print_r($fruits);
	echo "<hr>";
	echo $fruits["fr2"];

	foreach ($fruits as $key => $value) {
		echo "<hr>{$key}={$value}<hr>";
	}

	foreach ($fruits as $key => $value) {
		echo "<hr>{$value}<hr>";
	}


	//创建数组3
	/*
	range(1,2,3)
	1:开始
	2:结束
	3:间隔：默认1
	 */
	//$ages = range(10,20);
	//$ages = range(10,20,5);
	$ages = range("a","g",2);
	print_r($ages);
 ?>