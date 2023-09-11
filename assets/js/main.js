// mobile menu items function
const hamburger=document.querySelector(".fa-bars");
const mobileNav=document.querySelector(".list-items");
// onclick open the menu in mobile
hamburger.addEventListener("click",()=>{
 mobileNav.classList.toggle("hamburger-transform")
})

// /slider for customers section

const sliderItems= document.querySelectorAll(".slider-item");

let counter=0;
  const moveSlide =()=>{
    sliderItems.forEach((slides)=>{
        slides.style.transform=`translateX(-${counter*100}%)`;
    })
  }

//   slider controles

const next=document.getElementById("next-btn");
const preview=document.getElementById("previous-btn");

// on click slide to right
next.addEventListener("click",()=>{
    if(counter>4){
        counter=0;
    }
    else{
        counter++
        moveSlide();
    }

})

// on click slide to left
preview.addEventListener("click",()=>{
    if(counter<1){
        counter=0;
    }else{
        counter--
        moveSlide();
    }
})