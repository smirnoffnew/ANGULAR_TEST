import angular from 'angular';
import NavBar from './navbar/navbar';
import SideNav from '../common/sideNav/sideNav';
import User from './user/user';
import PagesFactory from './common_factories/pagesFactory';
import AuthenticationService from './common_factories/authenticationFactory';
import UserService from './common_factories/userService'


let commonModule = angular.module('app.common', [
    NavBar,
    SideNav,
    User
])
.factory('PagesFactory', PagesFactory)
.factory('AuthenticationService', AuthenticationService)
.factory('UserService', UserService)
.name;

export default commonModule;
