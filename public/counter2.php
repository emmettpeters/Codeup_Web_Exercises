<?php

function pageController(){

	$count = $_GET['count'] ?? 0;

	return ["count"=>$count];

}

extract(pageController());

?>
<!DOCTYPE html>
<html>
<head>
	<title>Counter</title>
</head>
<body>
	<h1>Counter : <?= $count ?></h1>
	<a href="?count=<?= $count + 1 ?>">UP</a><br>
	<a href="?count=<?= $count - 1 ?>">DOWN</a>
</body>
</html>