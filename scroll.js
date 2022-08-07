src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"
src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"
  

// init controller
var controller = new ScrollMagic.Controller({
//   globalSceneOptions: { triggerHook: 0.31 },
});

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
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#who",  duration: whoHeight, triggerHook: 0.3 })
  .setClassToggle("#menu_3", "active") // add class toggle
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#contact", duration:$("#contact").height(), triggerHook: 0.31 })
  .setClassToggle("#menu_4", "active") // add class toggle
// xs // add indicators (requires plugin)
  .addTo(controller);
//hide text
  new ScrollMagic.Scene({ triggerElement: "#service", duration: $("#service").height() , triggerHook: 0.3 })
  .setClassToggle("#first", "hide") // add class toggle
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#who",  duration:$("#who").height(), triggerHook: 0.30 })
  .setClassToggle("#second", "hide") // add class toggle
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#contact", duration:"71.5%", triggerHook: 0.31 })
  .setClassToggle("#third", "hide") // add class toggle
//   .addIndicators() // add indicators (requires plugin)
  .addTo(controller);



  // get the current scroll offset for the start and end of the scene.
// var start = scene.scrollOffset();
// var end = scene.scrollOffset() + scene.duration();
// console.log("the scene starts at", start, "and ends at", end);

// get the current triggerElement
// var triggerElement = scene.triggerElement();

// set a new triggerElement using a selector
// scene.triggerElement("#trigger");
// set a new triggerElement using a DOM object
// scene.triggerElement(document.getElementById("logo_img"));
