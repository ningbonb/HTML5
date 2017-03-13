<?php 
	//递归函数
	//1+2+3+4+5+..n
	function sumPro($n){
		//结束条件
		if($n == 0){
			return 0;
		}
		//递归
		return $n + sumPro($n-1);
	}
	echo sumPro(3);

	// &地址符号
	// &$num:表示接受的是变量的地址（引用类型），传入的是实参的地址，内部也是修改的该实参地址对应的值
	echo "<hr>";
	$a = 100;
	function modA(&$num){
		$num = 200;
	}
	modA($a);
	echo("全局a={$a}");

	//交换值
	$val1 = 100;
	$val2 = 200;
	function exchangeValue(&$n1,&$n2){
		$temp = $n1;
		$n1 = $n2;
		$n2 = $temp;
	}
	exchangeValue($val1,$val2);
	echo "<hr>val1={$val1},,,val2={$val2}<hr>";
 ?>