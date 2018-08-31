/**
* @license TOTVS | Sample Menu HTML v0.1.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module customer
* @object module
*
* @created 2018-7-9 v0.1.0
* @updated 2018-7-9 v0.1.0
*
* @dependencies
*
* @description Modulo customer
*/

(function () {
    'use strict';

    angular
        .module('customer')
        .config(customerRouteConfig);

    customerRouteConfig.$inject = ['$stateProvider'];

    function customerRouteConfig($stateProvider) {

        $stateProvider.state('customers', {
            abstract: true,
            template: '<ui-view/>'

        }).state('customers.start', {
            url: '/customers',
            controller: 'CustomerListController',
            controllerAs: 'controller',
            templateUrl: 'js/customers/customers-list.view.html'

        }).state('customers.detail', {
            url: '/customers/detail/:id',
            controller: 'CustomerDetailController',
            controllerAs: 'controller',
            templateUrl: 'js/customers/customers-detail.view.html'

        }).state('customers.new', {
            url: '/customers/new',
            controller: 'CustomerEditController',
            controllerAs: 'controller',
            templateUrl: 'js/customers/customers-edit.view.html'

        }).state('customers.edit', {
            url: '/customers/edit/:id',
            controller: 'CustomerEditController',
            controllerAs: 'controller',
            templateUrl: 'js/customers/customers-edit.view.html'

        });
    }

}());
