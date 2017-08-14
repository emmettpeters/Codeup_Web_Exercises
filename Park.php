<?php

require_once "park_logins.php";

/**
 * A Class for interacting with the national_parks database table
 *
 * contains static methods for retrieving records from the database
 * contains an instance method for persisting a record to the database
 *
 * Usage Examples
 *
 * Retrieve a list of parks and display some values for each record
 *
 *      $parks = Park::all();
 *      foreach($parks as $park) {
 *          echo $park->id . PHP_EOL;
 *          echo $park->name . PHP_EOL;
 *          echo $park->description . PHP_EOL;
 *          echo $park->areaInAcres . PHP_EOL;
 *      }
 * 
 * Inserting a new record into the database
 *
 *      $park = new Park();
 *      $park->name = 'Acadia';
 *      $park->location = 'Maine';
 *      $park->areaInAcres = 48995.91;
 *      $park->dateEstablished = '1919-02-26';
 *
 *      $park->insert();
 *
 */
class Park
{

    ///////////////////////////////////
    // Static Methods and Properties //
    ///////////////////////////////////

    /**
     * our connection to the database
     */
    public static $dbc = null;

    /**
     * establish a database connection if we do not have one
     */
    public static function dbConnect() {
        require 'db_connect.php';
        if (! is_null(self::$dbc)) {
            return;
        }
        self::$dbc = $dbc;
    }

    /**
     * returns the number of records in the database
     */
    public static function count() {
        self::dbConnect();
        $countQuery = "SELECT count(*) FROM national_parks";
        $stmt = self::$dbc->query($countQuery);
        $count = (int) $stmt->fetchColumn();
        return $count;
        // TODO: call dbConnect to ensure we have a database connection
        // TODO: use the $dbc static property to query the database for the
        //       number of existing park records
    }

    /**
     * returns all the records
     */
    public static function all() {
        self::dbConnect();
        $allQuery = "SELECT * FROM national_parks";
        $stmt = self::$dbc->query($allQuery);
        $allParks = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $allParks;

        // TODO: call dbConnect to ensure we have a database connection
        // TODO: use the $dbc static property to query the database for all the
        //       records in the parks table
        // TODO: iterate over the results array and transform each associative
        //       array into a Park object
        // TODO: return an array of Park objects
    }

    /**
     * returns $resultsPerPage number of results for the given page number
     */
    public static function paginate($pageNo, $resultsPerPage = 4) {

        self::dbConnect();
        $stmt = self::$dbc->prepare('SELECT * FROM national_parks LIMIT :pageNo OFFSET :resultsPerPage');
        $stmt->bindValue(':resultsPerPage', $resultsPerPage, PDO::PARAM_INT);
        $stmt->bindValue(':pageNo',  $pageNo,  PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_OBJ);

        // TODO: call dbConnect to ensure we have a database connection
        // TODO: calculate the limit and offset needed based on the passed
        //       values
        // TODO: use the $dbc static property to query the database with the
        //       calculated limit and offset
        // TODO: return an array of the found Park objects
    }

    /////////////////////////////////////
    // Instance Methods and Properties //
    /////////////////////////////////////

    /**
     * properties that represent columns from the database
     */
    public $id;
    public $name;
    public $location;
    public $dateEstablished;
    public $areaInAcres;
    public $description;

    /**
     * inserts a record into the database
     */
    public function insert() {
        self::dbConnect();
        $query = "INSERT INTO national_parks (name, location, date_established, area_in_acres, description) VALUES (?,?,?,?,?)";
        $stmt = self::$dbc->prepare($query);

        $stmt->execute(array("{$this->name}", "{$this->location}", "{$this->dateEstablished}", "{$this->areaInAcres}", "{$this->description}"));
        // TODO: call dbConnect to ensure we have a database connection
        // TODO: use the $dbc static property to create a perpared statement for
        //       inserting a record into the parks table
        // TODO: use the $this keyword to bind the values from this object to
        //       the prepared statement
        // TODO: excute the statement and set the $id property of this object to
        //       the newly created id
    }
}
