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
o 
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

// Valor da primeira imagem
showImage(currentIndex);

// Tempo para passar até a próxima imagem 
setInterval(nextImage, 3000);;