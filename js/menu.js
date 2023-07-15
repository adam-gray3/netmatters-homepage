const menuBtn = document.querySelector(".hamburger-menu");
const body = document.querySelector("body");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".mobile-nav-overlay");

const navItems = new Array(menuBtn, body, mobileNav, overlay);


menuBtn.addEventListener("click", () => {
    navItems.forEach(item => {
        item.classList.add("active")
    })
})

body.addEventListener("click", (e) => {
   if(e.target.classList.contains("mobile-nav-overlay")){
        navItems.forEach(item => {
            item.classList.remove("active")
        })
   }
})

