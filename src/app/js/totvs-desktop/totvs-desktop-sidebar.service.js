/**
 * @license TOTVS | Sample Menu HTML v0.1.0
 * (c) 2015-2016 TOTVS S/A https://www.totvs.com
 * License: Comercial
 */

/**
 * @module totvsDesktop
 * @name TotvsDesktoSidebar
 * @object service
 *
 * @created 2018-7-9 v0.1.0
 * @updated 2018-7-9 v0.1.0
 *
 * @requires
 *
 * @dependencies
 *
 * @description
 */
(function () {

    'use strict';

    angular
        .module('totvsDesktop')
        .service('TotvsDesktopSidebar', TotvsDesktopSidebar);

    TotvsDesktopSidebar.$inject = [];

    function TotvsDesktopSidebar() {
        var isOpened;

        this.init = init;
        this.open = toogleMenu;
        this.close = closeMenu;

        function init() {
            var menul = document.getElementById('menu-lateral'),
                body = $('body'),
                btbHome = '.btn-home';

            isOpened = true;

            menul.addEventListener('click', toogleMenu);
            body.on('click', btbHome, toogleMenu);
        }

        function toogleMenu() {
            if (isOpened) {
                closeMenu();
            } else {
                $("#menu-lateral").show();
                $("#menu-workspace").removeClass("col-md-12");
                $("#menu-workspace").addClass("col-md-10");
            }
            isOpened = !isOpened;
        }

        function closeMenu() {
            $("#menu-lateral").hide();
            $("#menu-workspace").removeClass("col-md-10");
            $("#menu-workspace").addClass("col-md-12");
        }
    }
}());
