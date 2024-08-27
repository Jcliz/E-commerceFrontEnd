import { createServer } from 'node:http';
import { readFile } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Definir __dirname manualmente
const __dirname = dirname(fileURLToPath(import.meta.url));

const server = createServer((req, res) => {
    console.log(`Received request for ${req.url}`);

    // Ajustar o caminho do arquivo com base na URL da requisição
    let filePath = join(__dirname, req.url === '/' ? 'Tela Inicial/telainicial.html' : req.url);

    // Definir o tipo de conteúdo com base na extensão do arquivo
    const ext = extname(filePath);
    let contentType = 'text/html';

    switch (ext) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
        case '.jpeg':
            contentType = 'image/jpeg';
            break;
        case '.ico':
            contentType = 'image/x-icon';
            break;
        default:
            contentType = 'text/html'; // Caso a extensão não seja reconhecida
            break;
    }

    // Ler e servir o arquivo solicitado
    readFile(filePath, (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File Not Found');
            return;
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
