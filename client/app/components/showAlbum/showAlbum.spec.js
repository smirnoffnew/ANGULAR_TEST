import ShowAlbumModule from './showAlbum'
import ShowAlbumController from './showAlbum.controller';
import ShowAlbumComponent from './showAlbum.component';
import ShowAlbumTemplate from './showAlbum.html';

describe('ShowAlbum', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ShowAlbumModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ShowAlbumController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ShowAlbumTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ShowAlbumComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ShowAlbumTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ShowAlbumController);
      });
  });
});
