window.onscroll = function(){mainMenu()}

var menu = document.getElementById("nav")
var stickyMenu = menu.offsetTop;

function mainMenu(){ 
    if(window.pageYOffset > stickyMenu){
        menu.classList.add("sticky-menu")
    }
    else{
        menu.classList.remove("sticky-menu")
    }
}

const burgerMenu = function(){
    let burger = document.querySelector(".burger")
    let menu = document.getElementById("mainMenu")

    burger.addEventListener('click', ()=>{
        menu.classList.toggle('menu-active')
    })
}
burgerMenu()

