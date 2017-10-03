import VideoItemModule from './videoItem'
import VideoItemController from './videoItem.controller';
import VideoItemComponent from './videoItem.component';
import VideoItemTemplate from './videoItem.html';

describe('VideoItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(VideoItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new VideoItemController();
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
      expect(VideoItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = VideoItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(VideoItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(VideoItemController);
      });
  });
});
