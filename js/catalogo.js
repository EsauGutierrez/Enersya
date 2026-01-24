// 1. Base de datos de productos (Simulada en un Array)
const productos = [
    {
        id: 1,
        nombre: "Batería Osonix OBS1285HR 12V, 85W/CELL 15 MIN",
        categoria: "Baterías",
        marca: "OSONIX",
        imagen: "assets/images/osonix/baterias/K6A4293.png", // Asegúrate de tener estas imágenes
        descripcion: "Aplicaciones: UPS, Telecomunicaciones, Equipos Médicos, Sistemas de Seguridad, Equipos Industriales.",
        nuevo: true // Este tiene la etiqueta "Nuevo"
    },
    {
        id: 6,
        nombre: "Banco de baterías Osonix",
        categoria: "Bancos de Baterías",
        marca: "OSONIX",
        imagen: "assets/images/osonix/bancos_baterias/CS2_932_5.png",
        descripcion: "Banco de baterías modulares para aplicaciones industriales y comerciales.",
        nuevo: true
    },
    {
        id: 7,
        nombre: "Batería de plomo-ácido sellada VRLA OBS125 12V 5Ah",
        categoria: "Baterías",
        marca: "OSONIX",
        imagen: "assets/images/osonix/baterias/vrla/OBS-125.png",
        descripcion: "Aplicaciones: Centro de datos, Telecomunicaciones, Vehículos eléctricos, Sistemas de seguridad, Equipos médicos, UPS, Luminarias de emergencia.",
        nuevo: false
    },
    {
        id: 8,
        nombre: "Batería de plomo-ácido sellada VRLA OBS129 12V 9Ah",
        categoria: "Baterías",
        marca: "OSONIX",
        imagen: "assets/images/osonix/baterias/vrla/OBS-129.png",
        descripcion: "Aplicaciones: Centro de datos, Telecomunicaciones, Vehículos eléctricos, Sistemas de seguridad, Equipos médicos, UPS, Luminarias de emergencia.",
        nuevo: false
    },
    {
        id: 9,
        nombre: "Batería de plomo-ácido sellada VRLA OBS1212 12V 12Ah",
        categoria: "Baterías",
        marca: "OSONIX",
        imagen: "assets/images/osonix/baterias/vrla/OBS-1212.png",
        descripcion: "Aplicaciones: Centro de datos, Telecomunicaciones, Vehículos eléctricos, Sistemas de seguridad, Equipos médicos, UPS, Luminarias de emergencia.",
        nuevo: false
    },
    {
        id: 10,
        nombre: "Batería de plomo-ácido sellada VRLA OBS1218M5 12V 18Ah",
        categoria: "Baterías",
        marca: "OSONIX",
        imagen: "assets/images/osonix/baterias/vrla/OBS-1218M5.png",
        descripcion: "Aplicaciones: Centro de datos, Telecomunicaciones, Vehículos eléctricos, Sistemas de seguridad, Equipos médicos, UPS, Luminarias de emergencia.",
        nuevo: false
    },
    {
        id: 11,
        nombre: "Batería de plomo-ácido sellada VRLA OBS1226M5 12V 26Ah",
        categoria: "Baterías",
        marca: "OSONIX",
        imagen: "assets/images/osonix/baterias/vrla/OBS-1226M5.png",
        descripcion: "Aplicaciones: Centro de datos, Telecomunicaciones, Vehículos eléctricos, Sistemas de seguridad, Equipos médicos, UPS, Luminarias de emergencia.",
        nuevo: false
    },
    {
        id: 12,
        nombre: "Batería de plomo-ácido sellada VRLA OBS1234M5 12V 34Ah",
        categoria: "Baterías",
        marca: "OSONIX",
        imagen: "assets/images/osonix/baterias/vrla/OBS-1234M5.png",
        descripcion: "Aplicaciones: Centro de datos, Telecomunicaciones, Vehículos eléctricos, Sistemas de seguridad, Equipos médicos, UPS, Luminarias de emergencia.",
        nuevo: false
    },
    {
        id: 13,
        nombre: "Batería de plomo-ácido sellada VRLA OBS1250M6 12V 50Ah",
        categoria: "Baterías",
        marca: "OSONIX",
        imagen: "assets/images/osonix/baterias/vrla/OBS-1250M6.png",
        descripcion: "Aplicaciones: Centro de datos, Telecomunicaciones, Vehículos eléctricos, Sistemas de seguridad, Equipos médicos, UPS, Luminarias de emergencia.",
        nuevo: false
    },
    {
        id: 14,
        nombre: "Batería de plomo-ácido sellada VRLA OBS1250M6 12V 7.2Ah",
        categoria: "Baterías",
        marca: "OSONIX",
        imagen: "assets/images/osonix/baterias/vrla/OBS-1272.png",
        descripcion: "Aplicaciones: Centro de datos, Telecomunicaciones, Vehículos eléctricos, Sistemas de seguridad, Equipos médicos, UPS, Luminarias de emergencia.",
        nuevo: false
    },
    {
        id: 15,
        nombre: "Batería de plomo-ácido sellada VRLA OBS1250M6 12V 7.5Ah",
        categoria: "Baterías",
        marca: "OSONIX",
        imagen: "assets/images/osonix/baterias/vrla/OBS-1275.png",
        descripcion: "Aplicaciones: Centro de datos, Telecomunicaciones, Vehículos eléctricos, Sistemas de seguridad, Equipos médicos, UPS, Luminarias de emergencia.",
        nuevo: false
    },
    {
        id: 16,
        nombre: "Batería de plomo-ácido sellada VRLA OBS1250M6 12V 100Ah",
        categoria: "Baterías",
        marca: "OSONIX",
        imagen: "assets/images/osonix/baterias/vrla/OBS-12100.png",
        descripcion: "Aplicaciones: Centro de datos, Telecomunicaciones, Vehículos eléctricos, Sistemas de seguridad, Equipos médicos, UPS, Luminarias de emergencia.",
        nuevo: false
    },
    {
        id: 17,
        nombre: "Batería de plomo-ácido sellada VRLA OBS1250M6 12V 130Ah",
        categoria: "Baterías",
        marca: "OSONIX",
        imagen: "assets/images/osonix/baterias/vrla/OBS-12130.png",
        descripcion: "Aplicaciones: Centro de datos, Telecomunicaciones, Vehículos eléctricos, Sistemas de seguridad, Equipos médicos, UPS, Luminarias de emergencia.",
        nuevo: false
    },
];

