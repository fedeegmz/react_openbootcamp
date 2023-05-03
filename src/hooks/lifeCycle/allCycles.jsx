import React from 'react';
import { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log("Componente creado");

        const intervalID = setInterval(() => {
            console.log("Actualización del componente");
            document.title = `${new Date()}`
        }, 1000);

        return () => {
            console.log("Componente va a desaparecer");
            document.title = "Tiempo detenido";
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;