
import b1 from "../assets/b1.jpg"
import b2 from "../assets/b2.jpg"
import b3 from "../assets/b3.jpg"
import b4 from "../assets/b4.jpg"
const Carrusel = () => {
    return (
    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active bg-light" aria-current="true" aria-label="Slide 1" />
            <button className="bg-light" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
            <button className="bg-light" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            <button className="bg-light" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={b1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={b2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={b3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={b4} className="d-block w-100" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon text-light" aria-hidden="true" />
            <span className="visually-hidden " >Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>
    </div>


    )
}

export default Carrusel