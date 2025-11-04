/************************** Componente Header ****************************/

import { Link } from "react-router-dom";      /* Import componenti da React Router */


function Header() {
    return(

        <nav className="navbar">
            <div>
                <Link className="navbar-brand fs-1 fw-bold d-flex flex-row align-items-center" to="/movies">
                    <img src="../public/imgs/logo.png" alt="Logo" width="90" height="84" className="d-inline-block align-text-top ms-4 me-4"/>
                    <h1 className="text-white">Movies App</h1>    
                </Link>
            </div>
        </nav>
    )
}

export default Header;