// Estado de los filtros
let filtroCategoriaActual = 'Todos';
let filtroMarcaActual = 'Todas';

// 2. Función para pintar los productos en el HTML
const contenedor = document.getElementById('contenedor-productos');

// 2. Función Principal: Cargar productos (Combinando filtros)
function cargarProductos() {
    contenedor.innerHTML = '';

    // Filtramos el array maestro
    const productosFiltrados = productos.filter(p => {
        const pasaCategoria = filtroCategoriaActual === 'Todos' || p.categoria === filtroCategoriaActual;
        const pasaMarca = filtroMarcaActual === 'Todas' || p.marca === filtroMarcaActual;
        return pasaCategoria && pasaMarca;
    });

    // Mensaje si no hay resultados
    if (productosFiltrados.length === 0) {
        contenedor.innerHTML = `
            <div class="col-span-full text-center py-10">
                <p class="text-gray-500 text-lg">No encontramos productos con esos filtros.</p>
                <button onclick="limpiarFiltros()" class="mt-4 text-orange-500 font-semibold hover:underline">
                    Ver todos los productos
                </button>
            </div>`;
        return;
    }

    // Dibujar tarjetas
    productosFiltrados.forEach(producto => {
        const tarjeta = `
            <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col group">
                <div class="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                    ${producto.nuevo ? '<span class="absolute top-2 right-2 z-10 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">Nuevo</span>' : ''}
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="max-h-full max-w-full object-contain p-4 transition-transform duration-500 group-hover:scale-110">
                </div>
                <div class="p-4 flex flex-col flex-grow">
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-xs text-gray-500 uppercase tracking-wide">${producto.categoria}</span>
                        <span class="text-xs font-bold text-orange-500 uppercase">${producto.marca}</span>
                    </div>
                    <h4 class="text-lg font-bold text-blue-900 mb-2 leading-tight">${producto.nombre}</h4>
                    <p class="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">${producto.descripcion}</p>
                    
                    <div class="flex gap-2 mt-auto">
                        <button onclick="verDetalle(${producto.id})" class="flex-1 border border-gray-300 text-gray-600 font-semibold py-2 rounded hover:bg-gray-50 transition text-sm">
                            Ver Detalle
                        </button>
                        <button onclick="cotizar('${producto.nombre}')" class="flex-1 bg-blue-900 text-white font-semibold py-2 rounded hover:bg-orange-500 transition text-sm">
                            Cotizar
                    </button>
                    </div>
                </div>
            </article>
        `;
        contenedor.innerHTML += tarjeta;
    });

    actualizarEstilosBotones();
}

