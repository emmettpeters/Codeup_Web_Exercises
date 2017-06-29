//--------------------------------------------
//Box Sizing and border
//--------------------------------------------

$('.colBord').css({border: "1px solid black",height:"200px",backgroundColor:"white"});
$('.contSize').css("border","2px solid black");

//--------------------------------------------
//Button Functionality
//--------------------------------------------

var i = 0;
var boxesArray = [$('#one'),$('#two'),$('#three'),$('#four'),$('#five'),$('#six'),$('#seven'),$('#eight'),$('#nine')];
var redArray = [];
var blueArray = [];

$('.colBord').click(function(){
	console.log("clicked!");
	if(i<9 && this.style.backgroundColor == "white"){
		if (i%2==0){
			this.style.backgroundColor = "red";
			redArray.push(Number(this.innerHTML));
			console.log(redArray);

		} else {
			this.style.backgroundColor = "blue";
			blueArray.push(Number(this.innerHTML));
			console.log(blueArray);
		};
		i+=1;
	}
	console.log(i);
});



// if 
// 	(
// 		((blueArray.indexOf(1)!== -1) && (blueArray.indexOf(2)!== -1) && (blueArray.indexOf(3)!== -1)) ||
// 		((blueArray.indexOf(1)!== -1) && (blueArray.indexOf(4)!== -1) && (blueArray.indexOf(7)!== -1)) ||
// 		((blueArray.indexOf(1)!== -1) && (blueArray.indexOf(5)!== -1) && (blueArray.indexOf(9)!== -1)) ||
// 		((blueArray.indexOf(4)!== -1) && (blueArray.indexOf(5)!== -1) && (blueArray.indexOf(6)!== -1)) ||
// 		((blueArray.indexOf(7)!== -1) && (blueArray.indexOf(5)!== -1) && (blueArray.indexOf(3)!== -1)) ||
// 		((blueArray.indexOf(7)!== -1) && (blueArray.indexOf(8)!== -1) && (blueArray.indexOf(9)!== -1)) ||
// 		((blueArray.indexOf(2)!== -1) && (blueArray.indexOf(5)!== -1) && (blueArray.indexOf(8)!== -1)) ||
// 		((blueArray.indexOf(3)!== -1) && (blueArray.indexOf(6)!== -1) && (blueArray.indexOf(9)!== -1)) ||
// 	){}





// all the logic
// win=
// 	1,2,3
// 	1,4,7
// 	1,5,9
// 	4,5,6
// 	7,5,3
// 	7,8,9
// 	2,5,8
// 	3,6,9










