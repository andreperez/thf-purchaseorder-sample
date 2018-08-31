/**
* @license TOTVS
* (c) 2015-2018 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module purchasePackage
* @name purchasePackageFactory
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
        .module('purchasePackage')
        .factory('purchasePackageFactory', purchasePackageFactory);

        purchasePackageFactory.$inject = ['$totvsresource'];

    function purchasePackageFactory($totvsresource) {

        var url = 'http://localhost:3000/pacotesCompra/:id',
            factory;

        factory = $totvsresource.REST(url, {}, {});

        factory.findRecords = findRecords; // Busca todos os registros
        factory.getRecord = getRecord; // Busca um registro específico
        factory.saveRecord = saveRecord; // Salva um novo registro
        factory.updateRecord = updateRecord; // Atualiza um registro
        factory.deleteRecord = deleteRecord; // Exclui um registro

        return factory;

        // *********************************************************************************
		// *** Functions
		// *********************************************************************************

        function findRecords(parameters, callback) {
            return this.TOTVSQuery(parameters, callback);
        }

        function getRecord(id, callback) {
            return this.TOTVSGet({id: id}, callback);
        }

        function saveRecord(model, callback) {
            return this.TOTVSSave({}, model, callback);
        }

        function updateRecord(id, model, callback) {
            return this.TOTVSUpdate({id: id}, model, callback);
        }

        function deleteRecord(id, callback) {
            return this.TOTVSRemove({id: id}, callback);
        }
    }

}());