// 3. Funciones de Filtrado
function filtrarCategoria(cat) {
    filtroCategoriaActual = cat;
    cargarProductos();
}

function filtrarMarca(marca) {
    filtroMarcaActual = marca;
    cargarProductos();
}

function limpiarFiltros() {
    filtroCategoriaActual = 'Todos';
    filtroMarcaActual = 'Todas';
    cargarProductos();
}

// 4. Actualizar visualmente qué botón está activo
function actualizarEstilosBotones() {
    // Estilos base vs activos
    const baseClass = "text-gray-600 hover:text-orange-500 hover:bg-gray-50";
    const activeClass = "text-orange-500 font-bold bg-orange-50";

    // Actualizar Categorías
    document.querySelectorAll('.btn-cat').forEach(btn => {
        if (btn.dataset.val === filtroCategoriaActual) {
            btn.className = `btn-cat w-full text-left p-2 rounded transition ${activeClass}`;
        } else {
            btn.className = `btn-cat w-full text-left p-2 rounded transition ${baseClass}`;
        }
    });

    // Actualizar Marcas
    document.querySelectorAll('.btn-brand').forEach(btn => {
        if (btn.dataset.val === filtroMarcaActual) {
            btn.className = `btn-brand w-full text-left p-2 rounded transition ${activeClass}`;
        } else {
            btn.className = `btn-brand w-full text-left p-2 rounded transition ${baseClass}`;
        }
    });
}

// --- FUNCIONES DEL MODAL (Sin cambios, solo copia las que ya tenías) ---
function verDetalle(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;
    document.getElementById('modal-img').src = producto.imagen;
    document.getElementById('modal-categoria').innerText = producto.categoria;
    document.getElementById('modal-titulo').innerText = producto.nombre;
    document.getElementById('modal-descripcion').innerText = producto.descripcion;
    document.getElementById('modal-specs').innerText = producto.specs || "Contacte para más detalles.";
    document.getElementById('modal-cotizar').onclick = function () { cotizar(producto.nombre); };

    const modal = document.getElementById('modal-detalle');
    const content = document.getElementById('modal-content');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
    }, 10);
}

function cerrarModal() {
    const modal = document.getElementById('modal-detalle');
    const content = document.getElementById('modal-content');
    modal.classList.add('opacity-0');
    content.classList.remove('scale-100');
    content.classList.add('scale-95');
    setTimeout(() => { modal.classList.add('hidden'); }, 300);
}

// Lógica de ZOOM (Lightbox fullscreen)
function toggleZoom(imgElement) {
    const lightbox = document.getElementById('lightbox-zoom');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imgElement.src;
    lightbox.classList.remove('hidden');
}

function cerrarZoom() {
    document.getElementById('lightbox-zoom').classList.add('hidden');
}

// WhatsApp Link
function cotizar(nombreProducto) {
    const telefono = "523333912329";
    const mensaje = `Hola ENERSYA, me interesa cotizar: ${nombreProducto}.`;
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
}

// Cerrar modal si hacen click fuera del contenido (en el fondo oscuro)
document.getElementById('modal-detalle').addEventListener('click', function (e) {
    if (e.target === this) cerrarModal();
});

document.addEventListener('DOMContentLoaded', () => cargarProductos('Todos'));