class VideoItemController {
  constructor(AlbumFactory) {
    'ngInject';
    this.name = 'videoItem';
    this.removeVideo = (albumId, id) => {
        AlbumFactory.removeVideo(albumId, id);
    }
  }
}

export default VideoItemController;
