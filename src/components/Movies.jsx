/************************** Componente Movies ****************************/
import MovieCard from "./MovieCard";

function Movies() {

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
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movies;