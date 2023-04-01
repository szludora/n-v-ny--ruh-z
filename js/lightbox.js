function openModal() {
  $("#myModal").css("display", "block")
}

function closeModal() {
  $("#myModal").css("display", "none")
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = $(".mySlides");
  var dots = $(".demo");
  var captionText = $("#caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
 
    slides.css("display","none");
    dots.removeClass("active");
  
  slides.eq(slideIndex - 1).css("display", "block");
  dots.eq(slideIndex - 1).addClass("active");


  captionText.html(dots.eq(slideIndex - 1).attr("alt"));
}
