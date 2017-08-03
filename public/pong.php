<?php

require "functions.php";

function up($value){
	return $value + 1;
}

function pageController(){

	$address = "http://codeup.dev/ping.php";

	$hits = inputGet('hits') ?? 0;
	$misses = inputGet('misses') ?? 0;

	if(inputHas('hit')){
		$hits = up($hits);
	}
	if(inputHas('miss')){
		$hits = 0;
		header("Location:failure.html");
		die();
		
		$address = "failure.html";
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
	<title>Pong</title>
</head>
<body>
	<h1>PONG</h1>
	<h3>HITS: <?= $hits ?></h3><br>
	<form action=<?= $address?>>
		<button name="hit"  value="0">HIT</button><br>
		<input type="hidden" name="hits" value="<?= $hits ?>">
		<a href="failure.html"><button name="miss" value="0">MISS</button></a><br>
		<input type="hidden" name="misses" value="<?= $misses ?>">	 
	</form>	
</body>
</html>