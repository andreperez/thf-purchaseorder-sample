/**
* @license TOTVS | Sample Menu HTML v0.1.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module purchaseorder
* @name PurchaseOrderSearchController
* @object controller
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
        .module('purchaseorder')
        .controller('PurchaseOrderSearchController', PurchaseOrderSearchController);

    PurchaseOrderSearchController.$inject = ['$modalInstance', 'data'];

    function PurchaseOrderSearchController($modalInstance, data) {

        // *********************************************************************************
		// *** Variables
		// *********************************************************************************

        var self = this;

        // *********************************************************************************
		// *** Public Properties and Methods
		// *********************************************************************************

        self.advancedSearch = angular.copy(data); // copia os dados da pesquisa anterior para o controller
        self.search = search;
        self.close = close;

        // *********************************************************************************
		// *** Functions
		// *********************************************************************************

        function search() {
            $modalInstance.close(self.advancedSearch);
        }

        function close() {
            $modalInstance.dismiss();
        }
    }

}());
