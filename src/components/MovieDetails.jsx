/************************** Componente Movie Details ****************************/

import { Link } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import axios from "axios";
import { useState, useEffect } from "react";

function MovieDetails() {

    /***************
        RENDERING
    ***************/
    return (

        <>
            {/* CONTENUTO PRINCIPALE FILM */}
            <article className="container my-5 py-3 d-flex justify-content-center">
                <div className="card border-0" style={{ maxWidth: "600px" }}>
                    <div className="row g-0 movie-card p-2">

                        {/* Immagine */}
                        <div className="col-md-4">
                            <img src="../public/imgs/logo.png" className="img-fluid rounded-start px-2" alt="..."/>
                        </div>

                        {/* Titolo - Genere - Abstract */}
                        <div className="col-md-8 px-2">
                            <div className="card-body">
                                <h3 className="card-title"> Title</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, a. Maiores voluptates, fugiat enim quo nostrum ex sunt amet illo incidunt atque porro dolorum quibusdam cum labore vero beatae iusto!</p>
                                <small className=""> Genre </small>
                            </div>
                        </div>

                    </div>
                </div>
            </article>

            {/* SEZIONE RECENSIONI */}
            <section className="container m-5">
                <header>
                    <h3 className="h4 pb-2 mb-4 border-bottom"> Reviews </h3>
                </header>

                {/* Recensioni */}
                <article>
                        <ReviewCard/>
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                </article>
            </section>

            {/* Bottone che riporta alla Home */}
            <footer className='container m-5'>
                <Link className="btn btn-primary" to="/movies"> Back to Home </Link> 
            </footer>
        </>
    )
}

export default MovieDetails;