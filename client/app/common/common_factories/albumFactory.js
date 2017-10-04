"use strict";
let AlbumFactory = ($rootScope) => {
    'ngInject';

    let albums = [
        {
            id: "1",
            title: "First Album",
            description: "some simple album description",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Record-Album-02.jpg",
            videos:[
                {
                    id: "1",
                    album_id: "1",
                    url: "https://www.youtube.com/watch?v=bLtMCVN0RZo",
                    title: "Amatory 1",
                    description: "some short description"
                },
                {
                    id: "2",
                    album_id: "1",
                    url: "https://www.youtube.com/watch?v=_4n4P9KAdU0",
                    title: "Amatory 2",
                    description: "some short description"
                },
                {
                    id: "3",
                    album_id: "1",
                    url: "https://www.youtube.com/watch?v=IA9V6p6KgmE",
                    title: "Amatory 3",
                    description: "some short description"
                },
            ]
        },
        {
            id: "2",
            title: "Second Album",
            description: "some simple album description",
            image: "http://www.billboard.com/files/styles/900_wide/public/media/Joy-Division-Unknown-Pleasures-album-covers-billboard-1000x1000.jpg",
            videos:[
                {
                    id: "1",
                    album_id: "2",
                    url: "https://www.youtube.com/watch?v=s39Oq8XX5ek",
                    title: "Trap 1",
                    description: "some short description"
                },
                {
                    id: "2",
                    album_id: "2",
                    url: "https://www.youtube.com/watch?v=NxNY-_uP4pk",
                    title: "Trap 2",
                    description: "some short description"
                },
                {
                    id: "3",
                    album_id: "2",
                    url: "https://www.youtube.com/watch?v=4XZ35GqmgC8",
                    title: "Trap 3",
                    description: "some short description"
                },
            ]
        },
        {
            id: "3",
            title: "Third Album",
            description: "some simple album description",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJQVU2F8MAF-GPpJHomuk6_ETa8D1CHiL05IzZzENr-8C9YUa",
            videos:[
                {
                    id: "1",
                    album_id: "3",
                    url: "https://www.youtube.com/watch?v=tM-knH-r7fo",
                    title: "Other 1",
                    description: "some short description"
                },
                {
                    id: "2",
                    album_id: "3",
                    url: "https://www.youtube.com/watch?v=AKS-N2AaxRE",
                    title: "Other 2",
                    description: "some short description"
                }
            ]
        }
    ];

    let defaultImage = 'https://xage.ru/media/posts/2014/11/10/album-covers-2014.jpg';
    let defaultTitle = 'Album title';
    let defaultDescription = 'some short video description';

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

    let getAlbum = (id) => {
        return albums.filter( (currentItem) => {
            return id == currentItem.id;
        });
    };

    let removeVideo = (albumId, id) => {
        for (var i in albums) {
            if (albums[i].id == albumId) {
                albums[i].videos = albums[i].videos.filter( (currentItem) => {
                    return id !== currentItem.id;
                });
                $rootScope.$broadcast('albumsEdited');
                break;
            }
        }
    };

    let setVideo = ( videoObject ) => {
        videoObject.title = videoObject.title ? videoObject.title : defaultTitle;
        videoObject.description = videoObject.description ? videoObject.description : defaultDescription;
        for (var i in albums) {
            if (albums[i].id == videoObject.albumId) {
                videoObject.id = albums[i].videos.length;
                albums[i].videos.unshift(videoObject);
                $rootScope.$broadcast('albumsEdited');
                break;
            }
        }
    };


    return { getAlbums, setAlbum, removeAlbum, getAlbum, removeVideo, setVideo };
};

export default AlbumFactory;
