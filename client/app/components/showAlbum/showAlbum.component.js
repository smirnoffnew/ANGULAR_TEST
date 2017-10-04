import template from './showAlbum.html';
import controller from './showAlbum.controller';
import './showAlbum.scss';

let showAlbumComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default showAlbumComponent;
