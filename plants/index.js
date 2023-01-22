
console.log("Mark 75\n" +
             "1. Вёрстка соответствует макету. Ширина экрана 768px +24\n" +
             "2. Вёрстка соответствует макету. Ширина экрана 380px +24\n" +
             "3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки\n" +
             "4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22");

function myFunction(){
    var x = document.getElementById("myDropDown");
    if (x.style.display != "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

window.onclick = function(event) {
    if ((event.target.className == 'nav_line' || event.target.className == 'nav_line_orange') && screen.width < 768){
        document.querySelector('.main_nav').querySelector('ul').classList.toggle('is-active');
        document.querySelector('.hamburger_new').classList.toggle('is-active');
    }
}

window.onload = function () {
    const menu_btn = document.querySelector('.hamburger_new');
    const mobile_menu = document.querySelector('.main_nav').querySelector('ul');
    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}