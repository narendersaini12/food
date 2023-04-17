let searchform=document.querySelector(".search-form")
document.querySelector("#search-btn").onclick=()=>{
    searchform.classList.toggle("active")
    cart.classList.remove("active")
    form.classList.remove("active")
    menu.classList.remove("active")
}


let cart=document.querySelector(".shopping-cart")
document.querySelector("#cart-btn").onclick=()=>{
    cart.classList.toggle("active")
    form.classList.remove("active")
    menu.classList.remove("active")
    searchform.classList.remove("active")
}


let form=document.querySelector(".login")
document.querySelector("#login-btn").onclick=()=>{
    form.classList.toggle("active")
    menu.classList.remove("active")
    searchform.classList.remove("active")
    cart.classList.remove("active")

}
let menu=document.querySelector(".navbar")
document.querySelector("#menu-btn").onclick=()=>{
    menu.classList.toggle("active")
    searchform.classList.remove("active")
    cart.classList.remove("active")
    form.classList.remove("active")

}
window.onscroll=()=>{
    searchform.classList.remove("active")
    cart.classList.remove("active")
    form.classList.remove("active")
    menu.classList.remove("active")
}
var swiper = new Swiper(".product-slider",{
    slidesPerView: 1,
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        desableOnInteraction:false,
    
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
       
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
});

var swiper = new Swiper(".review-slider",{
  slidesPerView: 1,
  loop:true,
  spaceBetween: 20,
  autoplay:{
      delay:7500,
      desableOnInteraction:false,
  
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
     
    },
    1020: {
      slidesPerView: 3,
      
    },
  },
});

