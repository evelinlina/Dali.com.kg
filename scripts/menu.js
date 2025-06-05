

let btn = document.querySelector('.mdi')
let menu = document.querySelector('#navbarSupportedContent')

// navbarSupportedContent
btn.addEventListener('click', function(){
    btn.classList.toggle('mdi_close')
    menu.classList.toggle('collapse')
})
 


