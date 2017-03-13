<?php 
	//基本类型
	//字符串类型
	$str = "hello";
	$str = 'world';
	//定界符定义字符串
	$str3 = "中北大学
	马上就要放假了
	哈哈哈
	";
	echo $str3."<hr>";
	$str4 = <<<abc
	中北大学
	放假了
	哈哈哈
abc;
	echo $str4."<hr>";

	$str5 = <<<htmlStr
	<div>
		<p>
			<a href="###">链接</a>
		</p>
	</div>
htmlStr;
	echo($str5."<hr>");

	//双引号字符串内部可以添加变量，单引号不可以
	echo "输出$str<hr>";
	echo '输出$str<hr>';
	echo '输出'.$str.'<hr>';
	//在双引号字符串中，如果遇到$，会尽可能获取后面的字符串作为变量的名字，一般需要用{}表示变量范围
	echo ("输出{$str}你好world<hr>");
	//单引号无法使用{}，只能用.作为字符串链接
	echo '输出{$str}你好world<hr>';

	echo '十一"快乐"<hr>';
	echo "十一\"快乐\"<hr>";

	echo "斜杠\\<hr>";
	echo "\$<hr>";
	echo "11<br>22";
	echo "11\n22<hr>";

	$bo = false;
	echo $bo."<hr>";
	var_dump($bo);
	echo "<hr>";

	//显示类型转换
	$str = "123";
	//$num = (int)$str;
	//$num = (bool)$str;
	//$num = (object)$str;
	$num = (array)$str;
	//$num = (integer)$str;
	//$num = (null)$str;

	var_dump($num);
	echo "<hr>";

	//类型相关方法
	$str = true;
	echo(gettype($str)."<hr>");

	var_dump(is_bool($str));
	var_dump(is_string($str));
	var_dump(is_int($str));
	var_dump(is_array($str));
	var_dump(is_object($str));
	echo "<hr>";


	//超全局变量
	//_SERVER：数组形式保存
	print_r($_SERVER);

	echo "<hr>";
	echo($_SERVER["SERVER_PORT"]);
	echo($_SERVER["CONTEXT_DOCUMENT_ROOT"]);
	echo($_SERVER["REQUEST_METHOD"]);

	echo "<hr>";
	// $_GET
	print_r($_GET);
 ?>