import React,{useEffect, useState} from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './components/home';
import AddProd from './components/addProd';
import SignUp from './components/signup';
import Cart from './components/Cart';
import ProdDetails from './components/ProdDetails';
import Login from './components/Login';



function App() {
  const [count,setCount] = useState(0)
  const [ecom,setEcom] = useState([])

  async function fetchData(){
    let res = await fetch('http://localhost:3000/data')
    let data = await res.json()
    setEcom(data)
  }
  
  useEffect(()=>{
    fetchData()
  },[])
  return (
   <>
   <Routes>
    <Route path='/' element={<Home data={ecom} />} />
    <Route path='/addProd' element={<AddProd />} />
    <Route path='/ProdDetails/:id' element={<ProdDetails/>} />
    <Route path='/Cart' element={<Cart />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/Login' element={<Login />} />
   </Routes>
   </>
  )
}

export default App