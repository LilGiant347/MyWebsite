$(document).ready(function(){
		
	function disableselect(e){
	return false
	}
	function reEnable(){
	return true
	}
	document.onselectstart=new Function ("return false")
	if (window.sidebar){
	document.onmousedown=disableselect
	document.onclick=reEnable
	}

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
		$(window).scroll(function() {
			var scrollbarLocation1 = $(this).scrollTop();
			var theHeight = $(window).height();
			var scrollbarLocation3 = scrollbarLocation1 / theHeight
			$(".slide-photo").css("opacity", "1"-scrollbarLocation3);
			$(".thumb img").css("opacity", "0.85"-scrollbarLocation3*2);
	});
})
