/* Componente che gestisce il contesto globale del Loader */

import { createContext, useContext, useState } from "react";

/****************
    CONTESTO
*****************/
const GlobalContext = createContext();          // Creazione istanza del contesto


/****************
    PROVIDER
*****************/
/* Fornisce il contesto ai componenti figli */
function GlobalProvider({children}) {

    // Variabile di stato per gestire la visibilità del context 
    const [isLoading, setIsLoading] = useState(false);   

    return (
        <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </GlobalContext.Provider>
    );
}


/************
    HOOK
************/
/* Hook personalizzato che i componenti figli useranno per consumare il contesto */
function useGlobalContext() {
    const context = useContext(GlobalContext)
            return context;
    }
export { GlobalProvider, useGlobalContext };