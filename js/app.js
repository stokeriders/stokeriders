$( document ).ready(function() {
  $(".logo-large").css("display", "block");
  $(".logo").css("display", "none");

	$(".serve").on("click", function(){
		$("#serivce-link").addClass("active")
	})

	var mainbottom = $('.about-nav-anchor').offset().top + $('.about-nav-anchor').height();

	$(window).on('scroll',function(){

    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
      $('.navbar').addClass('after-header');
      $('.navbar-default').addClass('after-head')
      $(".logo-large").css("display", "none");
      $(".logo").css("display", "block");
    } else {
     $('.navbar').removeClass('after-header')
     $('.navbar-default').removeClass('after-head')
     $(".logo-large").css("display", "block");
     $(".logo").css("display", "none");
   }
 });


});
