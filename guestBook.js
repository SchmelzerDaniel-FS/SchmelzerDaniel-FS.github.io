var x = 1;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 if (array[x] == ""){
     alert("Do not leave this blank!", "")
 }else if (array[x]!= ""){
 alert("Thank you " + array[x] + ". You have been added the Guest Book");
 x++;
 document.getElementById("text1").value = "";
 }
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=1; y<array.length; y++)
   {
     e += "Guest " + y + ": " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}

var modal = document.getElementById("bookModal");
var btn = document.getElementById("openBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

mybutton = document.getElementById("toTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("historicalSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}