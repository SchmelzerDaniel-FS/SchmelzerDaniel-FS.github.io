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

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}