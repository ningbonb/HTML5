<?php 
	$numbers = array(1,2,3,4);
	/*
	in_array:数组中是否包含某一个值
	参数1：待查询的值
	参数2：数组
	参数3：可以省略，Boolean类型，默认false非严格模式，严格模式：值和类型都要相同
	 */ 
	$ifIn = in_array(4,$numbers,true);
	$ifIn = in_array("4",$numbers,true);
	echo "<hr>{$ifIn}<hr>";

	$numbers = [1,2,33,22,55,10];
	sort($numbers);
	print_r($numbers);

	$strs = ["baaa","dddd","ddsds","fff","aa"];
	echo "<hr>";
	sort($strs);
	print_r($strs);

	echo "<hr>";
	rsort($strs);
	print_r($strs);

	$fruits = array("i"=>"lemon","o"=>"orange","a"=>"apple");
	echo "<hr>";
	ksort($fruits);
	print_r($fruits);
	echo "<hr>";

	krsort($fruits);
	print_r($fruits);

	// 数组尾部添加
	array_push($numbers, 6,66,7,"100");
	echo "<hr>";
	print_r($numbers);

	// 数组尾部删除
	array_pop($numbers);
	array_pop($numbers);
	echo "<hr>";
	print_r($numbers);

	//数组头部删除
	array_unshift($numbers, 200,300);
	echo "<hr>";
	print_r($numbers);

	//数组头部添加
	array_shift($numbers);
	echo "<hr>";
	print_r($numbers);

	//截取
	$numbers = [1,2,3,4,5,6];
	$subNumber = array_slice($numbers, 1);//默认从第二个位置截取到最后
	//参数3：指定截取长度
	$subNumber = array_slice($numbers, 1,3);
	echo "<hr>";
	print_r($subNumber);

	//指定位置删除
	array_splice($numbers, 0,2);
	//删除并替换 参数4是添加的内容
	array_splice($numbers, 0,2,100);
	echo "<hr>";
	print_r($numbers);

	//释放给定变量
	unset($numbers[0]);//数组下标不会重排
	echo "<hr>";
	print_r($numbers);

	$a = 100;
	unset($a);//释放a变量,后面就不能使用了
	//echo($a);
	

	$color = ["red","blue"];
	//返回所有的key组成数组
	$keys = array_keys($color);
	echo "<hr>";
	print_r($keys);

	//获取所有的value值
	//array_value($colors);
	

	$str = "1,2,3";
	$arr = explode(",", $str);
	echo "<hr>";
	print_r($arr);

	$str2 = implode("|", $arr);
	echo "<hr>";
	print_r($str2);
 ?>