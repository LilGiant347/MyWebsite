var slideIndex = 0;

function plusSlides(n) {
  showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}

$(document).ready(function(){
    //Slideshow photoslide what ever
    showSlides();
    showSlides2(slideIndex);
    // Next/previous controls

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 3500);
        if (slideIndex === 2) {
            $("nav ul li a").removeClass('blackback');
        }
        else {
            $("nav ul li a").addClass('blackback');
        }
    }

})
