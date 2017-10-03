class SideNavController {
  constructor(SideNavFactory, PagesFactory, UserService, $scope) {
    'ngInject';
    this.toggleSideNav = SideNavFactory.sideNavToggler();
    this.pages = !UserService.getUser() ? PagesFactory.pagesAuthorized() : PagesFactory.pagesUnauthorized();
    let _this = this;
    $scope.$on('login', function(event, args) {
        _this.pages = !UserService.getUser() ? PagesFactory.pagesAuthorized() : PagesFactory.pagesUnauthorized();
    });
  }
}

export default SideNavController;
