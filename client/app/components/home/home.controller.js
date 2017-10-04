'use strict';

class HomeController {
  constructor(UserService) {
    'ngInject';
    this.title = 'Welcome to angular YouTube albums application';
    this.isUserLogged = UserService.getUser();

  }
}

export default HomeController;
