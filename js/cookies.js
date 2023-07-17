const btn = document.querySelector(".consent-btn");
const settingsBtn = document.querySelector(".settings");
const settingsPage = document.querySelector(".change-settings-wrapper");
const page = document.querySelector("body");
const popup = document.querySelector(".cookie-popup");
const wrapper = document.querySelector(".cookie-wrapper");
const cancelBtn = document.querySelector(".cancel");
const acceptBtn = document.querySelector(".accept");
const site = document.querySelector(".site");
const popups = new Array(popup, wrapper);


//OPEN MODAL
btn.addEventListener("click", () => {
    popups.forEach(popup => {
        popup.classList.add("active")
    })
    page.style.overflow = "hidden";
});

//OPEN SETTINGS PAGE
settingsBtn.addEventListener("click", () => {
    settingsPage.classList.add("active")
    settingsPage.style.overflow = "auto";
});

//CLOSE SETTINGS PAGE
cancelBtn.addEventListener("click", () => {
    settingsPage.classList.remove("active")
});

//ACCEPT COOKIES
acceptBtn.addEventListener("click", () => {
    popups.forEach(popup => {
        popup.classList.remove("active")
    })
     page.style.overflow = "auto";
    setCookie("cookie", true, 30)
});

//BACK TP HOMEPAGE FROM SETTINGS
site.addEventListener("click", () => {
    window.location.href = "index.html"
});

const setCookie = (name, value, expire) => {
    let date = new Date();
    date.setTime(date.getTime() + (expire * 24 * 60 * 60 * 1000));
    const expiration = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expiration};path=/`;
};

const getCookie = (name) => {
    const cookieName = name + "=";
    const decoded = decodeURIComponent(document.cookie);
    const cookieArr = decoded.split("; ");
    let value;
    cookieArr.forEach(item => {
        if(item.indexOf(cookieName) === 0){
            value = item.substring(cookieName.length);
        }
    })
    return value;
};


const cookieMsg = () => {
    if(!getCookie("cookie")){
        popups.forEach(popup => {
            popup.classList.add("active")
        })
        page.style.overflow = "hidden";
    }
}

//Check for cookie on page load
window.addEventListener("load", () => {
    cookieMsg()
});
