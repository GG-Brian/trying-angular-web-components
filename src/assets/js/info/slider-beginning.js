var slideIndexB = 1;
showSlidesB(slideIndexB);

// Next/previous controls
function plusSlidesB(n) {
  showSlidesB(slideIndexB += n);
}

// Thumbnail image controls
function currentSlideB(n) {
  showSlidesB(slideIndexB = n);
}

function showSlidesB(n) {
  var iB;
  var slidesB = document.getElementsByClassName("mySlidesB");
  var dotsB = document.getElementsByClassName("dotB");
  if (n > slidesB.length) {slideIndexB = 1}
  if (n < 1) {slideIndexB = slidesB.length}
  for (i = 0; i < slidesB.length; i++) {
      slidesB[i].style.display = "none";
  }
  for (i = 0; i < dotsB.length; i++) {
      dotsB[i].className = dotsB[i].className.replace(" activeB", "");
  }
  slidesB[slideIndexB-1].style.display = "block";
  dotsB[slideIndexB-1].className += " activeB";
}