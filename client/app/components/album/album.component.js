import template from './album.html';
import controller from './album.controller';
import './album.scss';

let albumComponent = {
  restrict: 'E',
  bindings: {
    id: "=",
    title: "=",
    description: "=",
    image: "="
  },
  controllerAs: 'vm',
  template,
  controller
};

export default albumComponent;
