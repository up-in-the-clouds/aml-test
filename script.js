//active element menu
// Get the container element
var btnContainer = document.getElementById("menu_container");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("navigation");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "250px";
//   } else {
//     document.getElementById("navbar").style.top = "0";
//   }
//   prevScrollpos = currentScrollPos;
// }