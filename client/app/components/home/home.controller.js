'use strict';

class HomeController {
  constructor(UserService, AlbumFactory, $scope) {
    'ngInject';

    this.isUserLogged = UserService.getUser();
    this.albums = AlbumFactory.getAlbums();
    let _this = this;
    $scope.$on('albumsEdited', function(event, args) {
        _this.albums = AlbumFactory.getAlbums();;
    });

    this.submitAlbumForm = () => {
        AlbumFactory.setAlbum({title:this.title, image:this.image});
        console.log(this.title, this.image);
    }
  }
}

export default HomeController;
