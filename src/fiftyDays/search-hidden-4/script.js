
var searchList = document.getElementsByClassName('active')
var search = document.getElementById('search')
var btn = document.getElementById('btn')
const input = document.querySelector('input')

btn.addEventListener('click', function() {
    
    if(!searchList.length){
        search.classList.add('active')
    }else{
        search.classList.remove('active')
    }
    input.focus()
})