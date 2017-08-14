<?php

require_once "../Park.php";

Park::dbConnect();

var_dump(Park::count());

var_dump(Park::all());

var_dump(Park::paginate(4,3));

Park::insert("asd","asd","1990-01-01",4000,"asd");