'use strict';

class NavbarController {
  constructor(SideNavFactory) {
    'ngInject';
    this.name = 'navbar';
    this.menuTooltip = 'Меню  ';
    this.titleNavbar = "Список задач";
    this.toggleSideNav = SideNavFactory.sideNavToggler();
  }
}

export default NavbarController;
