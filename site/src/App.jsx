import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
// import Navebar from './Component/navebar/Navebar'
import Home from './Component/pages/Home'
import Login from './Component/pages/Login'
import Signup from './Component/pages/Signup'
import Products from './Component/pages/Products'
import Sales from './Component/pages/Sales'
import Orders from './Component/pages/Orders'
import Orderitem from './Component/pages/Orderitem'
import Category from './Component/pages/Category'
import Expens from './Component/pages/Expens'
import Report from './Component/pages/Report'
import Subcategory from './Component/pages/Subcategory'
import Logout from './Component/pages/Logout'
// import Navebar from './Component/navebar/Navebar'




function App() {

  return (
    <>
      {/* <Navebar /> */}
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/products' element={<Products/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/sales' element={<Sales/>}/>
          <Route path='/order' element={<Orders/>}/>
          <Route path='/oreritem' element={<Orderitem/>}/>
          <Route path='/expens' element={<Expens/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/subcategory' element={<Subcategory/>}/>
          <Route path='/report' element={<Report/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
