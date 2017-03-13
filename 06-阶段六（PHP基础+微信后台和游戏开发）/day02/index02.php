<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>html和php混合写</title>
</head>
<body>
	<table border="1" -cellpadding="0" cellspacing="0">
		<tr>
			<th>距离</th>
			<th>费用</th>
		</tr>
		<?php 
			echo "<tr><td>50</td><td>5</td></tr>";
			echo "<tr><td>50</td><td>5</td></tr>";
			echo "<tr><td>50</td><td>5</td></tr>";
			for ($i=0; $i < 10; $i++) { 
				$dis = $i*50;
				$money = $i*5;
				echo "<tr>";
				echo "<td>{$dis}</td>";
				echo "<td>{$money}</td>";
				echo "</tr>";
			}
		 ?>
	</table>
	<?php 
		echo "<hr>";
		echo "<table  border=\"1\" cellspacing=\"0\">";
			echo "<tr>";
			echo "<td>500</td>";
			echo "<td>50</td>";
			echo "</tr>";
	 ?>
	 	<tr>
	 		<td>550</td>
	 		<td>55</td>
	 	</tr>
	 <?php 
		echo "</table>";
	  ?>

	  <table border="1" cellspacing="0">
	  	<?php 
	  		echo "<hr>";
	  		for ($i=0; $i < 10; $i++) { 
	  			# code...
	  			# 行
	  			echo "<tr>";
	  			for ($j=1; $j <= $i; $j++) { 
	  				# code...
	  				echo "<td>";
	  				echo "{$j}×{$i}=".$i*$j;
	  				echo "</td>";
	  			}
	  			echo "</tr>";
	  		}
	  	 ?>
	  </table>

	   <table border="1" cellspacing="0">
	  	<?php 
	  		echo "<hr>";
	  		for ($i=1; $i < 10; $i++) { 
	  			# code...
	  			# 行
	  			echo "<tr>";
	  			for ($j=1; $j < 10; $j++) { 
	  				# code...
	  				echo "<td>";
	  				if($j <= $i){
	  					echo "{$j}×{$i}=".$i*$j;
	  				}
	  				echo "</td>";
	  			}
	  			echo "</tr>";
	  		}
	  	 ?>
	  </table>
</body>
</html>