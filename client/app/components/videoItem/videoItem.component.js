import template from './videoItem.html';
import controller from './videoItem.controller';
import './videoItem.scss';

let videoItemComponent = {
  restrict: 'E',
  bindings: {
    id: "=",
    title: "=",
    description: "=",
    url: "=",
    albumId: "=",
    album: "=",
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default videoItemComponent;
