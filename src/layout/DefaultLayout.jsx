import {Outlet} from 'react-router-dom';
import Header from '../components/Header'
import Loader from '../components/Loader';                  
import {useGlobalContext} from '../context/GlobalContext.jsx'  // Import Hook personalizzato per il contesto

function DefaultLayout() {

    // Destructuring della variabile isLoading dal GlobalCpontext
    const { isLoading } = useGlobalContext();

    return(
        <>
            <header className="py-4 header-page">
                <Header/>
            </header>

            <main>
                <Outlet/>
            </main>
            {isLoading && <Loader />}   {/* Se la variabile di stato "isLoading è true mostro il componente Loader" */}
        </>
       
    )
    
}

export default DefaultLayout;