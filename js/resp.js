burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-List')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    nav-list.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})