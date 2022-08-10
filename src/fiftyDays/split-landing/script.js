const left = document.querySelector('.left')
const right = document.querySelector('.right')

const container = document.querySelector('.container')

left.addEventListener('mouseenter', function(){
    console.log('left')
    container.classList.remove('hover-right')
    container.classList.add('hover-left')
})

right.addEventListener('mouseenter', function(){
    console.log('right')
    container.classList.add('hover-right')
    container.classList.remove('hover-left')
})


    
