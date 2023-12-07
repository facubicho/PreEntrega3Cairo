import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBBAJksDdTg4RUHKrCokDhb5TRqvWLLtL8",
  authDomain: "e-commerce-9796e.firebaseapp.com",
  projectId: "e-commerce-9796e",
  storageBucket: "e-commerce-9796e.appspot.com",
  messagingSenderId: "211288303356",
  appId: "1:211288303356:web:7020e7df3c404784445979",
  measurementId: "G-C6X3V0D1XH"
};

// conexion Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
