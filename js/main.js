//variable

let nav = document.getElementById('nav');
let nav = document.getElementById('enlaces')

function menus(){
    let Desplazamiento_actual = window.pageYOffset;

    if(Desplazamiento_actual <= 300){
        nav.classList.remove('nav2');
        nav.classList = ('nav1');
        nav.style.transition = '1s';
    }else{
        nav.classList.remove('nav1');
        nav.classList = ('nav2');
        nav.style.transition = '1s';
    }
}

window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
});