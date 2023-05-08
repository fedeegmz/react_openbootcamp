import React, { useState, useEffect } from 'react';


const ClockFunction = () => {

    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    };
    const [user, setUser] = useState(initialState);

    useEffect(() => {
        const timerID = setInterval (
            () => tick(), 1000);
        
            return () => {
            clearInterval(timerID);
        };
    });

    const tick = () => {
        return setUser(
            {
                fecha: user.fecha,
                edad: user.edad + 1,
                nombre: user.nombre,
                apellidos: user.apellidos,
            }
        )
    }

    return (
        <div>
        <h2>
            Hora Actual:
            {user.fecha.toLocaleTimeString()}
        </h2>
        <h3>{this.user.nombre} {user.apellidos}</h3>
        <h1>Edad: {user.edad}</h1>
        </div>
    );
};


export default ClockFunction;
