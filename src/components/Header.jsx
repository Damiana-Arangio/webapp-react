/************************** Componente Header ****************************/

import { Link } from "react-router-dom";      /* Import componenti da React Router */


function Header() {
    return(

        <nav className="navbar bg-light-subtle">
            <div className="container-fluid">
                <Link className="navbar-brand fs-1 fw-bold" to="/movies">
                    <img src="../public/imgs/logo.jpg" alt="Logo" width="70" height="64" className="d-inline-block align-text-top me-3"/>
                        Movies App
                </Link>
            </div>
        </nav>
    )
}

export default Header;