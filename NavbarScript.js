$(window).on('scroll', function(){
	if ($(window).scrollTop()){
		$('nav').addClass('black');
		$('img:first').addClass('black');
	}
	else
	{
		$('nav').removeClass('black')
	}
})

$(document).ready(function(){
	$('.menu').click(function(){
		$('ul').toggleClass('shownav')
		$('nav').toggleClass('fullnav')
		$('i').toggleClass('spin')
	})
})