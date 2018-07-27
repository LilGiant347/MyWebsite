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
			scrollTop: $(this.hash).offset().top
		}, 500);
	})

	//change active navbutton
	$(window).scroll(function(){
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function(){

			var sectionOffset = $(this.hash).offset().top -20;

			if( sectionOffset <= scrollbarLocation ) {
				$(this).parent().addClass('active');
		        $(this).parent().siblings().removeClass('active');
			}

		})

	})
})
