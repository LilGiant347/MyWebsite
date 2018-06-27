$(document).ready(function(){

	var scrollLink = $('.scroll')
	
	//smooth scroll
	scrollLink.click(function(click){
		click.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top -100
		}, 1000);
	})

	//change active navbutton
	$(window).scroll(function(){
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function(){
			
			var sectionOffset = $(this.hash).offset();
			
			if( sectionOffset <= scrollbarLocation ) {
				$(this).parent('').addClass('active');
		        $(this).parent('').siblings().removeClass('active');
			}

		})

	})
})

$(document).ready(function(e){
		var scrollbarLocation1 = $(this).scrollTop();
		var theHeight = $(window).height();
		var theWidth = $(window).width();
		var scrollbarLocation4 = theHeight / 100 * 80 - scrollbarLocation1 * 1.3
		$(".thumb img").css("top", scrollbarLocation4/2+"px");
		$(".thumb img").css("max-width", theWidth/100*50+"px");
		$(".dots-container").css("top", theHeight / 100 * 75 - scrollbarLocation1/2+"px");
		$(window).scroll(function() {
			var scrollbarLocation1 = $(this).scrollTop();
			var theHeight = $(window).height();
			var theWidth = $(window).width();
			var scrollbarLocation2 = theHeight / 100 * 80 - scrollbarLocation1 / 2
			var scrollbarLocation3 = scrollbarLocation1 / theHeight
			var scrollbarLocation4 = theHeight / 100 * 80 - scrollbarLocation1 * 1.3
			$("#top").attr('class', 'sec1, scrolled'+scrollbarLocation1);
			$(".slide-photo").css("height", scrollbarLocation2+"px");
			$(".slide-photo").css("opacity", "1"-scrollbarLocation3);
			$(".thumb img").css("opacity", "0.85"-scrollbarLocation3*2);
			$(".dots-container").css("top", theHeight / 100 * 75 - scrollbarLocation1/2+"px");
			$(".thumb img").css("top", scrollbarLocation4/2+"px")
			$(".thumb img").css("max-width", theWidth/100*50+"px");
	});
})

var hexArray = ['#hexVal','#hexVal','#hexval', '#hexval']
var randomColor = hexArray[Math.floor(Math.random() * hexArray.length)];

$(".card img").css("color",randomColor); //A class selector would work too