
/************************** Componente ReviewCard ****************************/


/***************
    RENDERING
***************/
function ReviewCard() {
    return (
        <>
            <div className="card mb-4 bg-secondary-subtle">

                {/* Testo Recensione */}
                <div className="card-body">
                    <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae id iste, eos fugiat natus eius aut voluptatum laborum qui doloremque iusto dicta animi cumque pariatur quaerat quidem nostrum expedita. </p> 
                </div>

                {/* Voto Recensione */}
                <strong className="px-3"> Vote: 5 </strong>

                {/* Autore Recensione */}
                <address className="px-3"> <small> <i> By nome utente </i> </small> </address>
            </div>
        </>
    )
}

export default ReviewCard;