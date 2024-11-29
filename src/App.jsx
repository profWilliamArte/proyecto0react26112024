import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Inicio from "./pages/Inicio"
import Error404 from "./pages/Error404"
import Nosotros from "./pages/Nosotros"
import Contador from "./pages/Contador"
import Tabla1 from "./pages/(tablas)/Tabla1"
import Tabla2 from "./pages/(tablas)/Tabla2"
import Tabla3 from "./pages/(tablas)/Tabla3"
import Tabla4 from "./pages/(tablas)/Tabla4"
import Contactos from "./pages/Contactos"




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
            <Route path="/contador" element={<Contador/>}/>
            <Route path="/tabla1" element={<Tabla1/>}/>
            <Route path="/tabla1" element={<Tabla1/>}/>
            <Route path="/tabla2" element={<Tabla2/>}/>
            <Route path="/tabla3" element={<Tabla3/>}/>
            <Route path="/tabla4" element={<Tabla4/>}/>
            <Route path="/contactos" element={<Contactos/>}/>
            <Route path="*" element={<Inicio/>}/>
          </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App