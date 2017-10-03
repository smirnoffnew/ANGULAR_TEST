"use strict";
let AuthenticationService = (UserService) => {
    'ngInject';

    function check(username, password) {
        var authorizedUser = {
            username: 'asdf',
            password: 'asdf'
        };
        return authorizedUser.username == username && authorizedUser.password == password
    }

    function login (username, password, callback) {
        if ( check(username, password) ) {
            UserService.setUser(username);
            callback('You is logged');
        } else {
            callback('Username or password is incorrect');
        }
    };

    function logout() {
        UserService.clearUser();
    };

    return {login, logout};
};

export default AuthenticationService;
