<?php

function pageController(){

	$var = $_GET['hits'] ?? 0;

	if (isset($_GET['up'])){
		$var = $_GET['count'] + 1;
	} 

	if (isset($_GET['down'])){
		$var = $_GET['count'] - 1;
	} 

	return ["var" => $var];

}

extract(pageController());


?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<h1>COUNTER : <?= $var ?></h1>
	<a href="counter1.php?up=true&count=<?= $var?>">UP!</a>
	<a href="counter1.php?down=true&count=<?= $var?>">DOWN!</a>

</body>
</html>