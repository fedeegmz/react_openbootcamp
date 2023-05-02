import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ContactComponent = ({ is_inline }) => {
    const [inline, setInline] = useState(is_inline);

    return (
        <div>
            Conectado: Contacto { is_inline ? "En línea":"No Disponible" }
            <button onClick={ () => setInline(!inline) }>{ is_inline ? "Desconectar":"Conectar" }</button>
        </div>
    );
};


ContactComponent.propTypes = {
    is_inline: PropTypes.bool,
};


export default ContactComponent;