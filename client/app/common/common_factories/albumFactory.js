"use strict";
let AlbumFactory = ($rootScope) => {
    'ngInject';

    let albums = [
        {
            id: "1",
            title: "First Album",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Record-Album-02.jpg"
        },
        {
            id: "2",
            title: "Second Album",
            image: "http://www.billboard.com/files/styles/900_wide/public/media/Joy-Division-Unknown-Pleasures-album-covers-billboard-1000x1000.jpg"
        },
        {
            id: "3",
            title: "Third Album",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJQVU2F8MAF-GPpJHomuk6_ETa8D1CHiL05IzZzENr-8C9YUa"
        }
    ];

    let defaultImage = 'https://xage.ru/media/posts/2014/11/10/album-covers-2014.jpg';
    let defaultTitle = 'Album title';

    let getAlbums = () => {
        return albums;
    };

    let setAlbum = (item) => {
        item.image = item.image ? item.image : defaultImage;
        item.title = item.title ? item.title : defaultTitle;
        item.id = albums.length;
        albums.unshift(item);
        $rootScope.$broadcast('albumsEdited');
    };

    let removeAlbum = (id) => {
        albums = albums.filter( (currentItem) => {
            return id !== currentItem.id;
        });
        $rootScope.$broadcast('albumsEdited');
    };


    return { getAlbums, setAlbum, removeAlbum };
};

export default AlbumFactory;
