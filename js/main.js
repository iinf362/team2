
/*
THIS IS THE GENERAL CODE FOR THE .slideToggle FUNCTION

$("button").click(function(){
  $("p").slideToggle();
});
*/
var test = 23;
$(document).ready(function(){
	$("p").hide();
	$("button").onclick(function(){
		$("button").next().show();
	});
});