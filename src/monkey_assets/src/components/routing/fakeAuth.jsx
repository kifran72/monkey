const FakeAuth = {
    isAuthenticated: false,
    signin(cb) {
        FakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        FakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

export default FakeAuth