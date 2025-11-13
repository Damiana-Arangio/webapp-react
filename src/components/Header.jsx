/************************** Componente Header ****************************/

import { Link } from "react-router-dom";      /* Import componente Link da React Router */

function Header() {
    return(

        <nav className="navbar">
            <div>
                {/* Logo + Titolo */}
                <Link className="navbar-brand fs-1 fw-bold d-flex flex-row align-items-center" to="/movies">
                    <img src="../public/imgs/logo.png" alt="Logo" width="90" height="84" className="d-inline-block align-text-top ms-4 me-4"/>
                    <h1 className="text-white">Movies App</h1>    
                </Link>
                
                {/* Link aggiungi nuovo film */}
                <Link className="navbar-brand fs-1 fw-bold d-flex flex-row align-items-center" to="/movies/create">
                    Add Movie
                </Link>

            </div>
        </nav>
    )
}

export default Header;