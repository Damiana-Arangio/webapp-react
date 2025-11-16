/************************** Componente Movies ****************************/

import axios from "axios";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import { useGlobalContext } from '../context/GlobalContext.jsx'  // Import Hook personalizzato per il contesto

function Movies() {

    /***********
        HOOK
    ***********/

    /* Hook di Stato */
    const [movies, setMovies] = useState([]);     // Variabile di stato utilizzata per salvare i film ritornati dall'API

    /* Hook di Effetto */
    useEffect(() => {
        fetchMovies();   // Chiamata API al montaggio del componente
    }, []);

    /* Hook di Contesto */
    const { setIsLoading } = useGlobalContext();        /* Destructuring della funzione setIsLoading dal GlobalContext
                                                        (usata per attivare/disattivare il loader durante le chiamate API) */
                                                        
    /***************
        RENDERING
    ***************/
    return(

        <>
            <div className="container my-5">
                <h1 className="text-center text-light-grey"> Movies </h1>
                <h3 className="text-center fst-italic text-grey">  Join the ultimate movie lovers club </h3>
                <div>
                    <div className="row mt-5">    
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}     // Passaggio dell'intero oggetto come props
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )

    /***************
        FUNZIONI
    ****************/

    /* Richiesta API per ottenere la lista dei film */
    function fetchMovies() {

        // Attiva il loader prima di avviare la richiesta API
        setIsLoading(true);

        const url = 'http://localhost:3000/api/movies';
        axios.get(url)
            .then(risApi => setMovies(risApi.data))
            .catch(errApi => console.log(errApi))
            .finally(() => setIsLoading(false));            // Disattiva il loader in ogni caso (successo o errore)
    }
}

export default Movies;