import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    const miRef = useRef();

    const incrementar1 = () => {
        setcontador1(contador1 + 1);
    }

    const incrementar2 = () => {
        setcontador2(contador2 + 1);
    }

    // useEffect(() => {
    //     console.log("Cambio en el estado del componente");
    //     console.log("Mostrando referencia a elemento del DOM");
    //     console.log(miRef);
    // })

    // useEffect(() => {
    //     console.log("Cambio en el contador 1");
    //     console.log("Mostrando referencia a elemento del DOM");
    //     console.log(miRef);
    // }, [contador1]);

    useEffect(() => {
        console.log("Cambio en el contador 1 o contador 2");
        console.log("Mostrando referencia a elemento del DOM");
        console.log(miRef);
    }, [contador1, contador2]);

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            
            <h2>Contador 1: { contador1 }</h2>
            <h2>Contador 2: { contador2 }</h2>

            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            <div>
                <button onClick={incrementar1}>Incrementar 1</button>
                <button onClick={incrementar2}>Incrementar 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
