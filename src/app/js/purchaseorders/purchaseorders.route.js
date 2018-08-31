/**
* @license TOTVS | Sample Menu HTML v0.1.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module purchaseorder
* @object module
*
* @created 2018-7-9 v0.1.0
* @updated 2018-7-9 v0.1.0
*
* @dependencies
*
* @description Modulo purchaseorder
*/

(function () {
    'use strict';

    angular
        .module('purchaseorder')
        .config(purchaseOrderRouteConfig);

    purchaseOrderRouteConfig.$inject = ['$stateProvider'];

    function purchaseOrderRouteConfig($stateProvider) {

        $stateProvider.state('purchaseorders', {
            abstract: true,
            template: '<ui-view/>'

        }).state('purchaseorders.start', {
            url: '/purchaseorders',
            controller: 'PurchaseOrderListController',
            controllerAs: 'controller',
            templateUrl: 'js/purchaseorders/purchaseorders-list.view.html'

        }).state('purchaseorders.new', {
            url: '/purchaseorders/new',
            controller: 'PurchaseOrderEditController',
            controllerAs: 'controller',
            templateUrl: 'js/purchaseorders/purchaseorders-edit.view.html'

        }).state('purchaseorders.edit', {
            url: '/purchaseorders/edit/:id',
            controller: 'PurchaseOrderEditController',
            controllerAs: 'controller',
            templateUrl: 'js/purchaseorders/purchaseorders-edit.view.html'

        });
    }

}());
