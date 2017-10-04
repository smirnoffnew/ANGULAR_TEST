import template from './videoItem.html';
import controller from './videoItem.controller';
import './videoItem.scss';

let videoItemComponent = {
  restrict: 'E',
  bindings: {
    album: "=",
    title: "=",
    description: "=",
    url: "="
  },
  template,
  controller
};

export default videoItemComponent;
