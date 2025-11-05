/************************** Componente Movies ****************************/
import MovieCard from "./MovieCard";
import axios from "axios";
import { useState, useEffect } from "react";

function Movies() {

    /***********
        HOOK
    ***********/

    /* Hook di Stato */
    const [movies, setMovies] = useState([]);     // Variabile di stato in cui salviamo i film ritornati dall'API

    /* Hook di Effetto */
    useEffect(() => {
        fetchMovies();   // Chiamata API al montaggio del componente
    }, []);


    /***************
        RENDERING
    ***************/
    return(

        <>
            <div className="container my-5">
                <h1 className="text-center"> Movies </h1>
                <h2 className="text-center fst-italic">  Join the ultimate movie lovers club </h2>
                <div>
                    <div className="row mt-5">    

                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}     // Passaggio dell'intero oggetto come prop
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
        const url = 'http://localhost:3000/api/movies';
        axios.get(url)
            .then(risApi => setMovies(risApi.data))
            .catch(errApi => console.log(errApi))
    }
}

export default Movies;