const formulario = document.getElementById("miFormulario");
const lista = document.getElementById("listaMensajes");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || mensaje === "") {
        alert("Por favor completa todos los campos");
        return;
    }

    // Crear contenedor del mensaje
    const div = document.createElement("div");
    div.classList.add("mensaje");

    // Obtener fecha actual
    const fecha = new Date().toLocaleString();

    div.innerHTML = `
        <h3>${nombre}</h3>
        <p>${mensaje}</p>
        <small>${fecha}</small>
    `;

    lista.appendChild(div);

    // Cambiar color de fondo aleatorio
    const colores = ["#f0f8ff", "#ffe4e1", "#e6ffe6", "#fffacd"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;

    formulario.reset();
});