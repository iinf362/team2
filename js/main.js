
/*
THIS IS THE GENERAL CODE FOR THE .slideToggle FUNCTION

$("button").click(function(){
  $("p").slideToggle();
});
*/
var test = 23;
$(document).ready(function(){
	$(".drop-down-content").hide();
	$(".drop-down").click(function(){
		$(".drop-down-content").show();
	});
});