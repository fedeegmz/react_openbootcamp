import React, { useState } from 'react';

const LoginButton = ({loginAction}) => {
    return (
        <button onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction}) => {
    return (
        <button onClick={logoutAction}>Logout</button>
    )
}


const OptionalRender = () => {

    const [access, setAccess] = useState(true);
    const [nMessages, setNmessages] = useState(0);

    // const updateAccess = () => {
    //     setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    // let optionalButton;

    // if(access) {
    //     optionalButton = <button onClick={updateAccess}>Logout</button>
    // } else {
    //     optionalButton = <button onClick={updateAccess}>Login</button>
    // }

    let optionalButton;

    if(access) {
        optionalButton = <LoginButton
                            loginAction={loginAction}
                        ></LoginButton>;
    } else {
        optionalButton = <LogoutButton
                            logoutAction={logoutAction}
                        ></LogoutButton>;
    }

    let addMessages = () => {
        setNmessages(nMessages + 1);
    }

    return (
        <div>
            { optionalButton }

            {/* { nMessages === 0 && <p>There are no new messages</p> }
            { nMessages === 1 && <p>You have 1 new message</p> }
            { nMessages > 1 && <p>You have {nMessages} new messages</p> } */}
            
            { nMessages > 0 ?
                <p>
                    You have {nMessages} new message{ nMessages > 1 && "s" }
                </p>
                :
                <p>There are no new messages</p>
            }
            
            <button onClick={addMessages}>Add new Message</button>
        </div>
    );
}

export default OptionalRender;