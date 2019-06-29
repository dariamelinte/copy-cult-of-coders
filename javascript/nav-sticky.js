// Sticky nav

const  navbar = document.querySelector("nav");
let navbarPosition = navbar.offsetTop;

window.onscroll = () =>{
    if(window.pageYOffset > navbarPosition)
        navbar.classList.add("sticky");
    else
        navbar.classList.remove("sticky");

};