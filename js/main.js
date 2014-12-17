
/*
THIS IS THE GENERAL CODE FOR THE .slideToggle FUNCTION

$("button").click(function(){
  $("p").slideToggle();
});
*/
$(".drop-down-content").hide();
$("button").click(function(){
	$(".drop-down-content").show();
});