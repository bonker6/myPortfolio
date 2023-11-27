import React from 'react';
import ReactDOMCliente from 'react-dom/client';
import App from './App'
import './css/main.css'

const app = ReactDOMCliente.createRoot(document.getElementById('app'))

app.render(<App />)
