
/************************** Componente MovieCard ****************************/

import { Link } from "react-router-dom";

function MovieCard() {
    return (

        <div className="col-4 mb-5">
            <div className="card movie-card p-2" style={{width: "20rem"}}>
                <img src="../public/imgs/logo.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <address> Director </address>
                    <p className="card-text"> Abstract </p>
                    <Link to="/movies/1" className="btn btn-primary">See more</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;