const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Datos de menú simulados
const menuItems = [
    { 
        nombre: 'Espresso', 
        descripcion: 'Café espresso tradicional', 
        precio: 2.50 
    },
    { 
        nombre: 'Cappuccino', 
        descripcion: 'Café con leche espumosa', 
        precio: 3.75 
    },
    { 
        nombre: 'Café Americano', 
        descripcion: 'Café negro suave', 
        precio: 2.25 
    }
];

// Rutas de API
app.get('/api/menu', (req, res) => {
    res.json(menuItems);
});

app.post('/api/contacto', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    
    // En un escenario real, aquí guardarías el mensaje en una base de datos
    console.log(`Mensaje recibido - Nombre: ${nombre}, Email: ${email}`);
    
    res.status(200).json({ mensaje: 'Contacto recibido' });
});

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
