<?php

require_once "parks_login.php";
require_once "db_connect.php";

$statement = "CREATE TABLE IF NOT EXISTS national_parks (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(128),
    location VARCHAR(128),
    date_established DATE,
    area_in_acres DOUBLE,
    PRIMARY KEY (id)
    );
";

$dbc->exec($statement);