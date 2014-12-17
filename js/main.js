
/*
THIS IS THE GENERAL CODE FOR THE .slideToggle FUNCTION

$("button").click(function(){
  $("p").slideToggle();
});
*/
var allDrops = $('.drop-down').hide();
$('.drop-down-content').click(function() {
  var wasVisible = $(this).next().is(":visible");
  if (wasVisible != true){
    allDrops.slideUp();
    $(this).next().slideDown();
  }else {
    $(this).next().slideUp();
  }
});