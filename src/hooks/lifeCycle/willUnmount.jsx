import React, { Component, useEffect } from 'react'

export class WillUnmount extends Component {
  
    componentWillUnmount() {
        // Comportamiento antes de 
        // que el componente desaparezca
        console.log("componentWillUnmount");
    }
  
    render() {
    return (
      <div>
        <h1>WillUnmount</h1>
      </div>
    )
  }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        // Comportamiento antes de 
        // que el componente desaparezca
        return () => {
        console.log("componentWillUnmount");
        };
    }, []);

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}
