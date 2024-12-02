document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.getElementById('menu-items');
    const contactForm = document.getElementById('contact-form');

    // Función para cargar menú desde API
    async function cargarMenu() {
        try {
            const respuesta = await fetch('/api/menu');
            const menu = await respuesta.json();
            
            menu.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');
                menuItem.innerHTML = `
                    <h3>${item.nombre}</h3>
                    <p>${item.descripcion}</p>
                    <span>$${item.precio}</span>
                `;
                menuItems.appendChild(menuItem);
            });
        } catch (error) {
            console.error('Error cargando el menú:', error);
        }
    }

    // Validación de formulario de contacto
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (!nombre || !email || !mensaje) {
            alert('Por favor, complete todos los campos');
            return;
        }

        try {
            const respuesta = await fetch('/api/contacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, email, mensaje })
            });

            if (respuesta.ok) {
                alert('Mensaje enviado con éxito');
                contactForm.reset();
            } else {
                throw new Error('Error al enviar el mensaje');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un problema al enviar el mensaje');
        }
    });

    // Cargar menú al iniciar
    cargarMenu();
});
