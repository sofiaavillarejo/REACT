import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Saludo from './components/Saludo';
import Metodos from './components/Metodos';
import DobleNumero from './components/DobleNumero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Saludo nombre="Sofía" edad="23"/>
    {/* los props son opcionales, asi que si no quiero usar edad, no hace falta */}
    <Saludo nombre="Adrian" edad="25" />
    <Metodos />
    <DobleNumero />
  </React.StrictMode>
);

reportWebVitals();
