'use strict';

class AlbumController {
  constructor(AlbumFactory) {
    'ngInject';
    this.name = 'album';
    this.removeAlbum = (albumTitle) => {
        AlbumFactory.removeAlbum(albumTitle);
    }
  }
}

export default AlbumController;
