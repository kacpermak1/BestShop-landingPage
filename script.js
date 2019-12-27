const button_mobile = document.querySelector('.button_mobile');
const menuList = document.querySelector('.page-nav-list');
const button_close = document.querySelector('.button_close');

button_mobile.addEventListener('click', function(){
    menuList.style.display = "flex";
    button_mobile.style.display = "none";
    button_close.style.display = "block"
});

button_close.addEventListener('click', function(){
    menuList.style.display = "none";
    button_mobile.style.display = "flex";
    button_close.style.display = "none"
});