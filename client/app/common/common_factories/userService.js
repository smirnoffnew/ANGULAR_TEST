"use strict";
let UserService = () => {
    'ngInject';

    let user = false;

    let getUser = () => {
        return user;
    };

    let setUser = (userName) => {
        return user = userName;
    };

    let clearUser = () => {
        return user = false;
    };

    return { getUser, setUser, clearUser };
};

export default UserService;
