
/************************** Componente ReviewCard ****************************/


/***************
    RENDERING
***************/
function ReviewCard(props) {

    const { review } = props;     // Destructuring dell'oggetto revies che contiene la risposta dell'API

    return (
        <>
            <div className="card mb-4 bg-secondary-subtle">

                {/* Testo Recensione */}
                <div className="card-body">
                    <p className="card-text"> {review.text} </p> 
                </div>

                {/* Voto Recensione */}
                <strong className="px-3"> Vote: {review.vote} </strong>

                {/* Autore Recensione */}
                <address className="px-3"> <small> <i> Name: {review.name} </i> </small> </address>
            </div>
        </>
    )
}

export default ReviewCard;