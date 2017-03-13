<?php 
	require("SQL.php");
	if(!empty($_GET)){
		$name = $_GET["name"];
		$age = $_GET["age"];
		$sex = $_GET["sex"];
		$tel = $_GET["tel"];

		$sql = "INSERT INTO user(name,age,sex,tel) VALUES('{$name}','{$age}','{$sex}','{$tel}')";
		insertData($sql,function(){
			echo("<script>window.location.href='php03.php'</script>");
		},function(){
			echo "添加失败";
		});
	}
 ?>