<!-- php正则 -->
<?php 
	$str = "php is the best language";
	// preg_match:参数1：正则表达式：注意：表达式是字符串
	// 参数2：需要匹配的字符串
	// 参数3：保存查询的结果
	
	//返回值：匹配的次数（0；没有匹配到）
	// \b: 单词边界
	$count = preg_match('/\bbest\b/', $str,$arr);
	echo "{$count}";
	print_r($arr);
	if($count){
		echo "匹配成功";
	}else{
		echo "匹配失败";
	}

	$str = "shenying_qiang@lanou3g.com";
	$reg = '/(^[A-Za-z0-9]+\w+)(@)(\w+)(\.)(com|cn)/';
	$count = preg_match($reg, $str ,$arr);
	echo "<hr>{$count}<hr>";
	if($count){
		echo "合法的邮箱地址";
		echo "<hr>";
		// 数组：第一个元素：匹配到的所有结果，之后是对应的每一个分组的结果
		print_r($arr);
		echo "<hr>";
	}else{
		echo "请重新填写";
	}

	//全局匹配
	$str = "php is the best language best";
	preg_match_all('/\bbest\b/', $str, $arr);
	echo "<hr>$count<hr>";
	print_r($arr);

	//替换:默认全局匹配
	$str = "php is the best language best";
	$reg = '/\s/';
	$newS = preg_replace($reg, '-', $str,-1,$count);
	echo "$newS<hr>";
	echo "$count";

	//preg_replace == preg_filter
	$newS = preg_filter($reg, '-', $str,-1,$count);
	echo "<hr>$newS<hr>";
	echo "$count";

	//
	$str = "php is the best language best";
	$reg = '/\s/';
	$arr = preg_split($reg, $str);
	echo "<hr>";
	print_r($arr);

	echo "<hr>";
	$arr2 = explode(" ", $str);
	print_r($arr2);

	$str2 = implode($arr2);
	echo "$str2";

	//数组筛选
	echo "<hr>";
	$arr = array("a a","bb","ccc","dd,d");
	$reg = '/\s|,/';
	$newArr = preg_grep($reg, $arr);
	print_r($newArr);
 ?>