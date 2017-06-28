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

$('.colBord').click(function(){
	console.log("clicked!");
	if(i<9){
		if (i%2==0){
			this.style.backgroundColor = "red";	
		} else {
			this.style.backgroundColor = "blue";
		};
		i+=1;
	}
	console.log(i);
});

console.log($('#one').css('backgroundColor'))

win=1,2,3
	1,4,7
	1,5,9
	4,5,6
	7,8,9
	


