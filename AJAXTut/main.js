/*
	Mario Franchi
	JSON and AJAX Tutorial PA 5
	Fall 2019
*/
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
	var myRequest = new XMLHttpRequest();
	myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
	myRequest.onload = function(){
		var ourData = JSON.parse(myRequest.responseText);
		renderHTML(ourData);
	};
	myRequest.send();
	pageCounter++;
	if(pageCounter > 3){
		btn.classList.add("hide-me");
	}
});

function renderHTML(data){
	var htmlString = "";
	
	for(i = 0;i < data.length; i++){
		htmlString += "<p>" + data[i].name + " is a " + data[i].species + ". </p>";
	}
	
	animalContainer.insertAdjacentHTML('beforeend', htmlString)
}