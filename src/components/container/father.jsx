import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setname] = useState("Wade");

    function showMessage(text) {
        alert(`Message received: ${text}`);
    }

    function updateName(newName) {
        setname(newName);
    }


    return (
        <div>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
