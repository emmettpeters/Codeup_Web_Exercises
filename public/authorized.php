<?php
require "../Input.php";
require_once "../Auth.php";
require "functions.php";
session_start();

var_dump($_SESSION);

if(!Auth::check()){
	header("Location:login.php");
	die();
}

$data['username']= Auth::user();

function logout(){
	session_unset();
	session_regenerate_id(true);
	session_destroy();
	session_start();
}

function pageController(){
	$data['session'] = $_SESSION;

	if (Input::get('logout'))
	{	
		Auth::logout();
		header("Location:login.php");
		die();
	} 	
	return $data;
}

extract(pageController());

?>
<!DOCTYPE html>
<html>
<head>
	<title>LOGOUT</title>
</head>
<body>
	<h1>YOU HAVE BEEN LOGGED IN</h1>
	<h3>Your session id = <?= $_SESSION['session_id'] ?></h3>
	<h3>Your session username = <?= $_SESSION['logged_in_user'] ?></h3>
	<form method="POST">
		<button name="logout" value="true">LOGOUT</button>
	</form>

</body>
</html>