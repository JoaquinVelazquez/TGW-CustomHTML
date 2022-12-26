var header = document.querySelector("#header-wrapper");
var header_color = document.querySelector(".nav-fashion-header");
var nav_color = document.querySelector(".menu-desktop");

header.addEventListener('mouseover', function(){
    header_color.classList.add("sin-transparencia");
    nav_color.classList.add("sin-transparencia");
})
header.addEventListener('mouseout', function(){
    header_color.classList.remove("sin-transparencia");
    nav_color.classList.remove("sin-transparencia");
})