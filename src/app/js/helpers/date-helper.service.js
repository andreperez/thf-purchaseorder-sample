/**
* @license TOTVS | Sample Menu HTML v0.1.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module dateHelperModule
* @name dateHelperService
*
* @created 2018-8-16 v0.1.0
* @updated 2018-8-16 v0.1.0
*
* @description Date functions and helpers
*/

(function () {

    'use strict';

    angular
        .module('dateHelperModule')
        .factory('dateHelperService', dateHelperService);

    function dateHelperService() {

        function pad(n, width, z) {
            z = z || '0';
            n = n + '';
            return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
        }

        /**
         * @param {Date string} text
         * @example '2018-01-04T07:00:13.787Z'
         * @returns Date object
         */
        let textToDate = function(text) {

            let dataArray = text.split("-");
            dataArray[2] = dataArray[2].substring(0, 2);

            let date = new Date(dataArray[0], parseInt(dataArray[1]) - 1, dataArray[2]);

            return date;
        }

        let dateToText = function(date) {
            var text = pad(date.getDate(), 2) + '/' +
                pad( (parseInt(date.getMonth()) + 1), 2) + '/' +
                date.getFullYear();
            return text;
        }

        return {
            textToDate: textToDate,
            dateToText: dateToText
        };

    }

}());
