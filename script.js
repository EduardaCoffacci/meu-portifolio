window.onload = function() {
    document.querySelector(".menu_mobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == "flex") {
            document.querySelector(".menu nav ul").style.display = "none";
        } else {
            document.querySelector(".menu nav ul").style.display = "flex";
        }
    });
};



const target = document.querySelectorAll('[data-anime]');
const animationClass= 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4) ;
    target.forEach(function(elemento){
        if((windowTop) > elemento.offsetTop){
            elemento.classList.add(animationClass);
        } else{
            elemento.classList.remove(animationClass);
        }
        
    })
}

animeScroll()
if(target.length){
    window.addEventListener('scroll',function(){
        animeScroll();
    })
}

