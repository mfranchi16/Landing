/*
	author: Mario Franchi
	Web and Distributed Programming
	Fall 2019
	Dice Roller
*/

function Roll1(){
	console.log("Roll 1");
    y = Math.floor(Math.random()*6) + 1;
	document.getElementById("die1").value = y;
	return y;
}

function Roll2(){
	console.log("Roll 2");
	x = Math.floor(Math.random()*6) + 1;
	document.getElementById("die2").value = x;
	return x;
}

function Results(){
	x = Roll2();
    y = Roll1();
	
	x = Number(x);
    y = Number(y);
	
	sum = x+y;
	document.getElementById("sum").value = sum;
	if(sum == 7){
		alert("You rolled a 7. You lose.");
	}
}