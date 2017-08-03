<!DOCTYPE html>
<html>
<head>
	<title>Template</title>
	<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
	<!-- <link rel="stylesheet" href="css/template.css"> -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>

	<!-- header -->
	<div id="header">
		<?php include 'headerTemplate.php' ?>
	</div>

	<!-- links -->
	<div id="links">
		<?php include 'linksTemplate.php' ?>
	</div>
	<!-- content area -->
	<div id="dropdown">
	<h1>OMG I NEED CONTENT!!</h1>
		<?php include 'headerTemplate.php' ?>
	</div>
	<!-- footer -->
	<main id="content">
		<?php include 'footerTemplate.php' ?>
	</main>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="//code.jquery.com/jquery-2.2.4.min.js"></script>
	<script type="text/javascript" src="js/template.js"></script>
</body>
</html>