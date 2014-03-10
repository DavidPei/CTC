$(document).ready(function(){
 //INSERT CODE HERE

 //QUESTION 1
function Dog() {
}

Dog.prototype.bark = function() {
	console.log("woof");
};

function ShibaInu() {
	ShibaInu.prototype.constructor = Dog.prototype.constructor;
}

ShibaInu.prototype.bark = function() {
	console.log("much wow very javascript");
};

 //QUESTION 3
$(".secondbutton").click(function() {
	$(".secondheading").html("<h1 class='secondheading'>Komodo Dragons are the best.</h1>");
	$(".secondheading").css('color', 'turquoise');
});

 //QUESTION 4
$("#hipsterbutton").click(function() {
	$("#hipcat").css('-webkit-filter', 'blur(10px)');
});

 //QUESTION 5
$(".button").click(function() {
	$(".wheel").css('-webkit-animation-play-state', 'running');
 	$("#wheel1").css('-webkit-animation-play-state', 'running');
 	$("#wheel2").css('-webkit-animation-play-state', 'running');
}); 
 //QUESTION 6

 $(".nyancat").animate({
  	left: "+=1609"
  	//Animation complete.
  	}, 5000, function() {}
  	);

  $(".rainbows").animate({
  	left: "0",
  	width: "+=1609"
  }, 5000, function() {}
  );

//ending braces
});