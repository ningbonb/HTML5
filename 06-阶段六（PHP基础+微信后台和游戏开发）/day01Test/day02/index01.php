<?php 
	for ($i=0; $i < 10; $i++) { 
		# code...
	}

	$arr = array(1,2,3);
	foreach ($arr as $key => $value) {
		if($key == 1){
			continue;
		}
		# code...
		echo "{$key}={$value}<hr>";
	}

	foreach ($arr as $value) {
		# code...
		echo "{$value}<hr>";
	}
 ?>