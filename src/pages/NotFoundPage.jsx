/* Pagina che mostra un messaggio di errore quando l’utente tenta di accedere ad una rotta inesitente (404)*/

import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function NotFoundPage() {
    return (
        <div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
            <h2 className="fs-1 pt-3">Page Not Found</h2>
            <p className="text-white my-2">Sorry, but the page you are looking for does not exist.</p>
            <Link className="btn btn-outline-primary mt-3" to="/movies"> 
                <FontAwesomeIcon icon={faArrowLeft} className='px-2' />
                Back to Home
            </Link>
        </div>
    );
}

export default NotFoundPage