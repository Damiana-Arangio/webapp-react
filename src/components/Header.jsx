/************************** Componente Header ****************************/

import { Link } from "react-router-dom";      /* Import componente Link da React Router */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return(

        <nav className="container d-flex justify-content-between pe-5">

            {/* Logo + Titolo */}
            <Link className="navbar-brand fs-1 fw-bold d-flex flex-row align-items-center" to="/movies">
                <FontAwesomeIcon icon={faFilm} className="logo-icon me-4" />            
                <h2 className="text-white">Movies App</h2>    
            </Link>

            {/* Bottone per aggiungere un nuovo film */}
            <Link to="/movies/create">
                <button className="add-movie-btn mt-2 me-5"> 
                    Add Movie
                </button>
                
            </Link>     
        </nav>
    )
}

export default Header;