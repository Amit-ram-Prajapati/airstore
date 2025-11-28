// fa-bars
// fa-xmark
// navigate

let openMenu = document.querySelector(".fa-bars");
let closeMenu = document.querySelector(".fa-xmark");
openMenu.addEventListener('click',()=>{
    document.querySelector('.navigate').style.display = 'flex'
})
closeMenu.addEventListener('click',()=>{
    document.querySelector('.navigate').style.display = 'none'
})