// Servidor básico con Node.js - Reserva de vuelos
// Autor: Alexander Guizado
// Ejecutar con: node 03_servers_mp_guizado_alexander.js
import { createServer } from 'node:http';

const server = createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Reserva de Vuelos</h1><p>Bienvenido, busca tu próximo destino.</p>');
    }
    else if (req.url === '/vuelos') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Vuelos disponibles</h1><ul><li>Quito - Lima</li><li>Quito - Bogotá</li><li>Quito - Madrid</li></ul>');
    }
    else if (req.url === '/contacto') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Contacto</h1><p>Atención al pasajero: Alexander Guizado</p>');
    }
    else {
        // Ruta no encontrada
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - Vuelo no encontrado</h1>');
    }
});

// Servidor local en el puerto 3001
server.listen(3001, '127.0.0.1', () => {
    console.log('Servidor de reservas en http://127.0.0.1:3001');
});
