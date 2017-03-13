<?php 
	require("SQL.php");
	// empty:是否为空，空的话返回true
	if(!empty($_GET)){//get请求
		$id = $_GET["id"];
		// 执行删除
		$sql = "DELETE FROM user WHERE id = '{$id}'";
		deleteDate($sql,function(){
			// 删除成功，刷新界面
			echo("<script>window.location.href='php03.php'</script>");
		});
	}
 ?>
