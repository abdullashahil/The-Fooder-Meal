const hamburger = document.querySelector('.hamburger')
const navText = document.querySelector('.nav-text')


hamburger.addEventListener('click', ()=>{
    navText.classList.toggle('active')
})