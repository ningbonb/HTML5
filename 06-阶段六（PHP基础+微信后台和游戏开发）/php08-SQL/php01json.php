<?php
	//json_string
	$arr = array("user"=>"石头","pass"=>"123","sex"=>"男","hobby"=>["抽烟","喝酒","烫头"],"friends"=>["f1"=>"熊大","f2"=>"毛毛"]);
	
	$json_string = json_encode($arr);
	
	echo $json_string;
	echo "<hr>";
	//{"user":"\u77f3\u5934","pass":"123","sex":"\u7537"}
	
	//json_string 格式内部只能事双引号
	$json_S = '{"user":"\u77f3\u5934","pass":"123","sex":"\u7537","hobby":["\u62bd\u70df","\u559d\u9152","\u70eb\u5934"],"friends":{"f1":"\u718a\u5927","f2":"\u6bdb\u6bdb"}}';
	//默认按照格式解析，{}：对象 []：数组
	//$jsonObj = json_decode($json_S);
	//把{}：都解析为数组
	$jsonObj = json_decode($json_S,true);
	var_dump($jsonObj);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
?>