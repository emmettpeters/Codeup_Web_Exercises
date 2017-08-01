<?php

function up($value){
	return $value + 1;
}

function pageController(){

	$address = "http://codeup.dev/pong.php";

	$hits = $_GET['hits'] ?? 0;
	var_dump($hits);
	$misses = $_GET['misses'] ?? 0;
	var_dump($hits);
	$missesCount = $_GET['missesCount'] ?? 0;


	if(isset($_GET['hits']) && !isset($_GET['misses'])){
		$hits = up($hits);
	}

	if(isset($_GET['misses'])){
		$hits = 0;
		$missesCount = up($missesCount);
	}

	return ["hits"=>$hits,
	"misses"=>$misses,
	"address"=>$address];
}

extract(pageController());

?>

<!DOCTYPE html>
<html>
<head>
	<title>Ping</title>
</head>
<body>
	<h1>PING</h1>
	<h3>HITS: <?= $hits ?></h3><br>
	<form action=<?= $address?>>
		<button type="submit" value="0">HIT</button><br>
		<input type="hidden" name="hits" value="<?= $hits ?>">
		<button type="submit" name="misses">MISS</button><br>
		<input type="hidden" name="missesCount" value="<?= $misses ?>">
	</form>
</body>
</html>