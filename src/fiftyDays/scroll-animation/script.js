console.log('------')
// const boxes1 = document.getElementsByClassName('box')
const boxes = document.querySelectorAll('.box')
// console.log(boxes)
var triggerTop = window.innerHeight * 3 / 4
// const t = document.querySelector('.box :nth-child(1)')
console.log(window.innerHeight)
console.log(triggerTop)

window.addEventListener('scroll', function(){
    checkBoxes()
})

window.onload = ()=>{
    checkBoxes()
}

function checkBoxes(){
    boxes.forEach(box=>{
        if (box.getBoundingClientRect().top < triggerTop){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}

