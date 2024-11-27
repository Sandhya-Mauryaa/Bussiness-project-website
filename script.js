const typed = new Typed(".auto-type", {
    strings: ["Market","Easier"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})
const scroll = new LocomotiveScroll({
    el: document.querySelector(' #main'),
    smooth: true
});
function page4Animation(){
    
    var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage =`url(${image})`
    })
})

}

function swiperAnimation(){ var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
}
swiperAnimation()
page4Animation()