var prev = document.getElementById('prev')
var next = document.getElementById('next')

var progress = document.getElementById('progress')

var len = 350 / 3

let currentStep = 1

prev.addEventListener('click', function(){
    console.log('click prev')
    progress.style.width -= (1/3)
    activeList = document.getElementsByClassName('active')
    stepList = document.getElementsByClassName('step')
    stepList[activeList.length].classList.add('active')
    if(currentStep === 4){
        next.disabled = false
    }
    currentStep--
    if(currentStep === 1){
        prev.disabled = true
    }
})

next.addEventListener('click', function(){
    console.log(currentStep)
    console.log('click next')
    // console.log(window.getComputedStyle(progress).width)
    // console.log(window.getComputedStyle(progress).width)
    progress.style.width = (len + parseInt(window.getComputedStyle(progress).width)).toString() + 'px'
    // console.log(window.getComputedStyle(progress).width)
    activeList = document.getElementsByClassName('active')
    stepList = document.getElementsByClassName('step')
    // console.log(activeList.length)
    stepList[activeList.length].classList.add('active')
    // console.log(activeList.length)
    if(currentStep < 4){
        next.disabled = false
    }else{
        next.disabled = true   
    }
    if(currentStep > 1){
        prev.disabled = false
    }
    currentStep++
    
})