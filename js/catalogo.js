// 1. Base de datos de productos (Simulada en un Array)
const productos = [
    {
        id: 1,
        nombre: "Batería Osonix OBS1285HR 12V, 85W/CELL 15 MIN",
        categoria: "Baterías",
        imagen: "assets/images/osonix/baterias/K6A4293.png", // Asegúrate de tener estas imágenes
        descripcion: "Aplicaciones: UPS, Telecomunicaciones, Equipos Médicos, Sistemas de Seguridad, Equipos Industriales.",
        nuevo: true // Este tiene la etiqueta "Nuevo"
    },
    {
        id: 2,
        nombre: "Inversor Híbrido 5kW",
        categoria: "Inversores",
        imagen: "ruta/inversor5kw.jpg",
        descripcion: "Gestión inteligente con monitoreo WiFi.",
        nuevo: false
    },
    {
        id: 3,
        nombre: "Batería de Litio 48V",
        categoria: "Baterías",
        imagen: "ruta/bateria.jpg",
        descripcion: "Almacenamiento seguro de larga duración.",
        nuevo: false
    },
    {
        id: 4,
        nombre: "Estructura de Montaje (Aluminio)",
        categoria: "Estructuras",
        imagen: "ruta/estructura.jpg",
        descripcion: "Soporte ligero y resistente a la corrosión.",
        nuevo: false
    },
    {
        id: 5,
        nombre: "UPS 1000VA",
        categoria: "UPS",
        imagen: "ruta/ups1000va.jpg",
        descripcion: "Sistema de energía ininterrumpida para equipos sensibles.",
        nuevo: true
    }
];

// 2. Función para pintar los productos en el HTML
const contenedor = document.getElementById('contenedor-productos');

// 2. Función Principal: Cargar productos con filtro
function cargarProductos(filtro = 'Todos') {
    // Limpiar contenedor
    contenedor.innerHTML = '';

    // Filtrar el array
    const productosAVisualizar = filtro === 'Todos' 
        ? productos 
        : productos.filter(p => p.categoria === filtro);

    // Si no hay productos en esa categoría
    if (productosAVisualizar.length === 0) {
        contenedor.innerHTML = '<div class="col-span-full text-center text-gray-500 py-10">No se encontraron productos en esta categoría.</div>';
        return;
    }

    // Dibujar las tarjetas
    productosAVisualizar.forEach(producto => {
        const tarjeta = `
            <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col">
                <div class="relative h-48 bg-gray-100 flex items-center justify-center">
                    ${producto.nuevo ? '<span class="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">Nuevo</span>' : ''}
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="max-h-full max-w-full object-contain p-4">
                </div>
                <div class="p-4 flex flex-col flex-grow">
                    <span class="text-xs text-gray-500 uppercase tracking-wide mb-1">${producto.categoria}</span>
                    <h4 class="text-lg font-bold text-blue-900 mb-2">${producto.nombre}</h4>
                    <p class="text-sm text-gray-600 mb-4 flex-grow">${producto.descripcion}</p>
                    
                    <button onclick="cotizar('${producto.nombre}')" 
                        class="w-full border-2 border-blue-900 text-blue-900 font-semibold py-2 rounded hover:bg-blue-900 hover:text-white transition">
                        Cotizar por WhatsApp
                    </button>
                </div>
            </article>
        `;
        contenedor.innerHTML += tarjeta;
    });
}

// 3. Función de filtrado (llamada desde el HTML)
function filtrar(categoria) {
    cargarProductos(categoria);
}

// 4. NUEVA FUNCIÓN: Redirección a WhatsApp
function cotizar(nombreProducto) {
    const telefono = "523333912329"; // Tu número con lada internacional
    const mensaje = `Hola ENERSYA, me interesa cotizar el producto: ${nombreProducto}. ¿Me podrían dar más información?`;
    
    // Creamos el link especial de WhatsApp
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrimos en una pestaña nueva
    window.open(url, '_blank');
}

// 5. Inicializar
document.addEventListener('DOMContentLoaded', () => cargarProductos('Todos'));