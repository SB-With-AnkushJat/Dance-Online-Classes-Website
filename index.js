console.log(`@Anku_Choudhary`);



const mobileNav = document.querySelector(".mobile-navbar-btn");
const headerEle = document.querySelector(".header");

mobileNav.addEventListener("click", () => {
    headerEle.classList.toggle("active")
});

var signup_link = document.querySelector(".signup-heading");
var login_link = document.querySelector(".login-heading");

var signup_form = document.querySelector(".signup-form");
var login_form = document.querySelector(".login-form");

login_link.addEventListener("click", signup_hide);
signup_link.addEventListener("click", login_hide);

function signup_hide() {
    signup_form.style.display = "none";
    login_form.style.display = "block";
    signup_link.style.background = "#EDEDED";
    login_link.style.background = "#FFFFFF";
}
function login_hide() {
    signup_form.style.display = "block";
    login_form.style.display = "none";
    signup_link.style.background = "#FFFFFF";
    login_link.style.background = "#EDEDED";
}



var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function prev(n) {
    SlideShow(slidePosition += n);
}

//  images controls
function next(n) {
    SlideShow(slidePosition = n);
}





