$(document).ready(function(){
	$('.burger').on('click', function(){
		$(this).toggleClass('active');
		$('.header__menu').toggleClass('active');
	});



  $('.slider-shoes').slick({
    dots: true,
  });
});