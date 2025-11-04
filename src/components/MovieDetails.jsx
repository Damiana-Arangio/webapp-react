/************************** Componente Movie Details ****************************/

function MovieDetails() {

    /***************
        RENDERING
    ***************/
    return (

        <>
            {/* CONTENUTO PRINCIPALE FILM */}
                <article>

                    {/* Titolo e Genere */}
                    <header>
                        <h1> Title </h1>
                        <h2> Genre </h2>
                    </header>

                    {/* Abstract */}
                    <p>  Abstract Film - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum optio, sit vitae delectus fugiat minus quos architecto voluptatum esse ipsa corrupti dicta at maxime autem soluta facilis voluptate ipsum porro! </p>

                </article>

            {/* SEZIONE RECENSIONI */}
            <section>
                <header>
                    <h3> Reviews </h3>
                </header>

                {/* Qui vanno le Recensioni */}
                <article>
                    Prima Recensione
                </article>
            </section>
        </>
    )
}

export default MovieDetails;