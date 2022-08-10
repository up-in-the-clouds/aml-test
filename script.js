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



//Hamburguer Menu: CodePen/ Hamburger menu - Bootstrap 4 by Andjela 
//https://codepen.io/AndjelaP/pen/rNxBbzR

   //scrollspy
//       $('body').scrollspy({ target: '#navbar-example' })
//       $('[data-spy="scroll"]').each(function () {
//   var $spy = $(this).scrollspy('refresh')
// })
      //scroll active
  
// function myFunction() {
//   window.scrollBy(100, 100);
//   alert("pageXOffset: " + window.pageXOffset + ", pageYOffset: " + window.pageYOffset);
// }


//       const sections = document.querySelectorAll("section");
//       const navLi = document.querySelectorAll("nav .menu_container ul li");
//       window.addEventListener("scroll", () => {
//         let current = "";
//         sections.forEach((section) => {
//           const sectionTop = section.offsetTop;
//           const sectionHeight = section.scrollHeight;
//           if (pageYOffset >= sectionTop - sectionHeight / 5) {
//             current = section.getAttribute("id");
//           }
//         });

//         navLi.forEach((li) => {
//           li.classList.remove("active");
//           if (li.classList.contains(current)) {
//             li.classList.add("active");
//           }
//         });
//       });

      //mobile
      // function myFunction(x) {
      //   if (x.matches) { // If media query matches
      // //header display mobile
      // var menuContainer = document.getElementById("menu_block");
      // var mobileHeader = document.getElementById("myDiv");
      // const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      // const menuHeight = document.documentElement.scrollHeight - menuContainer.innerHeight;
      // window.addEventListener('scroll', ()=>{
      //  if(scrollable > 1550){
      //    console.log("HI")
      //   // mobileHeader.style.display=flex

      //   menuHeight.onclick = console.log(menuHeight);
      //   mobileHeader.style.visibility = "visible";
      //  }
      // })
      //   }
      //   // else {
      //   //   document.body.style.backgroundColor = "pink";
      //   // }
      // }

      // var x = window.matchMedia("(max-width: 800px)");
      // myFunction(x); // Call listener function at run time
      // x.addListener(myFunction); // Attach listener function on state changes

      //hide element
      // let textB = btnContainer.getElementsByClassName("text_box");
      // const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      // window.addEventListener('scroll', ()=>{
      //  if(scrollable > 550){
      //   document.getElementById("first").style.color="#cfe6cf"
      //  }
      // })

      //mobile menu collapse
