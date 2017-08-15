<?php

require_once "../park_logins.php";
require_once __DIR__ . '/../db_connect.php';
require_once __DIR__ . "/../Input.php";
require_once "../Park.php";





function pageController($dbc) {

    if(!empty(Input::get("name")) && !empty(Input::get("location")) && !empty(Input::get("date")) && !empty(Input::get("area"))){

    $newPark = new Park();
        $newPark->name = Input::get('name');
        $newPark->dateEstablished = Input::get('date');
        $newPark->location = Input::get('location');
        $newPark->areaInAcres = Input::get('area');
        $newPark->description = Input::get('description');
        $newPark->insert();
    header("Location:national_parks.php");
    }


   $parksArray = Park::all();

var_dump($parksArray);





    // if (!Input::has('view')){
    //    $key = 0;
    // } else {
    //     if(is_numeric(Input::get('view'))){
    //         $key = Input::get('view');
    //     }
    //     else $key = 0;
    // }
    // $stmt = $dbc->query("SELECT * FROM national_parks");
    // var_dump($stmt);
    // $rows = array();
    // while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    //     $rows[] = $row;
    // }
    // $final = end($rows)['id']-1;

    // $stmt = $dbc->query("SELECT * FROM national_parks LIMIT 4 OFFSET $key");

    return [
    // '' => $key,
    // 'rows' => $rows,
    // 'final'=>$final,
    "parksArray"=>$parksArray];
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
    <form>
        <label>Name: <input id="name" name="name"></label>
        <label>Date Established: <input id="date" name="date"></label>
        <label>Location: <input id="location" name="location"></label>
        <label>Area in Acres: <input id="area" name="area"></label>
        <label>Description: <input id="description" name="description"></label>
        <button type="submit">Add Park</button>
    </form>
		<table class="table">
			<tr>
                <th>Id</th>
				<th>Name</th>
				<th>Location</th>
				<th>Date Established</th>
				<th>Area In Acres</th>
                <th>Description</th>
			</tr>	
		<?php foreach ($parksArray as $park): ?>
			<tr>		
                <td><?= $park['id'] ?></td>
				<td><?= $park['name'] ?></td>
				<td><?= $park['location'] ?></td>
				<td><?= $park['date_established'] ?></td>
				<td><?= $park['area_in_acres'] ?></td>
                <td><?= $park['description'] ?></td>
			</tr>
		<?php endforeach ?>
		</table>
 

     </main>
     
     <!-- jQuery Version 2.2.4 -->
     <script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
     
 
     <!-- Bootstrap JS -->
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" 
     integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" 
     crossorigin="anonymous"></script>

</body>
</html>