<?php 
	class Person{
		//常量：不能修改，定义不需要$
		const constantValue = "常量";
		//静态变量: 类变量，被所有对象拥有
		public static $staticValue = "静态变量";

		function showConst(){
			echo self::constantValue."<hr>";
		}
		function showStatic(){
			echo self::$staticValue."<hr>";
		}
		//静态方法，类方法
		static function test(){
			echo "类方法";
		}
	}

	$p1 = new Person();
	//直接访问常量
	echo Person::constantValue."<hr>";
	$p1->showConst();
	//php5.3之后支持对象访问常量
	echo($p1::constantValue."<hr>");

	//类名直接访问
	echo Person::$staticValue."<hr>";
	$p1->showStatic();
	echo $p1::$staticValue."<hr>";

	Person::$staticValue = "新的静态变量值";
	$p2 = new Person();
	$p2->showStatic();
	echo $p1::$staticValue."<hr>";

	Person::test();
	$p1->test();
	$p2->test();
 ?>