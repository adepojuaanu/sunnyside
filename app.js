const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navigation__links');

// hamburger.addEventListener('click', () => {
//     if (navLinks.style.display === 'flex') {
//         navLinks.style.display = 'none'
//     }else{
//         navLinks.style.display = 'flex'
//     }
// })

hamburger.addEventListener('click', () => {
    if (navLinks.style.transform === 'ScaleY(1)') {
        navLinks.style.transform = 'scaleY(0)'
    }else{
        navLinks.style.transform = 'scaleY(1)'
    }
})