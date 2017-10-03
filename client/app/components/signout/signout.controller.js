class SignOutController {
  constructor(AuthenticationService, $state) {
    'ngInject';
      AuthenticationService.logout();
      $state.go('home');
  }
}

export default SignOutController;
