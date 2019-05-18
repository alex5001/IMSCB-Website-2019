    
var slideIndex = 0,
    t;
carousel();

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";  
}

function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "flex";
    t = setTimeout(carousel, 10000); // Change image every 5 seconds
}

function plusDivs(n) {
    showDivs(slideIndex += n);
    clearTimeout(t);
    t = setTimeout(carousel, 15000);
}
