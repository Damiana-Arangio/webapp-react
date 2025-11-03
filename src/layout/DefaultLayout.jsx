import {Outlet} from 'react-router-dom';
import Header from '../components/Header'

function DefaultLayout() {

    return(
        <>
            <header>
                <Header/>
            </header>

            <main>
                <Outlet/>
            </main>
        </>
       
    )
    
}

export default DefaultLayout;