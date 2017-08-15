<?php 

require_once "park_logins.php";
require_once "db_connect.php";
require_once "Park.php";

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
    $newPark = new Park();
	$newPark->name = $park[0];
	$newPark->location = $park[1];
	$newPark->dateEstablished = $park[2];
	$newPark->areaInAcres = $park[3];
	$newPark->description = $park[4];
	$newPark->insert();
}
