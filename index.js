var bienvenida = "Escribe tu hermoso nombre 💖✨: ";
var nombreCorrecto = "JAZMIN"; // Nombre permitido en mayúsculas
var data = prompt(bienvenida);

// Convertir a mayúsculas para comparar sin importar cómo lo escriban
while (data.toUpperCase() !== nombreCorrecto) {
    alert("Así no es el nombre del amor de mi vida 😡💔. Vuelve a intentarlo.");
    data = prompt(bienvenida);
}

// Mostrar el nombre en la página
document.getElementById("data").innerHTML = data.toUpperCase();

const yesBtn = document.querySelector('#yesBtn');

// Acción si acepta
yesBtn.addEventListener('click', function(){
    alert('Siempre supe que aceptarías, Jazmin 💖. Te amo mucho, prometo ser el mejor hombre para ti. 2 AÑOS juntos ❤️'); 
    location.href = 'https://youtu.be/vM6r0Z8ie1g?si=rN4gU43iHqhx42l4';
});

const noBtn = document.querySelector('#noBtn');

// Botón "No" que se mueve
noBtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);

    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});

