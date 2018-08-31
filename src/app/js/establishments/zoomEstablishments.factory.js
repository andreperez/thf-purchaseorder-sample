/**
 * @license TOTVS
 * (c) 2015-2018 TOTVS S/A https://www.totvs.com
 * License: Comercial
 */

/**
 * @module establishments
 * @name zoomEstablishmentsFactory
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
        .module('establishments')
        .factory('zoomEstablishmentsFactory', zoomEstablishmentsFactory);

    zoomEstablishmentsFactory.$inject = ['establishmentsFactory', 'indexesFactory'];

    function zoomEstablishmentsFactory(establishmentsFactory, indexesFactory) {

        function countRecords() {
            var parameters = {};

            parameters._start = 0;
            parameters._limit = 1;
            parameters.tabela = 'estabelecimentos';

            indexesFactory.findRecords(parameters, function (result) {
                if (result) {
                    self.resultTotal = result[0].count;
                } else {
                    self.resultTotal = 0;
                }
            });
        }

        var zoom = {
            zoomName: 'Estabelecimentos',
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
                },
                {
                    label: 'Cidade',
                    property: 'cidade',
                    type: 'string'
                },
                {
                    label: 'Estado',
                    property: 'estado'
                }
            ],

            columnDefs: [
                {
                    headerName: 'Código',
                    field: 'id',
                    width: 30,
                    minWidth: 30
                },
                {
                    headerName: 'Nome',
                    field: 'nome',
                    width: 200,
                    minWidth: 200
                },
                {
                    headerName: 'Cidade',
                    field: 'cidade',
                    width: 150,
                    minWidth: 200
                },
                {
                    headerName: 'UF',
                    field: 'estado',
                    width: 20,
                    minWidth: 20
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

                return establishmentsFactory.findRecords(parameters, function (result) {
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

                return establishmentsFactory.getRecord(parameter, undefined);
            }
        };

        return zoom;

    }

}());
