

const cubeNumbers = [1, 2, 3, 4, 5, 6];
const cube = document.querySelector('.cube');
const div = document.querySelector('.number');



function result() {
    div.style.backgroundColor = "#007bff";
    div.style.color = "#007bff";
    setTimeout(function () {
        const index = Math.floor(Math.random() * cubeNumbers.length);
        div.textContent = cubeNumbers[index];
        div.style.backgroundColor = "white";

    }, 1500);
}





cube.addEventListener('click', result);
