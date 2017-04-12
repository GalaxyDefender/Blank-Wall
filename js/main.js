$(document).ready(function() {

  $("#menu").click(function() {
    $(".toggle").toggleClass("hidden-xs");
  });

  $(".toggle a").click(function(e){
    $(".toggle").toggleClass("hidden-xs");
    $(".toggle a.active").removeClass("active");
    $(this).addClass("active");
    e.preventDefault();
  });

});
