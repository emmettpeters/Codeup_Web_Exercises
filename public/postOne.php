
<?php

function pageController(){
	$data =[];
	$nickname = isset($_POST['nickname']) ? $_POST['nickname'] : "undefined";

	$data['nickname'] = $nickname;
	var_dump($data['nickname']);

	if ($nickname == "Emmett"){
		header("Location:http://www.google.com");
		die;
	}

	return $data;
}

extract(pageController());

?>
<!DOCTYPE html>
<html>
<head>
	<title>Nickname</title>
</head>
<body>
<h1>NICKNAME : <?= $nickname ?> </h1>
	<form action="" method="POST">
		<label>Nickname<input name="nickname" type="text"></label>
		<button>SUBMIT</button>
	</form>

</body>
</html>