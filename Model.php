<?php
 
 class Model {

 	protected static $table = "";

 	private $attributes = [];

 	public static function getTableName(){
 		return static::$table;
 	}

 	public function __set($name, $value)
    {
        // Set the $name key to hold $value in $data
        $this->attributes[$name] = $value;
    }

    public function __get($name)
    {
        // Check for existence of array key $name
        if (array_key_exists($name, $this->attributes)) {
            return $this->attributes[$name];
        }

        return null;
    }

 }