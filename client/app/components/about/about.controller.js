class AboutController {
  constructor($stateParams) {
    'ngInject';
    this.title = 'About page';
    console.log('$stateParams',$stateParams.id);
  }
}

export default AboutController;

