'use strict';
let PagesFactory = () => {
    'ngInject';

    function pagesAuthorized() {
        return [
            {link:'home', title:'home'},
            {link:'about', title:'about'},
            {link:'sign-out', title:'sign out'}
        ];
    }

    function pagesUnauthorized() {
        return [
            {link:'sign-in', title:'sign in'},
            {link:'about', title:'about'}
        ];
    }

    return {pagesAuthorized, pagesUnauthorized};
};

export default PagesFactory;
