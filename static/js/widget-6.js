var URLactual = window.location.pathname;
var newsletter = document.querySelector(".contenedor-newsletter");

console.log(URLactual);

if (URLactual !== "/") {
    newsletter.classList.toggle("invisible");
}