<?php
require_once "Model.php";
require_once "User.php";

$newUser = new User();

$newUser->username = "emmett";
$newUser->password = "password";

// echo "name is " . $attributes->name . PHP_EOL;

// $attributes->name = "this model's name";

// echo "name is " . $attributes->name . PHP_EOL;

echo User::getTableName() . PHP_EOL;
