import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve, extname} from 'node:path';
const args=process.argv.slice(2), port=Number(args[args.indexOf('--port')+1]) || 3000;
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.webp':'image/webp','.jpg':'image/jpeg','.txt':'text/plain','.woff2':'font/woff2'};
http.createServer(async(req,res)=>{try{const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const file=resolve('.','.'+(path==='/'?'/index.html':path));if(!file.startsWith(resolve('.')+'/'))throw new Error('Invalid path');const body=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream'});res.end(body)}catch{res.writeHead(404);res.end('Not found')}}).listen(port,'0.0.0.0',()=>console.log(`Local: http://localhost:${port}`));
