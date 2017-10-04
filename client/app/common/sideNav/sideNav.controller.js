class SideNavController {
  constructor(SideNavFactory, PagesFactory, AuthenticationService, $scope) {
    'ngInject';
    this.toggleSideNav = SideNavFactory.sideNavToggler();
    this.pages = AuthenticationService.isUserLogged() ? PagesFactory.pagesAuthorized() : PagesFactory.pagesUnauthorized();
    let _this = this;
    $scope.$on('login', function(event, args) {
        _this.pages = AuthenticationService.isUserLogged() ? PagesFactory.pagesAuthorized() : PagesFactory.pagesUnauthorized();
    });
  }
}

export default SideNavController;
