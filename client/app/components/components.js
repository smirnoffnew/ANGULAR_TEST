import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import SignIn from './signin/signin';
import SignOut from './signout/signout';
import VideoComponent from './videoItem/videoItem';
import AlbumComponent from './album/album';
import ShowAlbum from './showAlbum/showAlbum';


let componentModule = angular.module('app.components', [
  Home,
  About,
  SignIn,
  SignOut,
  VideoComponent,
  AlbumComponent,
  ShowAlbum
])
.name;

export default componentModule;
