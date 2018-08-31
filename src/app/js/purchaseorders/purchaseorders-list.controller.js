/**
 * @license TOTVS | Sample Menu HTML v0.1.0
 * (c) 2015-2016 TOTVS S/A https://www.totvs.com
 * License: Comercial
 */

/**
 * @module purchaseorder
 * @name PurchaseOrderListController
 * @object controller
 *
 * @created 2018-7-9 v0.1.0
 * @updated 2018-7-9 v0.1.0
 *
 * @requires
 *
 * @dependencies
 *
 * @description Controller responsável por listar os registros
 */

(function () {

    'use strict';

    angular
        .module('purchaseorder')
        .controller('PurchaseOrderListController', PurchaseOrderListController);

    PurchaseOrderListController.$inject = [
        '$scope',
        '$modal',
        'totvs.app-notification.Service',
        'dateFilter',
        'i18nFilter',
        'purchaseOrderFactory',
        'indexesFactory'
    ];

    function PurchaseOrderListController($scope, $modal, notification, dateFilter, i18nFilter, purchaseOrderFactory, indexesFactory) {

        // *********************************************************************************
        // *** Variables
        // *********************************************************************************

        var self = this,
            advancedSearch = {};

        // *********************************************************************************
        // *** Public Properties and Methods
        // *********************************************************************************

        self.records = [];
        self.recordsCount = 0;
        self.disclaimers = [];
        self.searchText = '';
        self.search = search;
        self.loadRecords = loadRecords;
        self.openAdvancedSearch = openAdvancedSearch;
        self.removeDisclaimer = removeDisclaimer;
        self.applyEdit = applyEdit;
        self.onRemove = onRemove;
        self.isLoading = false;
        self.limitRegister = 10;

        init();

        // *********************************************************************************
        // *** Controller Initialize
        // *********************************************************************************

        function init() {

            countRecords();
            loadRecords(false);

        }

        // *********************************************************************************
        // *** Functions
        // *********************************************************************************

        // TODO: usar a tabela nova de índices

        function countRecords() {
            var parameters = {};

            parameters._start = 0;
            parameters._limit = 1;
            parameters.tabela = 'pedidosCompra';

            indexesFactory.findRecords(parameters, function (result) {
                if (result) {
                    self.recordsCount = result[0].count;
                } else {
                    self.recordsCount = 0;
                }
            });
        }

        function loadRecords(isMore) {

            self.isLoading = true;

            var parameters = {},
                start = 0;

            // paginação
            if (isMore) {
                //start = self.records.length;
                self.limitRegister = self.limitRegister + 10;
            } else {
                self.records = [];
            }

            // pesquisa
            if (self.disclaimers.length > 0) {
                parameters.property = [];
                parameters.value = [];

                angular.forEach(self.disclaimers, function (disclaimer) {
                    if (disclaimer.property && disclaimer.value) {
                        parameters.property.push(disclaimer.property);
                        parameters.value.push(disclaimer.value);
                    }
                });
            }

            parameters._start = start;
            parameters._limit = self.limitRegister;

            purchaseOrderFactory.findRecords(parameters, function (result) {
                if (result) {
                    self.records = result;
                } else {
                    self.records = [];
                }

                self.isLoading = false;
            });
        }

        function search() {
            self.disclaimers = [];

            if (self.searchText) {
                addDisclaimer('name', '*' + self.searchText + '*', 'Pesquisa: ' + self.searchText);
            }

            self.loadRecords(false);
        }

        function openAdvancedSearch() {
            var modalInstance = $modal.open({
                templateUrl: '/js/purchaseorders/purchaseorders-search.view.html',
                controller: 'PurchaseOrderSearchController as controller',
                size: 'md',
                resolve: {
                    data: function () {
                        return angular.copy(advancedSearch);
                    }
                }
            });

            modalInstance.result.then(function (params) {
                advancedSearch = angular.copy(params);

                addDisclaimers();
            });
        }

        function addDisclaimer(property, value, label) {
            self.disclaimers.push({
                property: property,
                value: value,
                title: label
            });
        }

        // TODO: corrigir os campos
        function addDisclaimers() {

            var filter = angular.copy(advancedSearch),
                fnFormatDate = function (date) {
                    return dateFilter(date, 'dd/MM/yyyy');
                };

            removeDisclaimers();

            if (filter.name) {
                addDisclaimer('name', '*' + filter.name + '*', 'Nome contém "' + filter.name + '"');
            }


            if (filter.address_street) {
                addDisclaimer('address_street', '*' + filter.address_street + '*', 'Endereço contém "' + filter.address_street + '"');
            }

            if (filter.doc_cpf) {
                addDisclaimer('doc_cpf', filter.doc_cpf, 'CPF igual a ' + filter.doc_cpf);
            }

            if (filter.birthday) {
                if (filter.birthday.startDate && filter.birthday.endDate) {
                    addDisclaimer(
                        'birthday',
                        filter.birthday.startDate.valueOf() + ';' + filter.birthday.endDate.valueOf(),
                        'Data de aniversário entre ' + fnFormatDate(filter.birthday.startDate) + ' e ' + fnFormatDate(filter.birthday.endDate)
                    );
                } else if (filter.birthday.startDate) {
                    addDisclaimer(
                        'birthday',
                        '>=' + filter.birthday.startDate.valueOf(),
                        'Data de criação incia em ' + fnFormatDate(filter.birthday.startDate)
                    );
                } else if (filter.birthday.endDate) {
                    addDisclaimer(
                        'birthday',
                        '<=' + filter.birthday.endDate.valueOf(),
                        'Data de criação final em ' + fnFormatDate(filter.birthday.endDate)
                    );
                }
            }

            self.loadRecords();
        }

        function removeDisclaimer(disclaimer) {
            // pesquisa e remove o disclaimer do array
            var index = self.disclaimers.indexOf(disclaimer);

            if (index !== -1) {
                self.disclaimers.splice(index, 1);
            }

            if (disclaimer.property === 'name') {
                self.searchText = '';
            }

            self.loadRecords();
        }

        function removeDisclaimers() {
            self.disclaimers = [];
        }

        function applyEdit(newValue, field, purchaseorder) {
            var update = {};

            if (newValue !== purchaseorder[field]) {
                update[field] = newValue;

                purchaseOrderFactory.updateRecord(purchaseorder.id, update);
            }
        }

        function onRemove(record) {
            notification.question({
                title: 'l-question',
                text: i18nFilter('l-confirm-delete-operation'),
                cancelLabel: 'l-no',
                confirmLabel: 'l-yes',
                callback: function (isPositiveResult) {
                    var index;

                    if (isPositiveResult) {
                        purchaseOrderFactory.deleteRecord(record.id, function (result) {
                            if (result) {

                                index = self.records.indexOf(record);

                                if (index !== -1) {
                                    self.records.splice(index, 1);
                                    self.recordsCount -= 1;

                                    // Atualiza os últimos índices
                                    indexesFactory.findRecords({
                                        "tabela": "pedidosCompra"
                                    }).then(function(_index) {
                                        var indice = _index[0];
                                        indice.count = parseInt(indice.count) - 1;

                                        indexesFactory.updateRecord(indice.id, indice);
                                    });

                                    notification.notify({
                                        type: 'info',
                                        title: 'Exclusão de pedido',
                                        detail: `Pedido ${record.pedido} excluido com sucesso!`
                                    });
                                }
                            }
                        });
                    }
                }
            });
        }
    }

}());
