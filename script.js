let navBar = document.querySelector('.menu');

let close = document.querySelector('.close');

let navOpen = document.querySelector('.nav');

let image = document.querySelector('.topImg');

let secondImg = document.querySelector('.secondImg')


navBar.addEventListener('click', () => {
navOpen.classList.add('active');
console.log(navBar);
});

close.addEventListener('click', () => {
    navOpen.classList.remove('active')
});



if (window.innerWidth <= 477) {
  image.src =  secondImg.src;
} else{
  image.src = image.src
}