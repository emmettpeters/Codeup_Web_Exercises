<?php

$array1 = ["fat","skinny","ugly","happy","quick","fast","tall","smart","nimble","agile"];
$array2 = ["Emu","Donkey","Peacock","Ram","Horse","Corvette","BMW","Rocket","Space","Earth"];

function randomOne($array1,$array2){
	 return $array1[array_rand($array1)] . $array2[array_rand($array2)];
}

$serverName = randomOne($array1,$array2);

$favThings = ["money","fun","outdoors","cars","activities"];


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
?>

<!DOCTYPE html>
<html>
<head>
	<title>Random Server Name</title>
</head>

<body>
	<h1>Random Server Name = <?= $serverName ?></h1>
	<table>
		<th>Favorite Things</th>
		<?php foreach ($favThings as $thing): ?>
		<tr>
			<td><?= $thing ?></td>
		</tr>
		<?php endforeach ?>
	</table>
	<br>
	<table>
		<th>Contacts</th>
			<?php foreach($contacts as $key => $person): ?>
			<tr>
			<td> <?= $key ?> </td>
			<td> <?= $person['name'] ?> </td>
			<td> <?= $person['number'] ?> </td>
			</tr>
			<?php endforeach ?>
		</tr>


	
	</table>
	

</body>
</html>