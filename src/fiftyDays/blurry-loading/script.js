var opacity = 1;
var loading = 0;
const bg = document.querySelector('.image')
const loadingText = document.querySelector('.loading-text')

setInterval(function(){
    if(loading < 100){
        loading += 1
        opacity -= 0.01
        loadingText.innerHTML = `${loading}%`
        loadingText.style.opacity = opacity;
        
    }else{
        clearInterval()
    }
}, 30);