<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>文件管理</title>
</head>
<body>
	<table border="1" cellspacing="0">
		<tr>
			<th>文件</th>
			<th>文件大小</th>
			<th>操作</th>
		</tr>
		<?php 
			$fileName = "../day01Test";
			//读取
			$files = scandir($fileName);
			print_r($files);

			for ($i=2; $i < count($files); $i++) { 
				//echo "<tr><td>哈哈</td></tr>"
				$subFileName = $fileName."/".$files[$i];
		 ?>
		 	<tr>
		 		<td>
		 			<?php
		 				echo $files[$i];
		 			?>
		 		</td>
		 		<td>
		 			<?php
		 				echo filesize($subFileName);
		 			?>
		 		</td>
		 		<td>
		 			<a href="php02Delete.php?subName=<?php echo $subFileName; ?>">删除</a>
		 		</td>
		 	</tr>
		 <?php 
		 	}
		  ?>
	</table>
</body>
</html>