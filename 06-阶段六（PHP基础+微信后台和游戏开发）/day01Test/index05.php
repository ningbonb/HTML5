<?php 
	//print_r($_SERVER);
	///echo "<hr>";
	//print_r($_GET);
	//$user = $_GET["user"];
	//$pass = $_GET["pass"];
	//echo("登陆成功，你的用户名是{$user},密码是{$pass}");
	

	//print_r($_SERVER);
	//echo "<hr>";
	//print_r($_GET);
	//echo "<hr>";
	//print_r($_POST);

	//$user = $_POST["user"];
	//$pass = $_POST["pass"];
	//echo("登陆成功，你的用户名是{$user},密码是{$pass}");

	if($_SERVER["REQUEST_METHOD"] == "GET"){
		$user = $_GET["user"];
		$pass = $_GET["pass"];
	}else if($_SERVER["REQUEST_METHOD"] == "POST"){
		$user = $_POST["user"];
		$pass = $_POST["pass"];
	}
	echo("登陆成功，你的用户名是{$user},密码是{$pass}");
	echo "<hr>";
	//$_REQUEST:无论post活着get请求，都可以捕获，但是补推荐使用，不安全
	print_r($_REQUEST);
 ?>