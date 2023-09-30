// Obtener todos los botones y párrafos
const botonesExpandir = document.querySelectorAll('.boton-expandir');

// Agregar un evento de clic a cada botón
botonesExpandir.forEach((boton, index) => {
  boton.addEventListener('click', () => {
    const parrafo = boton.parentElement; // Obtener el párrafo padre del botón
    
    // Alternar la clase "expandido" en el párrafo correspondiente
    parrafo.classList.toggle('expandido');
  });
});






