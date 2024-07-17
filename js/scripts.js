/*//1.rimuovere tutto il markup statico di HTML e inserire tutte le immagini dinamicamente servendoci di un array e un ciclo per far concatenare un template literal. 
le immagini saranno nascoste ,tranne la prima ch avrà una classe specifica che la renderà visibile.
*/
//
const images = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
];

let item = '';

for (let i= 0; i < images.length; i++) {
    item += `<li class="carousel-slide"><img src="./img/${ images[i] }"></div>`;
};

const slides = document.querySelector('.carousel-track').innerHTML = item;

const items = document.getElementsByClassName('carousel-slide');

let item_active = 0;

items[item_active].classList.add('active');

let next = document.querySelector('.carousel-button-right');
console.log('next', next, typeof next);
let prev = document.querySelector('.carousel-button-left');
console.log('prev', prev, typeof prev);

next.addEventListener ('click', function(){
    items[item_active].classList.remove('active');
    
    if ( item_active === images.length-1){
        item_active = 0;
    }
    else{
        item_active++;
    };
    items[item_active].classList.add('active')
});

prev.addEventListener ('click', function(){

    items[item_active].classList.remove('active');

    if(item_active === 0){
        item_active = images.length - 1; 
    }
    else{
        item_active--;
    }
    items[item_active].classList.add('active');
});














//quando premno a destra mi muovo a destra 