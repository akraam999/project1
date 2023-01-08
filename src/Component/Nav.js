import {Link, Route, Routes, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


export function NavBar(){
    const data = localStorage.getItem('user');
    const state = useSelector(state=>state.HandleCart);
    const navigate = useNavigate();
    function Deconnecte(e){
        e.preventDefault();
        localStorage.removeItem('user');
        navigate('/');
    }
    return (
        <div>
        {
            data ?
                <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand fw-bold fs-4">NORSYS</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </ul>
                        </div>
                        <div className="buttons">
                            <Link to="/login" className="btn btn-outline-dark"><i className="fa fa-sign-in me-1"></i>Mon compte</Link>
                            <a onClick={Deconnecte} className="btn btn-outline-dark ms-2"><i
                                className="fa fa-user-plus me-1 "></i>Déconnecter</a>
                            <Link to="/cart" className="btn btn-outline-dark ms-2"><i
                                className="fa fa-shopping-cart me-1 "></i>Cart({state.length})</Link>

                        </div>
                    </div>
                </nav>
                :
                <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand fw-bold fs-4">NORSYS</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </ul>
                        </div>
                        <div className="buttons">
                            <Link to="/login" className="btn btn-outline-dark"><i className="fa fa-sign-in me-1"></i>Login</Link>
                            <a href="button" className="btn btn-outline-dark ms-2"><i
                                className="fa fa-user-plus me-1 "></i>Register</a>
                            <Link to="/cart" className="btn btn-outline-dark ms-2"><i
                                className="fa fa-shopping-cart me-1 "></i>Cart({state.length})</Link>

                        </div>
                    </div>
                </nav>
        }
        </div>
    );

}