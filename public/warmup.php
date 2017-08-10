<?php

class StringTransform{

	public static $stringTest = "testbjhv";

	public static function isLetter($character){
		return ctype_alpha($character);
	}
	public static function secondCharCap($string){
		if (ctype_lower($string[1])){
			$string[1]= strtoupper($string[1]);
		}
		return $string;
	}
	public static function firstLastUpper($string){
		if (self::isLetter($string[0])){
			$string[0] = strtoupper($string[0]);
		}

		if (self::isLetter($string[count($string) -2 ])){
			$string[count($string) -2 ] = strtoupper($string[count($string) -2 ]);
		}

		return $string;
	}
}

