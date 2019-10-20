/*
	author: Mario Franchi
	Web and Distributed Programming
	Map Mania Version 2
	Fall 2019
*/

var map;

function initMap() {
	var chicago = {lat: 41.878, lng: -87.629}
	map = new google.maps.Map(document.getElementById('map'), {
		center: chicago,
		zoom: 3
	});
	
	hints("The fist city is home to the 2016 World Series Champs. Go cubs go!");
	updateGame();
	
	google.maps.event.addListener(map, 'idle', function() {
		check();
	});

	var zoom = map.getZoom();
}

var loc1 = {lat:41.878, lng:-87.629}; //Chicago
var loc2 = {lat:36.174, lng:-86.767}; //Nashville
var loc3 = {lat:28.538, lng:-81.379}; //Orlando
var loc4 = {lat:36.114, lng:-115.172}; //Las Vegas
var loc5 = {lat:40.440, lng:-79.995}; //Pittsburgh
var loc6 = {lat:41.890, lng:12.492}; //Rome
var loc7 = {lat:25.099, lng:-77.345}; //Nassau
var loc8 = {lat:-33.865, lng:151.209}; //Sydney
var loc9 = {lat:21.315, lng:-157.858}; // Honolulu
var loc10 = {lat:40.730, lng:-73.935}; //New York City

var x = 0;
function updateGame(){
	document.getElementById("score-id").value = x;
	x = x + 1;
	console.log(x);
	if( x == 11){
		alert("You have won the game! Refrsh to play again.");
	}
	return x;
	
}

function hints(hintnum){
	document.getElementById("hint-id").value = " ";
	document.getElementById("hint-id").value = hintnum;
}

var executed = false;
var executed2 = false;
var executed3 = false;
var executed4 = false;
var executed5 = false;
var executed6 = false;
var executed7 = false;
var executed8 = false;
var executed9 = false;
var executed10 = false;
function check(){
	
	var zoom = map.getZoom();
	console.log("Zoom: "+zoom);
	if(map.getBounds().contains(loc1) && zoom >= 8 && !executed){
		hints("The next place is known as the home of the greatest music, Country Music");
		createMarkers(loc1);
		updateGame();
		executed = true;
	}
	if(map.getBounds().contains(loc2) && zoom >= 8 && !executed2){
		hints("The next city is often called the most magical place on earth!");
		createMarkers(loc2);
		updateGame();
		executed2 = true;
	}	
	if(map.getBounds().contains(loc3) && zoom >= 8 && !executed3){
		hints("The next city is often called Sin City!");
		createMarkers(loc3);
		updateGame();
		executed3 = true;
	}
	if(map.getBounds().contains(loc4) && zoom >= 8 && !executed4){
		hints("The next city is home to the NFL's greatest football team, the Steelers!");
		createMarkers(loc4);
		updateGame();
		executed4 = true;
	}
	if(map.getBounds().contains(loc5) && zoom >= 8 && !executed5){
		hints("The next city was once ruled by Julius Caeser!");
		createMarkers(loc5);
		updateGame();
		executed5 = true;
	}
	if(map.getBounds().contains(loc6) && zoom >= 8 && !executed6){
		hints("The next city is Atlantis, the resort! Not the real Atlantis.");
		createMarkers(loc6);
		updateGame();
		executed6 = true;
	}
	if(map.getBounds().contains(loc7) && zoom >= 8 && !executed7){
		hints("The next city is a great place to surf and its close to the outback! Its also the captial of Australia.");
		createMarkers(loc7);
		updateGame();
		executed7 = true;
	}
	if(map.getBounds().contains(loc8) && zoom >= 8 && !executed8){
		hints("The next city is the capital of Hawaii!");
		createMarkers(loc8);
		updateGame();
		executed8 = true;
	}
	if(map.getBounds().contains(loc9) && zoom >= 8 && !executed9){
		hints("The next city is the city that never sleeps!");
		createMarkers(loc9);
		updateGame();
		executed9 = true;
	}
	if(map.getBounds().contains(loc10) && zoom >= 8 && !executed10){
		createMarkers(loc10);
		updateGame();
		executed10 = true;
	}
}

function createMarkers(loc){
	var marker = new google.maps.Marker({
		position: loc,
		map:map,
		icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	});
}

function disappear(){
	document.getElementById("dis").style.visibility = "hidden";
}

function disappear2(){
	document.getElementById("dis2").style.visibility = "hidden";
}

function cheat(){
	createMarkers(loc1);
	createMarkers(loc2);
	createMarkers(loc3);
	createMarkers(loc4);
	createMarkers(loc5);
	createMarkers(loc6);
	createMarkers(loc7);
	createMarkers(loc8);
	createMarkers(loc9);
	createMarkers(loc10);
	document.getElementById("score-id").value = 10;
	alert("You cheated, but you win anyway. Refresh to actually play the game.");
}