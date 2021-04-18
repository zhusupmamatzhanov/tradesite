// Слайдры

$('.banner').slick({
	adaptiveHeight: true,
	speed: 1000,
	dots: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	fade: true,
	autoplaySpeed: 5000
});

// Адаптивное меню

$(document).ready(function() { 
	var touch  = $('.menu_toggle');
	var menu  = $('.header_menu');
			  
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
});

$(document).ready(function() {
	$('.menu_toggle').on('click', function (ev) {
	  ev.preventDefault();
	  if ($('.menu_toggle').hasClass('active')) {
	    $('.menu_toggle').removeClass('active');
	  } else {
	    $('.menu_toggle').addClass('active');
	  }
	});
});

// Плавный скролл навигации

$(document).ready(function(){
    $("body").on('click', '[href*="#"]', function(e){
		var fixed_offset = 100;
		$('html, body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});
});


// Поп-ап

$(".pop_up").click(function(e){
		e.preventDefault();
	$("#pop_up").fadeIn('normal');
	$("#popup_bg").fadeIn('normal');
});

$(".close").click(function(e){
		e.preventDefault();
	$("#pop_up").fadeOut('normal');
	$("#popup_bg").fadeOut('normal');
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
    });
      
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

$(document).on("scroll",function(){
	if($(document).scrollTop()>200){ 
		$("header").removeClass("large").addClass("small");
		}
	else{
		$("header").removeClass("small").addClass("large");
		}
});