/**
* @license TOTVS | Sample Menu HTML v0.1.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsApp
* @name totvsRouteConfig
* @object config
*
* @created 2018-7-9 v0.1.0
* @updated 2018-7-9 v0.1.0
*
* @requires totvs-app.module
*
* @dependencies
*
* @description App config route
*/

(function () {

    'use strict';

    angular
        .module('totvsApp')
        .config(totvsRouteConfig);

    totvsRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function totvsRouteConfig($stateProvider, $urlRouterProvider) {

        $stateProvider.state('home', {
            abstract: true,
            template: '<ui-view/>'

        }).state('home.blank', {
            url: '/'

        });

        $urlRouterProvider.otherwise('/dashboard');

    }

}());
