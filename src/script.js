let menuBtn=document.querySelector(".menu")
let menuList=document.querySelector(".menu-list")
menuBtn.addEventListener("click",showMenu)
function showMenu(){
    menuList.classList.toggle("show")
}