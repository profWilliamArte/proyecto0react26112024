
import { FaFacebook } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import logo from '../assets/alfresco.svg'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary py-4" >
    <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} alt="" width={70} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item">
            <Link to={"/inicio"} className="nav-link active" aria-current="page" href="#">Inicio</Link>
            </li>
            <li className="nav-item">
            <Link to={"/nosotros"} className="nav-link" href="#">Nosotros</Link>
            </li>
            <li className="nav-item">
             <Link to={"/contador"} className="nav-link" href="#">Contador</Link>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tablas
            </a>
            <ul className="dropdown-menu">
                <li><Link to={"/tabla1"} className="dropdown-item" href="#">Tabla I</Link></li>
                <li><Link to={"/tabla2"} className="dropdown-item" href="#">Tabla II</Link></li>
                <li><Link to={"/tabla3"} className="dropdown-item" href="#">Tabla III</Link></li>
                <li><Link to={"/tabla4"} className="dropdown-item" href="#">Tabla IV</Link></li>
            </ul>
            </li>
            <li className="nav-item">
                <Link to={"/contactos"} className="nav-link" href="#">Contactos</Link>
            </li>
        </ul>
        <div className="d-flex gap-1">


            <a href="https://www.instagram.com/arsistema/" target="_blank" className="btn btn-outline-dark fs-5"><TiSocialInstagram /></a>
            <a href="https://www.facebook.com/" target="_blank" className="btn btn-outline-dark fs-5"><FaFacebook /></a>
            <a href="https://www.youtube.com/" target="_blank" className="btn btn-outline-dark fs-5"><FaYoutube/></a>
            
        </div>
        </div>
    </div>
    </nav>

  )
}

export default Header