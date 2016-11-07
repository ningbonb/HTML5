<?php 
	/*
	自定义函数
	 */
	function sayHello(){
		echo "hello";
	}
	SAYHELLO();//函数名不区分大小写
	//不支持函数的重载，不允许同一个文件中定义同名函数
	// function sayHello($str){
	// 	echo $str;
	// } 
	
	function goShopping($money){
		echo "<hr>拿着{$money}块钱去买东西<hr>";
	}
	goShopping(100);

	function getMoney(){
		return 100;
		echo '-------------------';
	}
	goShopping(getMoney());

	//默认参数
	function maxValue($num1=10,$num2=20){
		return $num1 > $num2 ? $num1 : $num2;
	}
	echo "<hr>最大数为：".maxValue()."<hr>";//不传参数使用形参默认值
	echo "<hr>最大数为：".maxValue(100)."<hr>";//参数1被传递，参数2使用默认值
	echo "<hr>最大数为：".maxValue(100,200)."<hr>";//不使用默认值

	function outFn(){
		function inFn(){
			echo "<hr>内部函数<hr>";
		}
		inFn();//内部函数在函数内部调用
	}
	outFn();
	//outFn();//PHP不支持函数重载 内部函数被多次声明报错
	
	//js自身调用
	// (function(){
	// 	echo "匿名函数";
	// })();
	
	$fn = function(){
		echo "匿名函数指针调用<hr>";
	};
	$fn();

	function fn2($fnPar){
		$fnPar();
	}
	$fn3 = function(){
		echo "通过回调调用<hr>";
	};
	fn2($fn3);

	fn2(function(){
		echo "回调222<hr>";
	});


	//函数返回多个值
	function twoColor(){
		return array("red","green","yellow");
	}
	list($col1,$col2) = twoColor();
	echo "{$col1},{$col2}";
	//只获取最后一个参数
	list(,,$col3) = twoColor();
	echo $col3;

	//终止函数的执行
	//return
	//exit();
	//die(); 终止代码执行，输出内容，功能 == exit()
	
	function killFn(){
		//exit("<hr>函数被终止了<hr>");
		//die("<hr>函数被终止了<hr>");
		exit/die;//结束执行 不输出内容
		echo "===========";
	}
	killFn();
 ?>