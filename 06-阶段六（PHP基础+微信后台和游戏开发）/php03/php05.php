<?php 
	//拷贝
	//copy(源文件路径，目标文件路径)
	$source = "test.txt";
	$dest = "text副本.txt";
	$result = copy($source, $dest);
	if($result){
		echo "复制成功";
	}

	//重命名
	$result = rename("text副本.txt","test10.txt");
	if($result){
		echo "<hr>重命名成功";
	}

	//删除指定文件
	$result = unlink("test10.txt");
	if($result){
		echo "<hr>删除成功";
	}
 ?>