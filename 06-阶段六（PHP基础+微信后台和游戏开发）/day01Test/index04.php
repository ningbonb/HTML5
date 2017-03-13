<?php 
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