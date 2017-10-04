"use strict";
let AuthenticationService = (UserService, $rootScope) => {
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
            $rootScope.$broadcast('login');
            callback('You is logged');
        } else {
            callback('Username or password is incorrect');
        }
    };

    function logout() {
        UserService.clearUser();
        $rootScope.$broadcast('login');
    };

    function isUserLogged() {
       return  UserService.getUser() ? true : false;
    };

    return {login, logout, isUserLogged};
};

export default AuthenticationService;
