<?php 
	//对象->类
	class Person{
		//可见度：
		/*
		public:任意位置都可以访问
		protected:只能在当前类和子类中访问
		privite:只能在当前类中使用
		 */
		public $name = "小鹏";
		protected $sex;
		private $age;

		function description(){
			//类内部访问属性：$this：谁调用方法，$this就是哪一个对象
			//$this->$name
			echo "我叫: {$this->name},性别: {$this->sex},年龄: {$this->age}<hr>";
		}

		//构造方法:当外界通过new关键字创建一个对象的时候，系统自动调用该构造函数
		function __construct($name1="小鹏",$sex1="2",$age1="0"){
			//echo("{$name}------{$sex}------{$age}");
			$this->name = $name1;
			$this->sex = $sex1;
			$this->age = $age1;
		}

		//析构函数:对象被系统销毁的时候，系统自动调用
		// function __destruct(){
		// 	echo("再见".$this->name);
		// }
	}

	//类外：public：可以使用
	$p1 = new Person();
	$p1->name = "石头";
	echo($p1->name);
	$p1->description();

	$p2 = new Person();
	$p2->name = "毛毛";
	$p2->description();
	//无法访问私有受保护变量
	//$p2->sex = "2";
	
	$p3 = new Person("石头","男","30");
	echo $p3->name;
	$p3->description();

	//继承
	/**
	* 
	*/
	class Student extends Person
	{
		public $id;
		public $classroom;
		function __construct($name1="小鹏",$sex1="2",$age1="0",$id1,$classroom1)
		{
			$this->id = $id1;
			$this->classroom = $classroom1;

			//parent获取到当前对象的父元素 ::调用父元素的方法
			//第一种情况使用 ::调用方法
			parent:: __construct($name1,$sex1,$age1);
		}
		// 重写父类的方法
		function description(){
			echo "我叫{$this->name},性别: {$this->sex},年龄: {父类的私有属性，子类无权访问}学号：{$this->id},班级{$this->classroom}<hr>";

		}
	}

	echo "<hr>";
	$stu1 = new Student("石头","男","30","1314","十班");
	//echo $stu1->name;
	$stu1->description();
 ?>