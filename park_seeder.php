<?php 

require_once "park_logins.php";
require_once "db_connect.php";

$dbc->exec("TRUNCATE national_parks");
// get the contents of the CSV as a string
$contents = file_get_contents('national_parks.csv');
// get an array of all the rows
$parks = explode("\n", trim($contents));
// pull off the heading
array_shift($parks);
// trim each 
$parks = array_map('trim', $parks);

foreach($parks as $park) {
    $park = explode(",", $park);
    $query = "INSERT INTO national_parks (name, location, date_established, area_in_acres, description) VALUES (?,?,?,?,?)";
    $stmt = $dbc->prepare($query);
	$stmt->execute(array("{$park[0]}", "{$park[1]}", "{$park[2]}", "{$park[3]}", "{$park[4]}"));
}
