document.addEventListener('DOMContentLoaded', function () {
    const btnocultar = document.querySelector('.btn-ocultar'); // Selecciona el botón por su clase

    // Simula un clic en el botón cuando la página se carga
    btnocultar.click();
});

//boton
document.addEventListener('DOMContentLoaded', f => {
    const mostrarBtn = document.querySelector('.btn-ver');
    const ocultarBtn = document.querySelector('.btn-ocultar');
    const textos = document.querySelectorAll('.texto');

    mostrarBtn.addEventListener('click', function () {
        textos.forEach(function (texto) {
            texto.style.maxHeight = '2400px';
        });
        ocultarBtn.style.display = 'block';
        mostrarBtn.style.display = 'none';
    });

    ocultarBtn.addEventListener('click', function () {
        textos.forEach(function (texto) {
            texto.style.maxHeight = '0'; 
        });
        ocultarBtn.style.display = 'none';
        mostrarBtn.style.display = 'block';
    });
});

//recetas
document.addEventListener('DOMContentLoaded', f => {
const sessionIpa = document.querySelector('.sessionIpa');
const Amber = document.querySelector('.Amber');
const Munich = document.querySelector('.Munich');
const Kolsch = document.querySelector('.Kolsch');
const Stout = document.querySelector('.Stout');

const btnSessionIpa = document.querySelector('.btnSessionIpa');
const btnAmber= document.querySelector('.btnAmber');
const btnDunke = document.querySelector('.btnDunke');
const btnKolsch = document.querySelector('.btnKolsch');
const btnStout = document.querySelector('.btnStout');

btnSessionIpa.addEventListener('click', f => {
    sessionIpa.style.display = 'block',
    Amber.style.display = 'none',
    Munich.style.display = 'none',
    Kolsch.style.display = 'none',
    Stout.style.display = 'none'
});
btnAmber.addEventListener('click', f => {
    sessionIpa.style.display = 'none',
    Amber.style.display = 'block',
    Munich.style.display = 'none',
    Kolsch.style.display = 'none',
    Stout.style.display = 'none'
});
btnDunke.addEventListener('click', f => {
    sessionIpa.style.display = 'none',
    Amber.style.display = 'none',
    Munich.style.display = 'block',
    Kolsch.style.display = 'none',
    Stout.style.display = 'none'
});
btnKolsch.addEventListener('click', f => {
    sessionIpa.style.display = 'none',
    Amber.style.display = 'none',
    Munich.style.display = 'none',
    Kolsch.style.display = 'block',
    Stout.style.display = 'none'
});
btnStout.addEventListener('click', f => {
    sessionIpa.style.display = 'none',
    Amber.style.display = 'none',
    Munich.style.display = 'none',
    Kolsch.style.display = 'none',
    Stout.style.display = 'block'
});
});
