
/*
THIS IS THE GENERAL CODE FOR THE .slideToggle FUNCTION

$("button").click(function(){
  $("p").slideToggle();
});
*/
$(document).ready(function(){
	$("button").click(function(){
		$(".drop-down-content").slideToggle();
	});
});