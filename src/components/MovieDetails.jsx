/************************** Componente Movie Details ****************************/

import axios from "axios";
import ReviewCard from './ReviewCard';
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';



function MovieDetails() {
    /***********
         HOOK
     ***********/

    /* Hook di Parametro */
    const { id } = useParams();                 // Recupero l'id dall'URL

    /* Hook di Stato */
    const [movie, setMovie] = useState([]);    // Variabile di stato contentente il singolo film (in base all'id corrente) ritornato dall'API

    /* Hook di Effetto */
    useEffect(() => {
        fetchMovie();                           //Chiamata Api al montaggio del componente
    }, []);

    /* Hook di Navigazione */
    const navigate = useNavigate();             // Riporta l'utente alla in caso di di errore nella risposta API

    /**************
        COSTANTI
    **************/
    const totStars = [1, 2, 3, 4, 5];           // Array statico di riferimento per generare le 5 stelle di valutazione

    /***************
        RENDERING
    ***************/
    return (

        <>
            {/* CONTENUTO PRINCIPALE FILM */}
            <article className="container m-5 py-3 d-flex justify-content-center">
                <div className="card border-0" style={{ maxWidth: "600px" }}>
                    <div className="row g-0 movie-card p-2">

                        {/* Immagine */}
                        <div className="col-md-4">
                            <img src={movie.image} className="img-fluid rounded-start px-2" alt={movie.title} />
                        </div>

                        {/* Titolo - Genere - Abstract */}
                        <div className="col-md-8 px-2">
                            <div className="card-body">
                                <h3 className="card-title"> {movie.title} </h3>
                                <p className="card-text"> {movie.abstract} </p>
                                <small className=""> {movie.Genre} </small>
                            </div>
                        </div>

                    </div>
                </div>
            </article>

            {/* SEZIONE RECENSIONI */}
            <section className="container m-5">
                <header className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-4 align-items-center py-3">
                    <h3> Reviews </h3>
                    
                    {/* Stelle recensioni */}
                    <div className="d-flex align-items-center gap-2">
                        <h5> Avarage:
                                {totStars.map((star) => (
                                    <FontAwesomeIcon className="stars"
                                        key={star}
                                        icon={movie.average_vote >= star ? faStar : faStarRegular}
                                        
                                    />
                                ))}
                        </h5>
                    </div>
                    
                </header>

                {/* Recensioni */}
                <article>
                    {movie.reviews?.map((review) => (
                        <ReviewCard
                            key={review.id}
                            review={review}
                            totStars={totStars} 
                        />
                    ))}
                </article>
            </section>

            {/* Bottone che riporta alla Home */}
            <footer className='container m-5'>
                <Link className="btn btn-primary" to="/movies/"> Back to Home </Link>
            </footer>
        </>
    )

    /***************
        FUNZIONI
    ****************/

    /* Richiesta API per ottenere la lista dei film */
    function fetchMovie() {
        const url = 'http://localhost:3000/api/movies/' + id;
        axios.get(url)
            .then(risApi => setMovie(risApi.data))
            .catch(errApi => {
                console.log(errApi)
                if (errApi.status === 404) {
                    navigate('/404');    // Redirect alla pagina NotFoundPage 
                }
            })
    }
}

export default MovieDetails;