'use strict';
let SideNavFactory = ($mdSidenav) => {
    'ngInject';
    var mdComponentId = 'leftSideNav';
    function sideNavToggler() {
        return function() {
            $mdSidenav(mdComponentId).toggle();
        };
    };
    return {sideNavToggler};
};

export default SideNavFactory;
