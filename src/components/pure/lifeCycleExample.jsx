import React, { Component } from 'react';


class LifeCycleExample extends Component {

    constructor(props) {
        super(props);
        console.log("CONSTRUCTOR: se instancia el componente");
    }

    componentWillMount() {
        console.log("WILLMOUNT: antes del montaje");
    }
    componentDidMount() {
        console.log("DIDMOUNT: antes del renderizado");
    }
    componentWillReceiveProps(nextProps) {
        console.log("WILLRECIVEPROPS: si va a recibir nuevas props");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Si el componente debe o no actualizarse");
        console.log("Retorna true/false");
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("WILLUPDATE: antes de actualizarse");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("DIDUPDATE: cuando se ectualizo");
    }
    componentWillUnmount() {
        console.log("WILLMOUNT: antes de desaparecer");
    }


    render() {
        return (
            <div>
                
            </div>
        );
    }
}


export default LifeCycleExample;
