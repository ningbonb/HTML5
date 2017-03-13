<?php 
	//文件的引入
	include "php00.php";
	include "php00.php";
	include "php00.php";
	//保证同一个文件只引入一次
	include_once "php00.php";
	//可以重复引用
	require "php00.php";
	//保证同一个文件只引入一次
	require_once "php00.php";

	//区别
	//require比include更严格，出现错误终止执行，include如果文件出错，后面代码可以继续执行
	//调试使用 require; 正式使用 include
 ?>