<?php
class Input
{
    /**
     * Check if a given value was passed in the request
     *
     * @param string $key index to look for in request
     * @return boolean whether value exists in $_POST or $_GET
     */
    public static function has($key)
    {
        $result = isset($_REQUEST[$key]) ? true : false;
        return $result;
    }
    /**
     * Get a requested value from either $_POST or $_GET
     *
     * @param string $key index to look for in index
     * @param mixed $default default value to return if key not found
     * @return mixed value passed in request
     */
    public static function get($key, $default = null)
    {
        $result = (self::has($key)) ? $_REQUEST[$key] : $default;
        return $result;
    }

    public static function escape($input)
    {
        return htmlspecialchars(strip_tags($input));
    }

    public static function getString($key){
        $input = self::get($key);
        if (!is_string($input)){
            throw new Exception("must be a string bro!");
        } else if (is_numeric($input)){
            throw new Exception("cannot be numeric");
        } else if (empty($input)){
            throw new Exception("cannot be empty");
        }
        return $input; 
    }

    public static function getNumber($key){
        $input = self::get($key);
        if (!is_numeric($input)){
            throw new Exception("must be a number bro!");
        }  else if (empty($input)){
            throw new Exception("cannot be empty");
        }
        return $input; 
    }

    public static function ($key){
        $input = self::get($key);
        if (!is_numeric(strtotime($input))){
            throw new Exception("must be a valid date");
        } else {
            $date = new DateTime();
            $date->setTimestamp(strtotime($input));
            $date->setTimezone(new DateTimeZone('America/Chicago'));
        }
        return $date;
    }
    ///////////////////////////////////////////////////////////////////////////
    //                      DO NOT EDIT ANYTHING BELOW!!                     //
    // The Input class should not ever be instantiated, so we prevent the    //
    // constructor method from being called. We will be covering private     //
    // later in the curriculum.                                              //
    ///////////////////////////////////////////////////////////////////////////
    private function __construct() {}
}