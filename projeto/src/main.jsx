import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './Pages/Home/Home.jsx';
import { Plan } from './Pages/Plan/Plan.jsx';
import { Actives } from './Pages/Actives/Actives.jsx';
import { Summary } from './Pages/Actives/Summary/Summary.jsx';
import GlobalStyle from './styles/global.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
)
