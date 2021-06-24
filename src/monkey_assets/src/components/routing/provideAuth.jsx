import React, { useContext, createContext, useState, setState } from "react";
import { Route, Redirect } from "react-router-dom";
import FakeAuth from "./fakeAuth";
import detectEthereumProvider from "@metamask/detect-provider";
import Session from 'react-session-api'
Session.config(true, 0)
const ethereum = window.ethereum;

const authContext = createContext();

ethereum.on('accountsChanged', (accounts) => {
    if (accounts[0] === undefined) {
        Session.clear();
        window.location.reload();
        console.log('ici accountsClear')
    } else {
        Session.set("user", accounts[0])
        window.location.reload();
        console.log('ici accountsChanged')
    }
});


ethereum.on('chainChanged', (chainId) => {
    Session.set("user", chainId)
    window.location.reload();
});

ethereum.on('disconnect', (user) => {
    Session.clear();
    console.log('ici disconnect')
    // window.location.reload();
});

// let test = ethereum.isConnected();

// if (!test) {
//     Session.clear();
//     console.log('notConnected')
// }


const useProvideAuth = () => {
    const [user, setUser] = useState(Session.get("user"));
    console.log(user)
    const signin = async (cb) => {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        return FakeAuth.signin(() => {
            Session.set("user", account);
            setUser(account);
            cb();
        });
    };

    const signout = cb => {
        return FakeAuth.signout(() => {
            Session.clear();
            setUser(null);
            cb();
        });
    };

    return {
        user,
        signin,
        signout
    };
}


const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

const UseAuth = () => {
    return useContext(authContext);
}

const PrivateRoute = ({ children, ...rest }) => {
    let auth = UseAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export { ProvideAuth, PrivateRoute, UseAuth };