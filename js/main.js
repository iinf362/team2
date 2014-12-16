
/*
THIS IS THE GENERAL CODE FOR THE .slideToggle FUNCTION

$("button").click(function(){
  $("p").slideToggle();
});
*/
$(document).ready(function(){
	$("p").hide();
	$("button").onclick(function(){
		$("button").next().show();
	});
});