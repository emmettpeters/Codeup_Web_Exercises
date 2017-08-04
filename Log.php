<?php

require "library.php";

class Log
{
	public $filename;
	public $handle;

	public function __construct($prefix = "log"){
		$this->filename = $prefix. "-" . date("Y-m-d") . ".log";
	}

	public function info($message){
		$this->logMessage("INFO",$message);
	}

	public function error($message){
		$this->logMessage("ERROR",$message);
	}

	public function logMessage($logLevel,$message){
		$message = date("h:i:s ") . "[$logLevel]". $message . PHP_EOL;
		$this->handle = fopen($this->filename, "a");
		fwrite($this->handle,$message);
		
	} 

	public function __destruct(){
		fclose($this->handle);
	}
}