
/*
THIS IS THE GENERAL CODE FOR THE .slideToggle FUNCTION

$("button").click(function(){
  $("p").slideToggle();
});
*/
$(".drop-down-content").hide();
$(".drop-down").click(function(){
	$(".drop-down-content").show();
});