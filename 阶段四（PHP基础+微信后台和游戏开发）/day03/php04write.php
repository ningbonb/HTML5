<?php 
	//打开
	$filename = "test.txt";
	$handle = fopen($filename,"a+");

	//写入操作: w默认覆盖，a+从后接着写
	$result = fwrite($handle, "新的内容 \r\n 第二行");
	if($result){
		echo "写入成功";
	}
	//关闭
	fclose($handle);

	//返回写入的长度，如果写入失败返回空 可以判断写入是否成功
	//默认：打开-写入-关闭
	$result = file_put_contents($filename, "hello");
	echo($result);

	//文件不存在，自动创建
	$result = file_put_contents("test2.txt", "hello");
 ?>