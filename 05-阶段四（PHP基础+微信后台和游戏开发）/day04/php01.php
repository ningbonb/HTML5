<?php 
	//判断文件夹是否存在
	$filename = "./test";
	if(file_exists($filename)){
		echo("文件夹存在");
	}else{
		echo("文件夹不存在");
		//创建一个文件夹
		$result = mkdir($filename);
		if($result){
			echo "<hr>创建成功<hr>";
		}
	}

	// 打开
	$handle = opendir($filename);
	if($handle == false){
		echo "打开文件夹失败<hr>";
	}
	//创建一个文件 file_put_contents:如果文件不存在，默认创建
	file_put_contents($filename."/1.txt", "111");
	file_put_contents($filename."/2.txt", "222");
	//mkdir($filename."/subTest");
	//读取
	$file = readdir($handle);
	echo("<hr>{$file}<hr>");// . 当前目录，根目录

	$file = readdir($handle);// .. 上级目录
	echo("<hr>{$file}<hr>");

	$file = readdir($handle);
	echo("<hr>{$file}<hr>");

	$file = readdir($handle);
	echo("<hr>{$file}<hr>");

	$file = readdir($handle);
	echo("<hr>{$file}<hr>");
	$file = readdir($handle);
	echo("<hr>{$file}<hr>");
	var_dump($file);//bool(false):访问至文件没有

	rewind($handle);//指针回到开始位置
	//fseek(handle, offset):指定位置
	while($file = readdir($handle)){
		if($file != '.' && $file != '..'){
			echo("<hr>{$file}<hr>");
		}
	}

	//关闭
	closedir($handle);

	//以数组的形式返回对应目录的文件，默认打开关闭
	$arr = scandir($filename);
	print_r($arr);
	echo("<hr>");
	echo filesize($filename."/1.txt");

	$time = filectime($filename);
	echo "<hr>";
	var_dump($time);
	$timer = date("Y-m-d H:i:s",$time);
	echo "<hr>";
	var_dump($timer);

	/*
	//删除文件
	unlink($filename."/1.txt");
	unlink($filename."/2.txt");
	//删除:文件夹下必须没有子文件
	$result = rmdir($filename);
	// $result = rmdir($filename."/subTest");
	if($result){
		echo "<hr>删除成功<hr>";
	}else{
		echo "<hr>删除失败<hr>";
	}
	*/

	//删除文件函数：递归调用
	echo "<hr>";
	//is_dir:判断给定路径是不是文件夹，如果是返回true
	var_dump(is_dir($filename."/subTest"));

	function rmFolder($filePath){
		if (is_dir($filePath)) {//文件夹
			//获取子文件
			$files = scandir($filePath);
			if(count($files) > 2){//有子文件
				//遍历
				for ($i=2; $i < count($files); $i++) { 
					// 子文件
					$subPath = $filePath."/".$files[$i];
					// 递归函数本身：获取到该子文件：每次的判断是相同的
					rmFolder($subPath);
				}
			}
			//else{
				//上面函数递归删除子文件后，会调用rmdir：删除对应文件夹（文件夹下有子文件的情况）
				rmdir($filePath);
			//}
		}else{
			unlink($filePath);
		}
	}

	rmFolder($filename);
 ?>
