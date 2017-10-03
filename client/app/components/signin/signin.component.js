import template from './signin.html';
import controller from './signin.controller';
import './signin.scss';

let signinComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default signinComponent;
