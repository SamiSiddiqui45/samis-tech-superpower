import { renderToString } from 'react-dom/server';
import { readFileSync, writeFileSync } from 'node:fs';
import App from './App';
const path = 'dist/index.html';
const html = readFileSync(path, 'utf8');
writeFileSync(path, html.replace('<div id="root"></div>', `<div id="root">${renderToString(<App />)}</div>`));
