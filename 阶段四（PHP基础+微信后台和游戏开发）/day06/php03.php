<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>用户表格</title>
</head>
<body>
	<table border="1" cellspacing="0" width="500">
		<tr>
			<th>ID</th>			
			<th>姓名</th>			
			<th>年龄</th>			
			<th>性别</th>			
			<th>电话</th>			
			<th>操作</th>			
		</tr>
		<?php
			//引入文件 
			require("SQL.php");
			$sql = "SELECT * FROM user";
			selectDate($sql,function($dataJson){
				//echo "$dataJson";
				$jsonObj = json_decode($dataJson);
				//var_dump($jsonObj);
				//双层数组
				foreach ($jsonObj as $userInfo) {
					//确定行数
					echo("<tr>");
					//遍历用户信息，每个属性对应一个td
					foreach ($userInfo as $key => $value) {
						# 结束本次循环
						if($key == "void") continue;
						echo "<td>{$value}</td>";
					}
					//每一行的最后一个td
					$id = $userInfo->id;
					echo "<td><a href='delete.php?id={$id}'>删除</a></td>";
					echo("</tr>");
				}
			},function(){
				echo "查询失败";
			});
		 ?>
	</table>


	<h2>新增用户</h2>
	<form action="inset.php" method="get">
		姓名：<input type="text" name="name">
		年龄：<select name="age" id="">
			<?php 
				for ($i=1; $i <= 100; $i++) { 
					# code...
					echo "<option value='{$i}'>{$i}</option>";
				}
			 ?>
		</select>
		性别：
		<input type="radio" name="sex" value="男" checked="checked">男
		<input type="radio" name="sex" value="女">女
		电话：<input type="number" name="tel">
		<br>
		<input type="submit" value="提交">
	</form>
</body>
</html>