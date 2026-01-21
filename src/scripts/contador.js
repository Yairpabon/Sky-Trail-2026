const iniciarContador = () => {
    const contenedor = document.querySelector("#cuenta-atras");
    if (!contenedor) return;

    const fechaObjetivo = contenedor.dataset.fecha;
    const msFecha = new Date(fechaObjetivo).getTime();

    const parrafoDias = document.querySelector("#days");
    const parrafoHoras = document.querySelector("#hours");
    const parrafoMinutos = document.querySelector("#minutes");
    const parrafoSegundos = document.querySelector("#seconds");
    const spanTextoFecha = document.querySelector("#fecha-texto");

    // Mostrar fecha formateada opcional
    if (spanTextoFecha) {
        spanTextoFecha.innerText = new Date(fechaObjetivo).toLocaleDateString();
    }

    function actualizarContador() {
        const ahora = new Date().getTime();
        const distancia = msFecha - ahora;

        if (distancia <= 0) {
            clearInterval(intervalo);
            contenedor.innerHTML = "<p class='number'>¡EL EVENTO HA COMENZADO!</p>";
            return;
        }

        // Cálculos
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        // Renderizado con padStart para estética (01, 02...)
        if (parrafoDias) parrafoDias.innerText = dias;
        if (parrafoHoras) parrafoHoras.innerText = horas.toString().padStart(2, "0");
        if (parrafoMinutos) parrafoMinutos.innerText = minutos.toString().padStart(2, "0");
        if (parrafoSegundos) parrafoSegundos.innerText = segundos.toString().padStart(2, "0");
    }

    actualizarContador();
    const intervalo = setInterval(actualizarContador, 1000);
};

// Funciona con cargas normales y con ViewTransitions de Astro
document.addEventListener("DOMContentLoaded", iniciarContador);
document.addEventListener("astro:page-load", iniciarContador);

