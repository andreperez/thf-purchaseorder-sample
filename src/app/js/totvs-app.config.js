/**
* @license TOTVS | Sample Menu HTML v0.1.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsApp
* @name totvsAppConfig
* @object config
*
* @created 2018-7-9 v0.1.0
* @updated 2018-7-9 v0.1.0
*
* @requires totvs-app.module
*
* @dependencies
*
* @description Main config
*/

(function () {

    'use strict';

    angular
        .module('totvsApp')
        .config(totvsAppConfig);

    totvsAppConfig.$inject = ['$httpProvider', 'TotvsI18nProvider'];

    function totvsAppConfig($httpProvider, TotvsI18nProvider, TOTVSProfileProvider) {

        $httpProvider.interceptors.push('totvsHttpInterceptor');

        TotvsI18nProvider.setBaseContext('/');

    }

}());
