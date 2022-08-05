
const imgList = document.querySelectorAll('.img')
imgList.forEach(img=>{
    img.addEventListener('click', function(){
        removeAllActiveClass()
        img.classList.add('active')
    })
})

function removeAllActiveClass(){
    imgList.forEach(img=>{
        img.classList.remove('active')
    })
}