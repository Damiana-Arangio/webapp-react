import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';   // Import libreria di Routing
import DefaultLayout from './layout/DefaultLayout';                // Import Layout principale pagina
import HomePage from './pages/HomePage';                           // Import Pagina Home
import MovieDetailsPage from './pages/MovieDetailsPage';           // Import Pagina dettagli film
import NotFoundPage from './pages/NotFoundPage';                   // Import Pagina Not Found


function App() {

  return (

    <>
      {/*****************************
              GESTIONE DELLE ROTTE
        *******************************/}
      <BrowserRouter>
        
        {/* Componente che raggruppa tutte le rotte */}
        <Routes>

          {/* Rotta genitore - contenete il layout */}
          <Route element = {<DefaultLayout/>}>

            {/* Rotte figlie - mostrate dentro <Outlet/> */}
            <Route path='/movies'>
              <Route index element={<HomePage />} />
              <Route path=":id" element={<MovieDetailsPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />    {/* Rotta 404 - per gestire percorsi inesistenti */}

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
