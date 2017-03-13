<?php 
	/*
	1.全局变量
	2.局部变量
	3.静态变量
	 */
	$a = 100;
	$b = 200;//全局 //在函数内部无法直接访问活着使用全局变量
	function test(){
		//函数内部使用全局变量
		global $a;//标明$a是一个全局变量
		$a = 500;
		echo "$a";
		$d = 10000;
	}
	test();
	echo "<hr>{$a}<hr>";
	echo "<hr>";
	$c = "123";
	print_r($GLOBALS);
	//$GLOBALS:数组（系统定义的超全局变量，自己定义的全局变量）都会保存到该数组
	
	$e = 1000;
	function test2(){
		//访问全局变量方式2
		//echo($GLOBALS["e"]);
		//$GLOBALS["e"] = 2000;

		//$e2重新保存了一份全局的变量$e，两个变量修改，之间没有影响
		$e2 = $GLOBALS["e"];
		$e2 = 2000;
		echo "内部的访问{$e2}";
	}
	echo "<hr>";
	test2();
	echo "<hr>{$e}<hr>";

	//静态变量
	function staticFn(){
		static $f = 100;
		/*
		static:声明一个静态变量，该变量被存储到了静态区
		静态区特点：1.该变量赋值代码只被执行一次
		2.声明周期是整个程序运行期间

		如果是局部变量，保存在栈区，特点：出了函数的作用域，栈区变量被销毁释放		
		 */ 
		echo ++$f."<hr>";
	}
	staticFn();
	staticFn();
	staticFn();
	staticFn();
	staticFn();
	staticFn();
 ?>