import React, { Component, useEffect } from 'react'

export class didMount extends Component {
  
    componentDidMount() {
        // Comportamiento antes de que el componente
        // sea añadido al DOM
        console.log("componentDidMount");
    }
  
    render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    )
  }
}

export const DidMountHook = () => {

    useEffect(() => {
        // Comportamiento antes de que el componente
        // sea añadido al DOM
        console.log("componentDidMount");
    }, {});

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}
