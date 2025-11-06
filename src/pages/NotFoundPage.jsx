
/* Pagina che mostra un messaggio di errore quando l’utente tenta di accedere ad una rotta inesitente (404)*/

import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
        <div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
            <h2>Page Not Found</h2>
            <p className="text-white my-3">Sorry, but the page you are looking for does not exist.</p>
            <Link className="btn btn-primary" to="/movies">Back to home</Link>
        </div>
    );
}

export default NotFoundPage