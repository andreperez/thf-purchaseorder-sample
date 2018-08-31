/**
 * @license TOTVS
 * (c) 2015-2018 TOTVS S/A https://www.totvs.com
 * License: Comercial
 */

/**
 * @module buyers
 * @name zoomBuyersFactory
 * @object controller
 *
 * @created 2018-8-14 v0.1.0
 * @updated 2018-8-14 v0.1.0
 *
 * @requires
 *
 * @dependencies
 *
 * @description Responsável por interagir com o REST, buscando e enviado informações para o servidor (back-end)
 */

(function () {

    'use strict';

    angular
        .module('buyers')
        .factory('zoomBuyersFactory', zoomBuyersFactory);

    zoomBuyersFactory.$inject = ['buyersFactory', 'indexesFactory'];

    function zoomBuyersFactory(buyersFactory, indexesFactory) {

        function countRecords() {
            var parameters = {};

            parameters._start = 0;
            parameters._limit = 1;
            parameters.tabela = 'compradores';

            indexesFactory.findRecords(parameters, function (result) {
                if (result) {
                    self.resultTotal = result[0].count;
                } else {
                    self.resultTotal = 0;
                }
            });
        }

        var zoom = {
            zoomName: 'Mensagens',
            advancedSearch: true,
            configuration: true,

            propertyFields: [
                {
                    label: 'Código',
                    default: true,
                    property: 'id'
                },
                {
                    label: 'Nome',
                    property: 'nome'
                }
            ],

            columnDefs: [
                {
                    headerName: 'Código',
                    field: 'id',
                    width: 50,
                    minWidth: 50
                },
                {
                    headerName: 'Nome',
                    field: 'nome',
                    width: 200,
                    minWidth: 200
                }
            ],
            applyFilter: function (params) {
                var parameters = {},
                    self = this,
                    isMore = params.more,
                    start = 0;

                if (isMore) {
                    start = self.zoomResultList.length;
                } else {
                    self.zoomResultList = [];
                }

                if (params.disclaimers.length > 0) {
                    parameters.property = [];
                    parameters.value = [];

                    angular.forEach(params.disclaimers, function (disclaimer) {
                        if (disclaimer.property && disclaimer.value) {
                            parameters.property.push(disclaimer.property);
                            parameters.value.push(disclaimer.value);
                        }
                    });
                }

                parameters.start = start;
                parameters.limit = 5;

                return buyersFactory.findRecords(parameters, function (result) {
                    if (result) {
                        countRecords();
                        self.zoomResultList = result;
                    } else {
                        self.zoomResultList = [];
                        self.resultTotal = 0;
                    }
                });
            },
            getObjectFromValue: function (parameter) {
                if (!parameter) {
                    return;
                }

                return buyersFactory.getRecord(parameter, undefined);
            }
        };

        return zoom;

    }

}());
