/* Author: 

*/

var slideIndex = 1;
showSlides(slideIndex);

var vslideIndex = 1;
showvSlides(vslideIndex);

document.getElementsByClassName('previous-i')[0].addEventListener('click', function(){plusSlides(-1)})
document.getElementsByClassName('next-i')[0].addEventListener('click', function(){plusSlides(1)})

document.getElementsByClassName('previous-v')[0].addEventListener('click', function(){plusvSlides(-1)})
document.getElementsByClassName('next-v')[0].addEventListener('click', function(){plusvSlides(1)})


// document.getElementsByClassName('dot').addEventListener('click', function(){
//   console.log(this.parentElement.nodeName)
// })

var g = document.getElementsByClassName('g-links')[0];
for (var i = 0, len = g.children.length; i < len; i++)
{
    (function(index){
        g.children[i].onclick = function(){
              currentSlide(index+1)  ;
        }    
    })(i);
}


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusvSlides(n) {
  showvSlides(vslideIndex += n);
}


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//main slide function

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
  	slideIndex = 1
  }
  if (n < 1) {
  	slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// video slide function

function showvSlides(n) {
  var i;
  var vslides = document.getElementsByClassName("myvSlides");
  if (n > vslides.length) {
  	vslideIndex = 1
  }
  if (n < 1) {
  	vslideIndex = vslides.length
  }
  for (i = 0; i < vslides.length; i++) {
      vslides[i].style.display = "none";
  }
  vslides[vslideIndex-1].style.display = "block";
}























