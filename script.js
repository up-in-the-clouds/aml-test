//hide mobile menu
//"Navbar Display After Scrolling" by Jasper. https://codepen.io/jasperreyes/pen/KMXBMV
src="https://code.jquery.com/jquery-2.2.4.min.js"
$(document).ready(function() {

  // .scroll() creates an event when the user scrolls
  $(window).scroll(function() {

    // .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
    var scroll = $(window).scrollTop();

    var objectSelect = $('#mobile_header_trigger');

    // .offset() retrieves current position of element relative to document
    var objectPosition = objectSelect.offset().top;

    if (scroll > objectPosition) {
      
      $('nav.navbar').addClass('displayNav');
    } else {
     
      $('nav.navbar').removeClass('displayNav');

    }
  });
});
//close menu after click
//https://mdbootstrap.com/support/general/nav-collapse-on-click-hide-mobile-menu-after-click-on-menu-item/
$(document).on('click','.navbar-collapse.collapse',function(e) {
  if( $(e.target).is('a') ) {
      $(this).collapse('hide');
  }
});


    //active element menu
    // W3Schools : https://www.w3schools.com/howto/howto_js_active_element.asp
      // Get the container element
      var btnContainer = document.getElementById("menu_list");

      // Get all buttons with class="btn" inside the container
      var btns = btnContainer.getElementsByClassName("navigation");

      // Loop through the buttons and add the active class to the current/clicked button
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }
      


//Hamburguer Menu: CodePen/ Hamburger menu - Bootstrap 4 by Andjela 
//https://codepen.io/AndjelaP/pen/rNxBbzR
