const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    console.log('enter');
    header.classList.toggle("sticky",window.scrollY > 100);
});