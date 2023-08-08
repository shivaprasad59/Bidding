import React from 'react'
import Home from './components/Home/Home'
import { Route ,Routes} from 'react-router-dom'
import Singup from './components/Signup/Singup'
import Login from './components/Login/Login'
import Navbar from './components/NavBar/Navbar'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<Singup/>}/>
        <Route path='/Welcome' element={<Navbar/>}/>
      </Routes>
    </div>
  )
}

export default App