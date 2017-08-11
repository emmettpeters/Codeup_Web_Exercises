<?php

require_once "../park_logins.php";
require_once __DIR__ . '/../db_connect.php';
require_once __DIR__ . "/../Input.php";

function pageController($dbc) {
    if (!Input::has('view')){
       $key = 0;
    }
    else {
        if(is_numeric(Input::get('view'))){
            $key = Input::get('view');
        }
        else $key = 0;
    }
    $stmt = $dbc->query("SELECT * FROM national_parks");

    $rows = array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $rows[] = $row;
    }
    $final = end($rows)['id']-1;

    $stmt = $dbc->query("SELECT * FROM national_parks LIMIT 4 OFFSET $key");

   	$rows = array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $rows[] = $row;
    }
    return ['key' => $key,
    'rows' => $rows,
    'final'=>$final];
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
	<?php if ($rows !== '') : ?>
		<table class="table">
			<tr>
				<th>Name</th>
				<th>Location</th>
				<th>Date Established</th>
				<th>Area In Acres</th>
			</tr>	
		<?php foreach ($rows as $row): ?>
			<tr>	
				<?php //var_dump($result) ?>	
				<td><?= $row['name'] ?></td>
				<td><?= $row['location'] ?></td>
				<td><?= $row['date_established'] ?></td>
				<td><?= $row['area_in_acres'] ?></td>
			</tr>
		<?php endforeach ?>
		</table>

	<?php endif ?>
 
	<a id="prev" class="btn btn-primary" href="?view=<?= $key - 4?>">Previous</a>
	<a id="next" class="btn btn-secondary" href="?view=<?= $key + 4?>">Next</a>

     </main>
     
     <!-- jQuery Version 2.2.4 -->
     <script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
     <script type="text/javascript">
     	$curr = "<?= Input::get('view')?>";
     	$last = "<?= $final ?>";
     	console.log($curr);
     	if ($curr >= 56){
     		$('#next').hide();
     	} else {
     		$('#next').show();
     	}

     	if ($curr <= 3){
     		$('#prev').hide();
     	} else {
     		$('#prev').show();
     	}
     </script>
 
     <!-- Bootstrap JS -->
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" 
     integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" 
     crossorigin="anonymous"></script>

</body>
</html>