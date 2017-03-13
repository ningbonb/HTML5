<?php 
	//print_r($_GET);
	//echo("<hr>");
	//print_r($_POST);
	if ($_GET) {
		$fileName = $_GET["subName"];
		//删除
		rmFolder($fileName);
		//刷新
		echo "<script>window.location.href='php02.php'</script>";
	}

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

 ?>
