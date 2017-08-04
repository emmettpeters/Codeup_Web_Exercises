<?php

require "../Input.php";
require_once "../Auth.php";
require "functions.php";
session_start();

if(isset(Auth::check())){
	header("Location:authorized.php");
	die();
}

function pageController(){
	
	$data = [];
	$data['error'] = "";
	$username = Input::get('username');
	$password = Input::get('password');

	if(!empty($_POST)){

		if (Auth::attempt($username,$password)){	
			$sessionId = session_id();
			$_SESSION['session_id'] = $sessionId;
			$_SESSION['logged_in_user']= $username;
			header("Location:authorized.php");
			die();
		} else {
			$data['error'] = "INCORRECT UN OR PW!!";
		}

		$data['username'] = $username;
		$data['password'] = $password;
		return $data;

	}
	return $data;
	
}

extract(pageController());

?>
<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
</head>
<body>
	<h1>LOGIN</h1>
	<form action="login.php" method="POST">
		<label>USERNAME :<br><input name="username" type="text"></label><br>
		<label>PASSWORD :<br><input name="password" type="text"></label><br>
		<input type="submit" value="SUBMIT">
	</form>

	<h2><?= $error ?></h2>
	<!-- <h2><?= $username ?></h2>
	<h2><?= $password ?></h2> -->


</body>
</html>