// SEÇÃO JAVASCRIPT

//Seleção de X-Men favorito.
const xMenFavorite = document.querySelector("#question input")
const submitBtn = document.querySelector("#question button")
console.log(xMenFavorite.value)
submitBtn.addEventListener("click", () => {
    const favorite = xMenFavorite.value.trim().toLowerCase();
    if (favorite != "ciclope") {
        alert(`Seu X-Men favorito é: ${favorite}? Que legal! Mas essa página é dedicada ao Ciclope, mas deve ter alguma página de ${favorite} por aí!!`);
    } else {
        alert("Essa página é dedicada ao Ciclope, então você veio ao lugar certo!");
    }
});
// Rodapé de imagens da galeria 

const images = document.querySelectorAll('.image-container img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

showImage(currentIndex);

let intervalId = setInterval(nextImage, 4000);
let pausado = false;

const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');
const pauseButton = document.querySelector('.pause-button');

function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextImage, 4000);
}

nextButton.addEventListener('click', () => {
    nextImage();
    resetInterval();
});

prevButton.addEventListener('click', () => {
    previousImage();
    resetInterval();
});

pauseButton.addEventListener('click', () => {
    if (pausado) {
        intervalId = setInterval(nextImage, 4000);
        pauseButton.textContent = "Pausar";
    } else {
        clearInterval(intervalId);
        pauseButton.textContent = "Continuar";
    }
    pausado = !pausado;
});