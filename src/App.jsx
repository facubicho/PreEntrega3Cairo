import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Zona from './components/Promociones/Promociones'
import Nosotros from './components/Nosotros/Nosotros'
import Error from './components/Error/Error'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/CartContext'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (

    <>
      <BrowserRouter>

        <CartProvider>

          <Navbar />

          <Routes>

            <Route path='/' element={<ItemListContainer />} />
            <Route path='/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:idShoe' element={<ItemDetailContainer />} />
            <Route path='/Promociones' element={<Zona />} />
            <Route path='/Sobre Nosotros' element={<Nosotros />} />
            <Route path='/Carro' element={<Cart />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='*' element={<Error />} />

          </Routes>

        </CartProvider>

      </BrowserRouter>
    </>
  )
}

export default App
