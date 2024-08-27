const productos = [
    {
        nombre: "Perfume de Ariana Grande",
        id: "pdag",
        precio: 1500.00,
        cantidad: 5,
        imagen: "https://acortar.link/perfume_de_ariana", // Ruta de la imagen local
    },
    {
        nombre: "Vestido largo de Van Gogh",
        id: "vldvg",
        precio: 250.00,
        cantidad: 0,
        imagen: "https://acortar.link/vestido_de_van_gogh", // Ruta de la imagen local
    },
    // Agregar más productos aquí
];

function renderCatalogo() {
    const catalogo = document.getElementById("catalogo");
    if (!catalogo) return;
    catalogo.innerHTML = "";  // Limpiar el contenido existente

    productos.forEach(producto => {
        const disponible = producto.cantidad > 0;
        const idProducto = producto.id;
        const productoDiv = document.createElement("div");
        productoDiv.className = "producto";

        productoDiv.innerHTML = `
            <h2>${producto.nombre}</h2>
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <p>ID: ${idProducto}</p>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <p>Cantidad disponible: ${producto.cantidad}</p>
            <p>Disponibilidad: <span class="${disponible ? 'disponible' : 'no-disponible'}">${disponible ? 'Disponible' : 'No disponible. <br><br> Si te interesa, puedes encargarlo.'}</span></p>
            <a href="https://wa.me/527713557223?text=Hola,%20estoy%20interesado%20en%20${producto.nombre}%20(ID:${idProducto})" target="_blank" class="whatsapp-btn">Consultar en WhatsApp</a>
        `;
        catalogo.appendChild(productoDiv);
    });
}

function renderTablaInventario() {
    const tbody = document.querySelector("#tabla-inventario tbody");
    if (!tbody) return;
    tbody.innerHTML = "";  // Limpiar el contenido existente

    productos.forEach(producto => {
        const disponible = producto.cantidad > 0;
        const idProducto = producto.id;

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${idProducto}</td>
            <td>${producto.nombre}</td>
            <td><img src="${producto.imagen}" alt="${producto.nombre}"></td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>${producto.cantidad}</td>
            <td>${disponible ? 'Disponible' : 'No disponible'}</td>
        `;

        tbody.appendChild(fila);
    });
}

// Ejecuta las funciones de renderizado según la página
window.onload = function() {
    renderCatalogo();
    renderTablaInventario();
}