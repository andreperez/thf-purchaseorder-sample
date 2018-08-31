/**
 * @license TOTVS
 * (c) 2015-2018 TOTVS S/A https://www.totvs.com
 * License: Comercial
 */

/**
 * @module paymentConditions
 * @name zoomPaymentConditionsFactory
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
        .module('paymentConditions')
        .factory('zoomPaymentConditionsFactory', zoomPaymentConditionsFactory);

    zoomPaymentConditionsFactory.$inject = ['paymentConditionsFactory', 'indexesFactory'];

    function zoomPaymentConditionsFactory(paymentConditionsFactory, indexesFactory) {

        function countRecords() {
            var parameters = {};

            parameters._start = 0;
            parameters._limit = 1;
            parameters.tabela = 'condicoesPagamento';

            indexesFactory.findRecords(parameters, function (result) {
                if (result) {
                    self.resultTotal = result[0].count;
                } else {
                    self.resultTotal = 0;
                }
            });
        }

        var zoom = {
            zoomName: 'Condições de Pagamento',
            advancedSearch: true,
            configuration: true,

            propertyFields: [
                {
                    label: 'Código',
                    default: true,
                    property: 'id'
                },
                {
                    label: 'Descrição',
                    property: 'descricao',
                    type: 'string'
                },
                {
                    label: '% Desconto Pag. Antecipado',
                    property: 'percentualDescontoPagamentoAntecipado',
                    type: 'number'
                },
                {
                    label: '% Dupl. Desc. Antecipado',
                    property: 'duplicataDescontoAntecipado',
                    type: 'number'
                },
                {
                    label: 'Nº Parc.',
                    property: 'numeroParcelas',
                    type: 'number'
                },
                {
                    label: 'Tab. Financeira',
                    property: 'tabelaFinanceira'
                },
                {
                    label: 'Dias Vcto.',
                    property: 'diaMesVencimento',
                    type: 'number'
                },
                {
                    label: 'Nº Dias Ant.',
                    property: 'numeroDiasAntecipacao',
                    type: 'number'
                },
                {
                    label: 'Dias Mês Base',
                    property: 'diaMesBase',
                    type: 'number'
                }
            ],

            columnDefs: [
                {
                    headerName: 'Cód',
                    field: 'id',
                    width: 40,
                    minWidth: 40
                },
                {
                    headerName: 'Descrição',
                    field: 'descricao',
                    width: 200,
                    minWidth: 200
                },
                {
                    headerName: '% Desc. Pag. Ant.',
                    field: 'percentualDescontoPagamentoAntecipado',
                    width: 70,
                    minWidth: 70
                },
                {
                    headerName: '% Dupl. Desc. Antecipado',
                    field: 'duplicataDescontoAntecipado',
                    width: 70,
                    minWidth: 70
                },
                {
                    headerName: 'Nº Parc.',
                    field: 'numeroParcelas',
                    width: 70,
                    minWidth: 70
                },
                {
                    headerName: 'Tab. Fin',
                    field: 'tabelaFinanceira',
                    width: 70,
                    minWidth: 70
                },
                {
                    headerName: 'Dias Vcto',
                    field: 'diaMesVencimento',
                    width: 70,
                    minWidth: 70
                },
                {
                    headerName: 'Nº Dias Ant.',
                    field: 'numeroDiasAntecipacao',
                    width: 70,
                    minWidth: 70
                },
                {
                    headerName: 'Dias Mês Base',
                    field: 'diaMesBase',
                    width: 60,
                    minWidth: 60
                },
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

                return paymentConditionsFactory.findRecords(parameters, function (result) {
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

                return paymentConditionsFactory.getRecord(parameter, undefined);
            }
        };

        return zoom;

    }

}());
