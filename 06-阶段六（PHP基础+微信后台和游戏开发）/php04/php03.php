<?php 
	// print_r($_GET);
	// echo "<hr>";
	// print_r($_POST);
	// echo "<hr>";
	// print_r($_FILES);
	
	//print_r($_SERVER);

	//$_FILES:二维数组，保存文件
	// 文件名
	$imgName = $_FILES["imgage"]["name"];
	// 类型
	$imgType = $_FILES["imgage"]["type"];
	// 临时路径:上传到服务器的文件会被保存到本地的一个临时的文件夹下，不处理会被删除
	$imgPath = $_FILES["imgage"]["tmp_name"];
	// 错误编码: 0正确
	$imgError = $_FILES["imgage"]["error"];
	// 文件的大小
	$imgSize = $_FILES["imgage"]["size"];

	//判断错误信息
	//错误信息配置可以在本地：php文件夹下php.int下去配置
	switch ($imgError) {
		case UPLOAD_ERR_OK://0
			echo "上传成功";
			break;
		case UPLOAD_ERR_INI_SIZE://1
			die("你上传的文件大小超过了php.ini设置的最大值");
			break;
		case UPLOAD_ERR_FORM_SIZE://2
			exit("上传文件的大小超过了表单中MAX_FILE_SIZE设置的大小");
			break;
		case UPLOAD_ERR_PARTIAL://3
			exit("文件没有完全上传，检查网络");
			break;
		case UPLOAD_ERR_NO_FILE://4
			exit("请选择正确的文件路径");
			break;
		default:
			break;
	}

	//判断文件的类型
	if($imgType != "image/jpeg" && $imgage != "image/png" && $imgType != "image/gif"){
		exit("上传的图片格式不正确");
	}

	//保存图片到服务器文件夹下
	$dirPath = "./uploadImg";
	//判断文件夹是否存在
	if(file_exists($dirPath)){
		echo "文件夹存在";
	}else{
		//创建一个文件夹
		$rel = mkdir($dirPath);
		if($rel){
			echo "文件夹创建成功";
		}
	}
	
	//move_uploaded_file(filename, destination):移动上传过来的文件
	$destination = $dirPath."/".time().$imgName;
	$rel = move_uploaded_file($imgPath, $destination);
	if ($rel) {
		echo "移动成功";
		//localhost/文件夹/图片名称
		$url = $_SERVER["REQUEST_URI"];
		// $fileArr = pathinfo($url);
		// echo "<hr>";
		// print_r($fileArr);
		
		// 获取到服务路径
		$urlPath = dirname($url);
		//echo "<hr>{$urlPath}";
		$imgUrlPath = $urlPath.'/'.$destination;
		echo "<hr>$imgUrlPath<hr>";
		echo "<img src='{$imgUrlPath}'>";
	}else{
		echo "移动失败";
	}
 ?>