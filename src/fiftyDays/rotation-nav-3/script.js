const open = document.getElementsByClassName('open')[0]

const close = document.getElementsByClassName('close')[0]

const container = document.getElementsByClassName('container')[0]

open.addEventListener('click', function(){
    container.classList.add('show-nav')
})

close.addEventListener('click', function(){
    container.classList.remove('show-nav')
})