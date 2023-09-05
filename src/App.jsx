
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Shared/Navbar/Navbar'
import Footer from './Shared/Footer/Footer'

function App() {
  

  return (
    <>
    <Navbar/>
    <Outlet></Outlet>
    <Footer></Footer>
    
      
    </>
  )
}

export default App
