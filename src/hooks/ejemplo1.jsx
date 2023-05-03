import React, { useState } from 'react';

const Ejemplo1 = () => {

    const valorInicial = 0;
    const personaInicial = {
        nombre: "John",
        email: "john@email.com",
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    const incrementarContador = () => {
        setContador(contador + 1);
    }

    const actualizarPersona = () => {
        setPersona(
            {
                nombre: "Jack",
                email: "jack@email.com",
            }
        );
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>

            <h2>Contador: { contador }</h2>
            <h2>Persona</h2>
            <h3>Nombre: { persona.nombre }</h3>
            <h3>Email: { persona.email }</h3>

            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
