const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero__container");
let lastScroll = 0;

const showHeader = () => {
    header.classList.add("down");
    nav.classList.add("down");
    hero.classList.add("up")
};

const hideHeader = () => {
    header.classList.remove("down")
    nav.classList.remove("down")
    hero.classList.remove("up")
};

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    //Show scroll up
    if(currentScroll > 200 && lastScroll > currentScroll + 10){
        showHeader();
    }
    //Hide scroll down
    if(currentScroll > lastScroll && currentScroll > 100){
       hideHeader();
    }
    //RESET HEADER WHEN BACK TO TOP FOR SIDEMENU FUNCTIONAILITY 
    if(currentScroll === 0){
        hideHeader();
    }

    lastScroll = currentScroll;
})
