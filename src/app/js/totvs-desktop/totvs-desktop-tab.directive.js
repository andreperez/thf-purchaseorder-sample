/**
* @license TOTVS | Sample Menu HTML v0.1.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsDesktop
* @name totvsDesktopTab
* @object directive
*
* @created 2018-7-9 v0.1.0
* @updated 2018-7-9 v0.1.0
*
* @requires
*
* @dependencies
*
* @description
*
* @restrict E
*/

(function () {

    'use strict';

    angular
        .module('totvsDesktop')
        .directive('totvsDesktopTab', totvsDesktopTab);

    totvsDesktopTab.$inject = [];

    function totvsDesktopTab() {
        var directive = {
            templateUrl: 'js/totvs-desktop/totvs-desktop-tab.directive.html',
            restrict: 'E',
            replace: true,
            scope: {
                tOptions: '='
            }
        };

        return directive;
    }

}());
