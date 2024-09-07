import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllProducts from '../pages/AllProducts'
import Addproducts from '../pages/Addproducts'

function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element =  {<AllProducts/>} />
        <Route path='/add-products' element =  {<Addproducts/>} />
      </Routes>
    </div>
  )
}

export default Router
