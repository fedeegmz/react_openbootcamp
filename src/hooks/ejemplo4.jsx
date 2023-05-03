import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>
                *** Ejemplo de Children Props ***
            </h1>
            <h2>
                Nombre: { props.nombre }
            </h2>
            <h2>{ props.children }</h2>
        </div>
    );
}

export default Ejemplo4;
