function nav(){
  var menu = document.querySelector(".menu");
var options = document.querySelector(".links")

var flag = 0;
menu.addEventListener("click",function(){
   if(flag === 0){
     menu.innerHTML = `<i class="ri-close-line"></i>`;
     options.classList.remove('hidden')
     flag = 1;
   }
   else{
    flag =1;
     menu.innerHTML = `<i class="ri-menu-line"></i>`;
     options.classList.add('hidden')
     flag = 0;
   }
})

}
nav()


var tl = gsap.timeline();

function navani(){
  tl.from("nav h1,a",{
    y:-50,
    opacity:0,
    duration:1,
    stagger:0.2
})

tl.from(".images .img1",{
   x:-150,
    opacity:0,
    duration:1,
    rotate:45
})

tl.from(".images .img2",{
    x:-140,
     opacity:0,
     duration:1,
     rotate:55
 })

 tl.from(".images .img3",{
    x:-160,
     opacity:0,
     duration:1,
     rotate:75
 })

 tl.from(".text h1",{
    y:-50,
    opacity:0,
    duartion:0.5,
    stagger:0.3
 })

}
navani()


// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


tl.to(".parda img",{
  width:"100%",
  scrollTrigger:{
    trigger:".parda",
    scroller:".main",
    
    start:"top 0%",
    end:"top -100%",
    scrub:5,
    pin:true
  }
})

function text(){
  var clutter = ""
  document.querySelector(".texta").textContent.split(" ").forEach((cha)=>{
   clutter +=`<span class="inline-block mx-2 ">${cha}</span>`;
    
 })
 document.querySelector(".texta").innerHTML = clutter
 tl.to(".page4 .texta span",{
   color:"#000",
   opacity:"1",
   stagger:2,
    
   scrollTrigger:{
     trigger:".page4",
     scroller:".main",
     start:"top 0%",
     end:"top -100%",
     scrub:3,
     pin:true,
     
   }
 })
}
text();


function textedit(){


var clutter = "";
document.querySelector(".page5 h1").textContent.split("").forEach((car)=>{
  clutter += `<span>${car}<span>`
})
document.querySelector(".page5 h1").innerHTML = clutter

tl.from(".page5 h1 span",{
  y:50,
  opacity:0,
  stagger:0.2,
  duartion:1,
  scrollTrigger:{
    trigger:".page5",
    scroller:".main",
    start:"top 0%",
    end:"top -100%",
    scrub:3,
    pin:true,
   
  }
})
}
textedit()


function page6(){


  var clutter = "";
    document.querySelector(".page6 h1").textContent.split("").forEach((cars)=>{
      clutter += `<span>${cars}</span>`
    })
    document.querySelector(".page6 h1").innerHTML = clutter
  
    
    tl.from(".page6 h1 span",{
      color:"#fff",
      opacity:1,
      stagger:0.4,
      scrollTrigger:{
        trigger:".page6",
        scroller:".main",
        start:"top 0%",
        end:"top -110%",
        scrub:3,
        pin:true
      }
    })
  } 

page6()


var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".page7",
    scroller:".main",
    start:"top 30%",
    end:"top 0%",
    scrub:2,
   stagger:0.3,
  }
})

function page7(){
  tl2.from(".page7 .card1",{
    x:-50,
    opacity:0,
    duration:0.4,
   
  })

  tl2.from(".page7 .card2",{
    x:50,
    opacity:0,
    duration:0.4,
    
  })


  tl2.from(".page7 .card3",{
    x:-50,
    opacity:0,
    duration:0.4,
   
  })

  tl2.from(".page7 .card4",{
    x:50,
    opacity:0,
    duration:0.4,
   
  })
}
page7()

const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});

gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();
