/**
* @license TOTVS | Sample Menu HTML v0.1.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsMenu
* @name totvsMenuFavorites
* @object factory
*
* @created 2018-7-9 v0.1.0
* @updated 2018-7-9 v0.1.0
*
* @requires totvs-menu.module
*
* @dependencies
*
* @description
*/

(function () {

    'use strict';

    angular
        .module('totvsDesktop')
        .factory('totvsDesktopMenuFavorites', totvsDesktopMenuFavorites);

    totvsDesktopMenuFavorites.$inject = [];

    function totvsDesktopMenuFavorites() {

        var favorites = [],
            factory = {
                getProgramFavorites: getProgramFavorites
            };

        return factory;

        function getProgramFavorites(callback) {
            if (favorites.length === 0) {
                favorites = GenerateFavorites();
            }

            callback(favorites);
        }

    }

    // ********************************************************************
    // Function - Simulation
    // ********************************************************************

    function GenerateFavorites() {
        var i,
            favorites = [];

        favorites.push(
            new Favorite('Sample of Dashboard', '/dashboard'),
            new Favorite('Pedidos de Compra', '/purchaseorders')
        );

        return favorites;
    }

    function Favorite(program, url) {
        this.program = program || '[program]';
        this.url = url || '/';
    }

}());
