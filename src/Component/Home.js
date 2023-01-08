import {Product} from "./Products";
export function Home(){
    return (
        <div className="Home">
        <div className="card bg-dark text-white border-0">
            <img className="card-img" src="/assets/ecomm.jpg" alt="Background-image" height="700" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">MEILLEUIR PRIX</h5>
                    <p className="card-text fs-2">VÉRIFIEZ CI-DESSOUS TOUT NOS OFFRES</p>
                    </div>
                </div>
        </div>
            <Product />
        </div>
    )
}