<?php

$connection = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME  , DB_USERNAME  , DB_PASSWORD);

$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
