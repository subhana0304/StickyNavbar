const navbarEl = document.querySelector(".navbar");
const bottomEl = document.querySelector(".bottom-container");

//console.log(navbarEl.offsetHeight);
//console.log(bottomEl.offsetTop);

window.addEventListener("scroll", () =>{
    if(window.scrollY > bottomEl.offsetTop - navbarEl.offsetHeight -50){
        navbarEl.classList.add("active")
    }else{
        navbarEl.classList.remove("active")
    }
})