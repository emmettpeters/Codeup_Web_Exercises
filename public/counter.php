<?php

function up($value){
	return $value + 1;
}

function down($value){
	 return $value - 1;
}
	
function pageController(){

	$currentCount = $_GET['currentCount'] ?? 0;


	if (isset($_GET['UP'])){
		$currentCount = up($currentCount);
		var_dump($currentCount);
	} elseif (isset($_GET['DOWN'])) {
		$currentCount = down($currentCount);
		var_dump($currentCount);
	}

	return ["currentCount" => $currentCount];
}

extract(pageController());

?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>


<h1>Counter = <?= $currentCount ?></h1>
<form>
	<label>UP!<input type="submit" name="UP"></label><br>
	<label>DOWN!<input type="submit" name="DOWN"></label><br>
	<input type="hidden" name="currentCount" value="<?= $currentCount ?>">
</form>
</body>
</html>