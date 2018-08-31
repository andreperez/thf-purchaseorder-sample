/**
* @license TOTVS | Sample Menu HTML v0.1.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module dashboard
* @object module
*
* @created 2018-7-9 v0.1.0
* @updated 2018-7-9 v0.1.0
*
* @dependencies
*
* @description Modulo dashboard
*/

(function () {
    'use strict';

    angular
        .module('dashboard')
        .config(dashboardRouteConfig);

    dashboardRouteConfig.$inject = ['$stateProvider'];

    function dashboardRouteConfig($stateProvider) {

        $stateProvider.state('dashboard', {
            abstract: true,
            template: '<ui-view/>'

        }).state('dashboard.start', {
            url: '/dashboard',
            controller: 'DashboardController',
            controllerAs: 'controller',
            templateUrl: 'js/dashboard/dashboard.view.html'

        }).state('dashboard.settings', {
			url: '/dashboard/settings',
            controller: 'DashboardSettingsController',
            controllerAs: 'controller',
            templateUrl: 'js/dashboard/dashboard-settings.view.html'

        });
    }

}());
