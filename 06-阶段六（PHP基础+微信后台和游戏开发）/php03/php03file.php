<?php 
	//打开文件
	//filename:文件的路径名
	//mode:打开方式
	$filePath = "./test.txt";
	//返回一个文件句柄（文件的指针，用来操作文件）
	$handle = fopen($filePath, "r");
	//r:只读，文件指针指向开头
	//r+:读写，文件指针指向开头
	//w:写入，文件指针指向开头，并把内容清空，如果没有文件，会自动创建
	//w+:读写，同上
	//a:写入，文件指针在尾部，如果没有自动创建
	//a+:读写，同上
	
	//resource:资源类型
	//var_dump($handle);
	
	// 读取内容
	$contentStr = fread($handle, 3);
	echo "{$contentStr}<hr>";

	$contentStr = fread($handle, 3);
	echo "{$contentStr}<hr>";

	$contentStr = fread($handle, 3);
	echo "{$contentStr}<hr>";

	// 访问所有内容:计算出文件内容大小
	$filesize = filesize($filePath);
	echo "$filesize<hr>";
	echo(fread($handle,$filesize)."<hr>");

	//控制文件指针的位置：
	//把文件指针的位置设置为开头
	rewind($handle);
	echo(fread($handle,$filesize)."<hr>");

	//获取当前指针位置
	$position = ftell($handle);
	echo("<hr>{$position}<hr>");

	//设置文件指针的位置
	fseek($handle, 2);

	$position = ftell($handle);
	echo("<hr>{$position}<hr>");

	$contentStr = fread($handle, 3);
	echo "{$contentStr}<hr>";

	//读取所有方式2
	// 读取一行
	rewind($handle);
	$contentStr = fgets($handle);
	echo "{$contentStr}<hr>";

	$contentStr = fgets($handle);
	echo "{$contentStr}<hr>";

	//每次一行，读到结束
	rewind($handle);
	//fgets($handle):如果读到默认，返回的是空
	while ($row = fgets($handle)) {
		echo "{$row}<hr>";
	}

	// file end of
	// feof($handle): 判断文件指针是否到了结束位置
	rewind($handle);
	var_dump(feof($handle));//只有结束位置：true
	while (!feof($handle)){
		$row = fgets($handle);
		echo "{$row}<hr>";
	}
	// 关闭文件
	fclose($handle);

	//每次读取一行，存入数组，默认自动打开读取关闭文件
	$content = file($filePath);
	var_dump($content);

	echo "<hr>";

	$content = file($filePath);
	var_dump($content);

	//读取所有内容，字符串形式返回，默认打开读取关闭
	$contentStr = file_get_contents($filePath);
	echo "<hr>{$contentStr}<hr>";

	$baidu = file_get_contents("https://www.baidu.com");
	echo "<hr>$baidu";
 ?>