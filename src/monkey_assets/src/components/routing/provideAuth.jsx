import React, { useContext, createContext, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import FakeAuth from "./fakeAuth";

const authContext = createContext();

const useProvideAuth = () => {
    const [user, setUser] = useState(null);
    console.log(user)
    const signin = cb => {
        return FakeAuth.signin(() => {
            setUser("user");
            cb();
        });
    };

    const signout = cb => {
        return FakeAuth.signout(() => {
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