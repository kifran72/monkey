import React, { useContext, createContext, useState, setState } from "react";
import { Route, Redirect } from "react-router-dom";
import FakeAuth from "./fakeAuth";
import { utils, BigNumber } from "ethers";

import Session from 'react-session-api'

Session.config(true, 0)
const ethereum = window.ethereum;
const authContext = createContext();


if (typeof window.ethereum !== 'undefined') {
    ethereum.on('accountsChanged', async (accounts) => {
        if (accounts[0] === undefined) {
            Session.clear();
            window.location.reload();
        } else {
            Session.set("userId", accounts[0])
            let accountBalance = await ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'], });
            accountBalance = utils.formatEther(BigNumber.from(accountBalance));
            Session.set("userBalance", accountBalance);
            window.location.reload();
        }
    });

    ethereum.on('chainChanged', async (chainId) => {
        let accountBalance = await ethereum.request({ method: 'eth_getBalance', params: [chainId, 'latest'], });
        accountBalance = utils.formatEther(BigNumber.from(accountBalance));
        Session.set("userId", chainId);
        Session.set("userBalance", accountBalance);
        window.location.reload();
    });
}



const useProvideAuth = () => {
    const [user, setUser] = useState(Session.get("userId"));
    const signin = async (cb) => {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        let accountBalance = await ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'], });
        accountBalance = utils.formatEther(BigNumber.from(accountBalance));
        return FakeAuth.signin(() => {
            Session.set("userId", account);
            Session.set("userBalance", accountBalance);
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