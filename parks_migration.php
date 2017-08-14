<?php

require_once "park_logins.php";
require_once "db_connect.php";

$statement = "DROP TABLE IF EXISTS national_parks";

$dbc->exec($statement);

$statement = "CREATE TABLE IF NOT EXISTS national_parks (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(128),
    location VARCHAR(128),
    date_established DATE,
    area_in_acres DOUBLE,
    description TEXT(128),
    PRIMARY KEY (id)
    );
";

$dbc->exec($statement);

