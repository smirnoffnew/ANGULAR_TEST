class ShowAlbumController {
  constructor(AlbumFactory, $stateParams) {
    'ngInject';
    this.name = 'showAlbum';
    this.currentAlbum = AlbumFactory.getAlbum($stateParams.id)[0];
    this.submitVideoForm = () => {
        AlbumFactory.setVideo({
            title:this.title,
            description:this.description,
            url:this.url,
            albumId: this.currentAlbum.id
        });
    }
  }
}

export default ShowAlbumController;
