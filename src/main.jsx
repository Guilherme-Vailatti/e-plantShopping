import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux'; // Importa o Provider do react-redux
import store from './store.js'; // Importa a store do arquivo store.js

// Renderiza o aplicativo dentro do Provider para que a store seja acessível em toda a aplicação
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
