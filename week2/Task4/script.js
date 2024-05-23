const menu_open=document.getElementById('menu_open')
const menu_list=document.getElementById('menu_list')
const navbar=document.getElementById('navbar')

menu_open.addEventListener('click',()=>{
    menu_list.classList.toggle("open");

})