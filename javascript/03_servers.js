
import { createServer } from 'node:http';

const server = createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!\n');
    }
    else if (req.url === '/contacto') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Página de Contacto</h1><p>Escríbenos a correo@example.com</p>');
    }
    else {
        // Si la ruta no existe, devolvemos un Error 404
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - Página no encontrada</h1>');
    }
});

// Inicia un servidor HTTP local en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
