<?php
	//注释
	/*
	 多行注释
	 echo:输出语句。输出字符串类型
	 每条语句结束必须加上；
	 * */
	echo "hello world";
	echo "输出2";
	
?>
<script language="php">
	echo "输出语句3";
</script>

<?php
	//变量的声明
	//用$开头，字母数字或者下划线组成，数字不能开头
	$name = "小鹏";
	$age = 30;
	$score = 30;
	//可以输出解析标签
	echo "<hr>";
	echo "<a href='###'>链接</a>";
	echo $name;
	echo $age;
	echo $score;
	//输出多个变量:用，间隔
	echo "<hr>";
	echo $age,$name,$age;
	//布尔类型默认false为0，网页无法被echo解析
	$isMan = false;
	echo $isMan;
	//输出详细信息:var_dump
	var_dump($isMan);

	//字符串可以用.拼接
	echo "<hr>"."11"."哈哈"."<hr>";

	//输出一个变量
	//print($name,$age);//报错
	//格式化输出
	/*
	%s:字符串，%f:读点类型小数，(默认六位小数保留，%.2f:代表保留小数2位，舍去的时候满6近位)
	%d:代表整数，%030d:代表该整数30位，不足补0，默认补空格
	 */
	printf("他的名字叫做%s<hr>",$name);
	printf("他的年龄是%030d<hr>",$age);
	$score = 29.99;
	printf("%s的这个学期的实习成绩是%.2f<hr>",$name,$score);

	//print_r:用来打印数组
	$array = array(1,2,3);
	print_r($array);
	//echo $array;
	echo "<hr>";
	//var_dump:查看相信信息，打印任意类型，多用来调试
	//print_r:专门打印数组
	//echo:最常用
	var_dump($array);
	var_dump($name);

	//变量赋值
	$a = 10;
	$b = $a;
	$a = 20;
	echo "<hr>".$a."<hr>".$b."<hr>";

	//引用赋值
	$a = 10;
	$b = &$a;//a和b都指向了同一个内存地址
	$a = 20;
	echo "<hr>".$a."<hr>".$b."<hr>";

	//变量的变量
	$s = "hello";
	$$s = "world";
	echo $s."<hr>";
	echo $$s."<hr>";

	echo $hello."<hr>";
?>