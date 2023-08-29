import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CategoriesState from './Context/categoriesState.jsx'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CategoriesState>
    <App />
    </CategoriesState>
  </React.StrictMode>,
)
