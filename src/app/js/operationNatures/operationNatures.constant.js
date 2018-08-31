/**
 * @license TOTVS
 * (c) 2015-2018 TOTVS S/A https://www.totvs.com
 * License: Comercial
 */

/**
 * @module operationNatures
 * @name naturesOfOperation
 * @object controller
 *
 * @created 2018-8-13 v0.1.0
 * @updated 2018-8-13 v0.1.0
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
        .module('operationNatures')
        .constant('naturesOfOperation', [
            {
                value: 'Compra',
                label: 'Compra',
                disabled: false
            },
            {
                value: 'Serviço',
                label: 'Serviço',
                disabled: false
            },
            {
                value: 'Beneficiamento',
                label: 'Beneficiamento',
                disabled: false
            }
        ]);

}());
