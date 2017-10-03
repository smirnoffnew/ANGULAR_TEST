'use strict';
let PagesFactory = () => {
    'ngInject';

    function pagesAuthorized() {
        return [
            {link:'home', title:'home'},
            {link:'sign-in', title:'sign in'},
            {link:'about', title:'about'}
        ];
    }

    function pagesUnauthorized() {
        return [
            {link:'home', title:'home'},
            {link:'sign-out', title:'sign out'},
            {link:'about', title:'about'}
        ];
    }

    return {pagesAuthorized, pagesUnauthorized};
};

export default PagesFactory;
