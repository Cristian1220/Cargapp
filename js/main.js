//variable

let nav = document.getElementById('nav');
let nav = document.getElementById('enlace');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

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

function apertura(){
    if(cerrado) {
        menu.style.width = '70vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden'
        cerrado = true;
    }
}
window.addEventListener('load', function(){
    menus();
});
window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
});

abrir.addEventListener('click', function(){
    apertura();
});