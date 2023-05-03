import React, { Component, useEffect } from 'react'

export class didUpdate extends Component {
  
    componentDidUpdate() {
        // Comportamiento cuando el componente 
        // recibe nuevos props o cambia su estado
        console.log("componentDidUpdate");
    }
  
    render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        // Comportamiento cuando el componente 
        // recibe nuevos props o cambia su estado
        console.log("componentDidUpdate");
    });

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}
