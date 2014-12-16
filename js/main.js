
/*
THIS IS THE GENERAL CODE FOR THE .slideToggle FUNCTION

$("button").click(function(){
  $("p").slideToggle();
});
*/
$(document).ready(function(){
	$("#what-is-an-eviction").onclick(function(){
		$("what-is-an-eviction-content").slideToggle();
	});
});