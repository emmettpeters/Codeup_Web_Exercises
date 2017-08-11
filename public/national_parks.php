<?php

require_once "../park_logins.php";
require_once __DIR__ . '/../db_connect.php';
require_once __DIR__ . "/../Input.php";

function pageController($dbc){
	$data=[];

if (!empty($_REQUEST)) {
 
 		$first5 = 'SELECT * FROM national_parks limit 5';
 		$second5 = 'SELECT * FROM  national_parks limit 5 offset 5';
 
 		$request = Input::get('view');
 
 		$query = ($request == 'first5') ? $first5 : $second5;
 
 		$stmt = $dbc->query($query);

 		// var_dump($stmt->fetchAll(PDO::FETCH_NUM));
 		$data['results'] = $stmt->fetchAll(PDO::FETCH_NUM);
 	} else {
 		$data = ['results' => ''];
 	}
 
 	return $data;

}

extract(pageController($dbc));

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon"> 
     
     <title>National Parks</title>
     
     <!-- Bootstrap CSS -->
     <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
     rel="stylesheet" 
     integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
     crossorigin="anonymous">
 
     <!-- Custom CSS -->
     <link rel="stylesheet" type="text/css" href="===PATH HERE===">
     <style rel="stylesheet" type="text/css">
     	h1 {
     		text-align:center;
     	};
     	
     </style>
</head>
<body>
 <main class="container">   
	<h1 class="jumbotron">National Parks</h1>
	<br>
	<?php if ($results !== '') : ?>
		<table class="table">
			<tr>
				<th>Name</th>
				<th>Location</th>
				<th>Date Established</th>
				<th>Area In Acres</th>
			</tr>	
		<?php foreach ($results as $result): ?>
			<tr>	
				<?php //var_dump($result) ?>	
				<td><?= $result[1] ?></td>
				<td><?= $result[2] ?></td>
				<td><?= $result[3] ?></td>
				<td><?= $result[4] ?></td>
			</tr>
		<?php endforeach ?>
		</table>

	<?php endif ?>
 
	<a class="btn btn-primary" href="?view=first5">First 5</a>
	<a class="btn btn-secondary" href="?view=second5">Second 5</a>

     </main>
     
     <!-- jQuery Version 2.2.4 -->
     <script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
 
     <!-- Bootstrap JS -->
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" 
     integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" 
     crossorigin="anonymous"></script>

</body>
</html>