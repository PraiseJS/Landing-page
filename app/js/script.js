const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');
    
    if(header.classList.contains('open')){ //close hamburger menu
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    }
    else{   //open  hamburger toggle
       header.classList.add('open');
       fadeElems.forEach(function(elemment){
         element.classList.remove('fade-out');
         element.classList.add('fade-in');
       });
       
    };
});