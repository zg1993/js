var prev = document.getElementById('prev')
var next = document.getElementById('next')

var progress = document.getElementById('progress')

var activeList = document.getElementsByClassName('active')

var stepList = document.getElementsByClassName('step')

var len = 350 / 3

let currentStep = 1

prev.addEventListener('click', function(){
    // console.log('click prev')
    var length_ = parseInt(window.getComputedStyle(progress).width) - len 
    var length = length_ > 0 ? length_ : 0
    progress.style.width = length.toString() + 'px'
    // console.log(window.getComputedStyle(progress).width)
    stepList[currentStep - 1].classList.remove('active')
    currentStep--
    updated()

})

next.addEventListener('click', function(){
    // console.log('click next')
    progress.style.width = (len + parseInt(window.getComputedStyle(progress).width)).toString() + 'px'
    currentStep++
    stepList[currentStep - 1].classList.add('active')
    updated()
})

function updated() {
    // console.log(activeList.length)
    if(activeList.length > 1){
        prev.disabled = false
    }else{
        prev.disabled = true
    }

    if(activeList.length===4){
        next.disabled = true
    }else{
        next.disabled = false
    }

}