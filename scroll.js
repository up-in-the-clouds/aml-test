//Class toggles
//ScrollMagic library https://scrollmagic.io/examples/basic/class_toggles.html
src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"

src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"


  

// init controller
var controller = new ScrollMagic.Controller({
//   globalSceneOptions: { triggerHook: 0.31 },
});

//responsive duration: https://stackoverflow.com/questions/39268491/scrollmagic-duration
const serviHeight = $("#service").height()-20
const homeHeight = $("#home").height()-20
const whoHeight = $("#who").height()-20

// build scenes
var scene = new ScrollMagic.Scene({ triggerElement: "#home", duration: homeHeight, triggerHook:0.25 })
  .setClassToggle("#menu_1", "active") // add class toggle
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#service", duration: serviHeight  , triggerHook: 0.3})
  .setClassToggle("#menu_2", "active") // add class toggle
 // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#who",  duration: whoHeight, triggerHook: 0.3 })
  .setClassToggle("#menu_3", "active") // add class toggle
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#contact", duration:$("#contact").height(), triggerHook: 0.31 })
  .setClassToggle("#menu_4", "active") // add class toggle
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controller);

//hide text
  new ScrollMagic.Scene({ triggerElement: "#service", duration: $("#service").height() , triggerHook: 0.31 })
  .setClassToggle("#first", "hide") // add class toggle
 // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#who",  duration:$("#who").height(), triggerHook: 0.31 })
  .setClassToggle("#second", "hide") // add class toggle
 // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#contact", duration:"71.5%", triggerHook: 0.31 })
  .setClassToggle("#third", "hide") // add class toggle
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controller);


