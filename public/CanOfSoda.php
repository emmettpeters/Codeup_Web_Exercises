<?php 

class CanOfSoda
{
	public $brandName;
	public $expirationDate;
	public $isFull = true;
	public $isOpen = false;
	function openSoda()
	{
		$this->isOpen = true;
	}
	function pourOut()
	{
		if($this->isOpen==true)
		{
			$this->isFull=false;
		}
	}
	


}