//--------------------------------------------
//Box Sizing and border
//--------------------------------------------

$('.colBord').css({border: "1px solid black",height:"200px",backgroundColor:"white"});
$('.contSize').css("border","2px solid black");
$('#winner').css("height","40px");

//--------------------------------------------
//Button Functionality
//--------------------------------------------

var i = 0;
var redArray = [];
var blueArray = [];
var redScore = document.getElementById("redscore");
var blueScore = document.getElementById("bluescore");

$("#reset").click(function(){
	$('.colBord').css('backgroundColor','white');
	i=0;
	redArray = [];
	blueArray = [];
	$('#winner').text("");
});

$('.colBord').click(function(){
	if(i<8.9 && this.style.backgroundColor == "white"){
		if (i%2==0){
			this.style.backgroundColor = "red";
			redArray.push(Number(this.innerHTML));
			i+=1;
			if (
				((redArray.indexOf(1)!== -1) && (redArray.indexOf(2)!== -1) && (redArray.indexOf(3)!== -1)) ||
				((redArray.indexOf(1)!== -1) && (redArray.indexOf(4)!== -1) && (redArray.indexOf(7)!== -1)) ||
				((redArray.indexOf(1)!== -1) && (redArray.indexOf(5)!== -1) && (redArray.indexOf(9)!== -1)) ||
				((redArray.indexOf(4)!== -1) && (redArray.indexOf(5)!== -1) && (redArray.indexOf(6)!== -1)) ||
				((redArray.indexOf(7)!== -1) && (redArray.indexOf(5)!== -1) && (redArray.indexOf(3)!== -1)) ||
				((redArray.indexOf(7)!== -1) && (redArray.indexOf(8)!== -1) && (redArray.indexOf(9)!== -1)) ||
				((redArray.indexOf(2)!== -1) && (redArray.indexOf(5)!== -1) && (redArray.indexOf(8)!== -1)) ||
				((redArray.indexOf(3)!== -1) && (redArray.indexOf(6)!== -1) && (redArray.indexOf(9)!== -1))
			){
				redScore.innerHTML = parseInt(redScore.innerHTML) + 1;
				i=8.9;
				$('#winner').text("RED WINS!!");
			};
		} else {
			this.style.backgroundColor = "blue";
			blueArray.push(Number(this.innerHTML));
			i+=1;
			if (
				((blueArray.indexOf(1)!== -1) && (blueArray.indexOf(2)!== -1) && (blueArray.indexOf(3)!== -1)) ||
				((blueArray.indexOf(1)!== -1) && (blueArray.indexOf(4)!== -1) && (blueArray.indexOf(7)!== -1)) ||
				((blueArray.indexOf(1)!== -1) && (blueArray.indexOf(5)!== -1) && (blueArray.indexOf(9)!== -1)) ||
				((blueArray.indexOf(4)!== -1) && (blueArray.indexOf(5)!== -1) && (blueArray.indexOf(6)!== -1)) ||
				((blueArray.indexOf(7)!== -1) && (blueArray.indexOf(5)!== -1) && (blueArray.indexOf(3)!== -1)) ||
				((blueArray.indexOf(7)!== -1) && (blueArray.indexOf(8)!== -1) && (blueArray.indexOf(9)!== -1)) ||
				((blueArray.indexOf(2)!== -1) && (blueArray.indexOf(5)!== -1) && (blueArray.indexOf(8)!== -1)) ||
				((blueArray.indexOf(3)!== -1) && (blueArray.indexOf(6)!== -1) && (blueArray.indexOf(9)!== -1))
			){
				blueScore.innerHTML = parseInt(blueScore.innerHTML) + 1;
				i=8.9;
				$('#winner').text("BLUE WINS!!");
			};
		};
		
		if(i==9 && ($('winner').text()=="")){$('#winner').text("TIE!!!")};
		console.log(i);
	};
});










