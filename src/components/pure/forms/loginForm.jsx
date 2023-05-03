import React from 'react';
import { useState } from 'react';

const LoginForm = () => {

    const initialCredentials = [
        {
            user: "",
            password: "",
        }
    ];

    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;