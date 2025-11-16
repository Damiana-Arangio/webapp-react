
/************************** Componente MovieCard ****************************/

import { Link } from "react-router-dom";

function MovieCard(props) {

    const { movie } = props;     // Destructuring dell'oggetto movies che contiene la risposta dell'API

    /***************
        RENDERING
    ***************/
    return (

        <div className="col-4 mb-5">
            <div className="card movie-card p-2" style={{width: "20rem"}}>
                <img src={movie.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <address className="text-grey"> {movie.director} </address>
                    <p className="card-text"> {movie.abstract} </p>
                    <Link to={`/movies/${movie.id}`} className="btn see-more-btn">See more</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;