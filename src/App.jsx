import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Inicio from "./pages/Inicio"
import Error404 from "./pages/Error404"
import Nosotros from "./pages/Nosotros"
import Servicios from "./pages/Servicios"
import Producto1 from "./pages/(productos)/Producto1"
import Producto3 from "./pages/(productos)/Producto3"
import Producto2 from "./pages/(productos)/Producto2"
import Contactos from "./pages/Contactos"
import Producto4 from "./pages/(productos)/Producto4"



const App = () => {
  return (
    <div className="app">
    <BrowserRouter >
      <Header/>
      <main>
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/servicios" element={<Servicios/>}/>
            <Route path="/producto1" element={<Producto1/>}/>
            <Route path="/producto2" element={<Producto2/>}/>
            <Route path="/producto3" element={<Producto3/>}/>
            <Route path="/producto4" element={<Producto4/>}/>
            <Route path="/contactos" element={<Contactos/>}/>
            <Route path="*" element={<Error404/>}/>
          </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App