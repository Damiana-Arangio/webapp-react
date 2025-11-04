import {Outlet} from 'react-router-dom';
import Header from '../components/Header'

function DefaultLayout() {

    return(
        <>
            <header className="py-4">
                <Header/>
            </header>

            <main>
                <Outlet/>
            </main>
        </>
       
    )
    
}

export default DefaultLayout;