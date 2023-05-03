import React, { useState, useContext } from 'react';


const miContexto = React.createContext(null);

const Componente1 = () => {
    
    return (
        <div>
            <h1>
                El token es: { miContexto.token }
            </h1>
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: { state.sesion }
            </h2>
        </div>
    );
}

const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: "1234567",
        sesion: 1,
    }

    const [sessionData, setsessionData] = useState(estadoInicial);

    function actualizarSesion() {
        setsessionData(
            {
                token: "jwt123456789",
                sesion: sessionData.sesion + 1
            }
        )
    }

    return (
        <miContexto.Provider value={sessionData}>
        {/* Todo lo que este aqui puede leer los datos de sessionData */}
            <h1>*** Ejemplo de useContext() ***</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar sesión</button>
        </miContexto.Provider>
    );
}

export default MiComponenteConContexto;
