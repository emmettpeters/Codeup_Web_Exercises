<?php

$array1 = ["fat","skinny","ugly","happy","quick","fast","tall","smart","nimble","agile"];
$array2 = ["Emu","Donkey","Peacock","Ram","Horse","Corvette","BMW","Rocket","Space","Earth"];

function randomOne($array1,$array2){
	 return $array1[array_rand($array1)] . $array2[array_rand($array2)];
}

$serverName = randomOne($array1,$array2);

$favThings = ["money","fun","outdoors","cars","activities"];

function favThings($array){
	for ($i = 0;$i < count($array);$i++){
		echo "<tr><td>" . $array[$i] . "</td></tr>";
	}
}

$contacts = [
    'contact1'=> [
            "name" => "Jack Blank",
            "number"=> "123-123-1234"
    ],
    'contact2'=> [
            "name" => "Sam Smith",
            "number"=> "123-321-5432"
    ],
    'contact3'=> [
            "name" => "Fred Cat",
            "number"=> "333-333-3333"
    ]
     
];

function foreachContacts($array){
	foreach($array as $key => $person){
		echo "<tr><td>" . $key . "</td><td>" . $person['name'] . "</td><td>" . $person['number'] . "</td></tr>";
	}
}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Random Server Name</title>
	<style type="text/css">

		table>tr:nthChild(odd){
			background-color:lightblue;
		}

	</style>
</head>

<body>
	<h1>Random Server Name = <?php echo $serverName ?></h1>

	<table>
		<th>Favorite Things</th>
		<tr>
			<?php favThings($favThings) ?>
		</tr>
	</table>
	<br>
	<table>
		<th>Contacts</th>
			<?php foreach($contacts as $key => $person){ ?>
			<tr>
			<td> <?php echo $key ?> </td>
			<td> <?php echo $person['name'] ?> </td>
			<td> <?php echo $person['number'] ?> </td>
			</tr>
			<?php } ?>
		</tr>


	
	</table>
	

</body>
</html>