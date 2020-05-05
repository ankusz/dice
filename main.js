// const preloaderEl = document.querySelector('#preloader');

// setTimeout(function () {
//     preloaderEl.classList.add('preloader-hiding');
//     preloaderEl.addEventListener('transitionend', function () {
//         this.classList.add('preloader-hidden');
//         this.classList.remove('preloader-hiding');
//     })
// }, 1000)

const cubeNumbers = [1, 2, 3, 4, 5, 6];
const cube = document.querySelector('.cube');
const div = document.querySelector('.number');

// var myVar;

// function myFunction() {
//     myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("myDiv").style.display = "block";
// }

// const result = (e) => {
// e.preventDefault();

// message.textContent = advice;

// const preloaderEl = document.querySelector('#preloader');
// const container = document.querySelector('.container');

// setTimeout(function () {
//     const loader = document.createElement('div');
//     loader.id = "Preloader";
//     container.appendChild(loader);
//     // preloaderEl.style.display = 'block';
//     preloaderEl.classList.add('preloader.preloader-hiding');
//     preloaderEl.addEventListener('transitionend', function () {
//         this.classList.add('preloader-hidden');
//         this.classList.remove('preloader-hiding');
//     })
// }, 3000)

// const index = Math.floor(Math.random() * cubeNumbers.length);
// div.textContent = cubeNumbers[index];


// window.setTimeout(result, 2000);

// }

function result() {
    div.style.backgroundColor = "#007bff";
    div.style.color = "#007bff";
    setTimeout(function () {
        const index = Math.floor(Math.random() * cubeNumbers.length);
        div.textContent = cubeNumbers[index];
        div.style.backgroundColor = "white";

    }, 1500);
}
// setTimeout(result) 
// const index = Math.floor(Math.random() * cubeNumbers.length);
// div.textContent = cubeNumbers[index];




cube.addEventListener('click', result);