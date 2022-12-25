import { Routes , Route , Navigate } from 'react-router-dom' ;



import Home from './../pages/Home' ;
import Services from '../pages/Services' ;
import Login from './../pages/Login' ;
import Signup from './../pages/Signup' ;
import ProductDetails from './../pages/ProductDetails' ;

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Home/>}  />
      <Route path='services' element={<Services/>}  />
      <Route path='services/:id' element={<ProductDetails/>}  />
      <Route path='login' element={<Login/>}  />
      <Route path='signup' element={<Signup/>}  />
    </Routes>
  )
}

export default Routers