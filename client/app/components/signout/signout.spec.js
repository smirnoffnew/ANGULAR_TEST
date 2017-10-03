import SignoutModule from './signout'
import SignoutController from './signout.controller';
import SignoutComponent from './signout.component';
import SignoutTemplate from './signout.html';

describe('Signout', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SignoutModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SignoutController();
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
      expect(SignoutTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SignoutComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SignoutTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SignoutController);
      });
  });
});
