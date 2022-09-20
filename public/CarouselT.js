/* REVIEW AREA */
function addClass(element, name) {
  if(element.className.indexOf(name) == -1) {
      element.className += " " + name;
  }
}

function removeClass(element, name){
  var arr;
  arr = element.className.split(" ");

  while(arr.indexOf(name) > -1) {
      arr.splice(arr.indexOf(name), 1);
  }

  element.className = arr.join(" ");
}


var reviewSlideIndex = 0;

function reviewSlideTimer() {
  plusReviewSlides(1);
}

var reviewTimer = setInterval(reviewSlideTimer, 2000);

function plusReviewSlides(n) {
  clearInterval(reviewTimer);
  reviewTimer = setInterval(reviewSlideTimer, 2000);
  showReviewSlides(reviewSlideIndex += n);
}

function showReviewSlides(n) {
  var i;
  var review_slides = document.getElementsByClassName('review-slide');

  if (n > review_slides.length - 3) {
    reviewSlideIndex = 0;
  }

  if (n < 0) {
    reviewSlideIndex = review_slides.length - 3;
  }

  for (i = 0; i < review_slides.length; i++) {
    removeClass(review_slides[i], 'show');
    removeClass(review_slides[i], 'res-show');
    addClass(review_slides[i], 'hide');
  }
  
  removeClass(review_slides[reviewSlideIndex], 'hide');
  addClass(review_slides[reviewSlideIndex], 'res-show');
  removeClass(review_slides[reviewSlideIndex+1], 'hide');
  addClass(review_slides[reviewSlideIndex+1], 'show');
  removeClass(review_slides[reviewSlideIndex+2], 'hide');
  addClass(review_slides[reviewSlideIndex+2], 'show');

}