// Esperar a que el documento cargue
document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu-mobile');
    const menu = document.getElementById('mobile-menu');

    if(btnMenu && menu){
        btnMenu.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
});

function enviarFormularioWhatsApp(event) {
    event.preventDefault(); // Evita que la página se recargue

    // 1. Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const empresa = document.getElementById('empresa').value || "Particular"; // Si no pone empresa, dice "Particular"
    const telefono = document.getElementById('telefono').value;
    const interes = document.getElementById('interes').value;
    const mensaje = document.getElementById('mensaje').value;

    // 2. Tu número de teléfono (formato internacional sin +)
    const miNumero = "523333912329"; 

    // 3. Crear el mensaje formateado
    const textoMensaje = `
👋 *Nuevo Contacto desde Web*
-----------------------------
👤 *Nombre:* ${nombre}
🏢 *Empresa:* ${empresa}
📞 *Teléfono:* ${telefono}
🔌 *Interés:* ${interes}
-----------------------------
💬 *Mensaje:* ${mensaje}
    `.trim();

    // 4. Crear el enlace de WhatsApp
    const url = `https://wa.me/${miNumero}?text=${encodeURIComponent(textoMensaje)}`;

    // 5. Abrir en nueva pestaña
    window.open(url, '_blank');
}