/**
* @license TOTVS | Sample Menu HTML v0.1.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module purchaseorder
* @name PurchaseOrderEditController
* @object controller
*
* @created 2018-7-9 v0.1.0
* @updated 2018-7-9 v0.1.0
*
* @requires
*
* @dependencies
*
* @description Controller responsável por exibir os detalhes
*/

(function () {

    'use strict';

    angular
        .module('purchaseorder')
        .controller('PurchaseOrderEditController', PurchaseOrderEditController);

    PurchaseOrderEditController.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$stateParams',
        '$state',
        '$window',
        'totvs.app-notification.Service',
        'i18nFilter',
        'purchaseOrderFactory',
        'dateHelperService',
        'naturesOfOperation',
        'indexesFactory',
        'providersFactory'
    ];

	function PurchaseOrderEditController(
        $rootScope,
        $scope,
        $timeout,
        $stateParams,
        $state,
        $window,
        notification,
        i18nFilter,
        purchaseOrderFactory,
        dateHelperService,
        naturesOfOperation,
        indexesFactory,
        providersFactory
    ) {

		// *********************************************************************************
		// *** Variables
		// *********************************************************************************
        var self = this;
        let _dateHelperService = dateHelperService;     // Inicializa o serviço para não haver problema de sincronia

        // *********************************************************************************
		// *** Public Properties
		// *********************************************************************************
        self.purchaseorder = {};        // Pedido de Compra no modo Novo/Edição
        self.isUpdate = false;          //Indica se é alteração
        self.isLoading = false;         // Indica se está carregando os dados
        self.urgenciaOptions = [];      // Urgência - combobox
        self.dataMinima = new Date(2000, 0, 1);
        self.dataMaxima = new Date();
        self.group = {};                //Controle de abertura dos agrupadores
        self.portage = [];              // Frete
        self.transportType = [];         // Via Transporte
        self._naturesOfOperation = naturesOfOperation;
        self.tooltipImprimePedido = "<b><i>Deve ser marcado para impressão ou re-impressão do pedido</i></b>";
        self.index = {};

        // *********************************************************************************
		// *** Public Methods
		// *********************************************************************************

        // CRUD
        self.cancel = cancel;
        self.save = save;
        self.saveNew = saveNew;

        //Expande e Contrai os agrupadores
        self.onExpandAll = onExpandAll;

        // Valida data
        self.validateDate = validateDate;

        self.isInvalidForm = isInvalidForm;

        self.fornecedorChange = fornecedorChange;

        // *********************************************************************************
		// *** Inicializadores padrão
		// *********************************************************************************
        init();

        // *********************************************************************************
		// *** Controller Initialize
		// *********************************************************************************

        function init() {
            self.isUpdate = $state.is('purchaseorders.edit');

            if ($stateParams && $stateParams.id) {
                loadRecord($stateParams.id);
            }
            else {
                getNewPurchaseOrder();
            }

            self.urgenciaOptions = [
                {value: 'Normal', label: 'Normal'},
                {value: 'Emergencial', label: 'Emergencial'}
            ];

            self.group = {
                transport : { open : false },
                complement  : { open : false }
            };

            self.portage = [
                {value: 1, label: 'Normal'},
                {value: 2, label: 'A Pagar'}
            ];

            self.transportType = [
                {value: 1, label: 'Rodoviário'},
                {value: 2, label: 'Aeroviário'},
                {value: 3, label: 'Marítmo'},
                {value: 4, label: 'Ferroviário'},
                {value: 4, label: 'Rodoferroviário'},
                {value: 4, label: 'Outros'}
            ];
        }

		// *********************************************************************************
		// *** Functions
		// *********************************************************************************

        function fornecedorChange() {
            providersFactory.getRecord(self.purchaseorder.fornecedor_id, function(fornecedor) {
                self.purchaseorder.nomeAbreviado = fornecedor.nomeAbreviado;
                self.purchaseorder.nomeFornecedor = fornecedor.nome;
                self.purchaseorder.cnpj = fornecedor.cnpj;
            });
        }

		function loadRecord(id) {
            self.isLoading = true;

            purchaseOrderFactory.getRecord(id, function (purchaseorder) {
				if (purchaseorder && purchaseorder.id) {
                    self.purchaseorder = purchaseorder;
				} else {
                    notification.notify({
                        type: 'warning',
                        title: '404',
                        detail: 'Registro "' + id + '" não encontrado, mas você pode inserir um novo registro. =P'
                    });

                    $state.go('purchaseorders.new');
                }
			}).then(function(_purchaseorder) {
                $timeout( function(){
                    _purchaseorder.dataEmissao = _dateHelperService.textToDate(_purchaseorder.dataEmissao);
                }, 500 );
                self.isLoading = false;
            });
        }

        function getNewPurchaseOrder() {

            self.isLoading = true;

            indexesFactory.findRecords({
                "tabela": "pedidosCompra"
            }).then(function(_index) {
                self.index = _index[0];
                self.index.lastIndex = parseInt(self.index.lastIndex) + 1;
                self.index.count = parseInt(self.index.count) + 1;

                self.purchaseorder = {
                    "id": self.index.lastIndex,
                    "pedido": self.index.lastIndex,
                    "urgencia": "Normal",
                    "fornecedor_id": "",
                    "nomeAbreviado": "",
                    "nomeFornecedor": "",
                    "cnpj": "",
                    "valorTotal": "",
                    "valorAberto": "",
                    "natureza": "Serviço",
                    "statusImpressao": "",
                    "dataEmissao": new Date(),
                    "contrato": "",
                    "condicaoPagamento_id": "",
                    "estabelecimentoEntrega_id": "",
                    "estabelecimentoCobranca_id": "",
                    "estabelecimentoGestor_id": "",
                    "emitenteEntrega_id": "",
                    "transportador_id": "",
                    "frete": "Pago",
                    "viaTransporte": "Rodoviário",
                    "mensagem_id": "",
                    "responsavel_id": "",
                    "imprimePedido": false,
                    "pacoteCompra_id": "",
                    "comentarios": ""
                };

                self.isLoading = false;
            });

        }

        function cancel() {
			notification.question({
				title: 'l-question',
				text: i18nFilter('l-cancel-operation'),
				cancelLabel: 'l-no',
				confirmLabel: 'l-yes',
				callback: function (isPositiveResult) {
					if (isPositiveResult) {
						$window.history.back();
					}
				}
			});
		}

        function save() {
            if (self.isInvalidForm()) {
                return;
            }

            if (self.isUpdate) {
				purchaseOrderFactory.updateRecord(self.purchaseorder.id, self.purchaseorder, function (result) {
                    $state.go('purchaseorders.start');

                    notification.notify({
                        type: 'info',
                        title: 'Alteração de pedido',
                        detail: `Pedido ${self.purchaseorder.pedido} alterado com sucesso!`
                    });
				});
			} else {
                purchaseOrderFactory.saveRecord(self.purchaseorder, function (result) {
                    $state.go('purchaseorders.start');

                    // Atualiza os últimos índices
                    indexesFactory.updateRecord(self.index.id, self.index);

                    notification.notify({
                        type: 'info',
                        title: 'Novo pedido',
                        detail: `Pedido ${self.purchaseorder.pedido} gravado com sucesso!`
                    });
				});
			}
		}

        function saveNew() {

            if (self.isInvalidForm()) {
                return;
            }

            purchaseOrderFactory.saveRecord(self.purchaseorder, function (result) {
                getNewPurchaseOrder();
                $state.go('purchaseorders.new');

                // Atualiza os últimos índices
                indexesFactory.updateRecord(self.index.id, self.index);

                notification.notify({
                    type: 'info',
                    title: 'Novo pedido',
                    detail: 'Pedido gravado com sucesso!'
                });
            });
        }

        // metodo para verificar se o formulario é válido
        function isInvalidForm() {
            var messages = [];
            var isInvalidForm = false;

            const requireLabels = {
                'urgencia': 'Urgência',
                'fornecedor_id': 'Fornecedor',
                'natureza': 'Natureza',
                'dataEmissao': 'Data de Emissão',
                'condicaoPagamento_id': 'Condição de Pagamento',
                'estabelecimentoEntrega_id': 'Estabelecimento de Entrega',
                'estabelecimentoCobranca_id': 'Estabelecimento de Cobrança',
                'transportador_id': 'Transportador',
                'frete': 'Frete',
                'viaTransporte': 'Via de Transporte',
                'responsavel_id': 'Responsável'
            };

            for (var field in requireLabels) {
                if (!self.purchaseorder[field] || self.purchaseorder[field].length == 0) {
                    isInvalidForm = true;
                    messages.push(requireLabels[field]);
                }
            }

            // se for invalido, monta e mostra a mensagem
            if (isInvalidForm) {
                var warning = "O Campo<br /><br />";
                if (messages.length > 1) {
                    warning = "Os Campos<br /><br />";
                }

                angular.forEach(messages, function(item) {
                    warning = warning + ' ' + item + ((messages.length > 1) ? '<br />' : '');
                });

                if (messages.length > 1) {
                    warning = warning + ' ' + '<br />são requeridos';
                } else {
                    warning = warning + ' ' + '<br />é requerido';
                }

                notification.notify({
                    type: 'error',
                    title: 'Atenção',
                    detail: warning
                });
            }

            return isInvalidForm;
        }

        function onExpandAll() {
            self.group.transport.open =
            self.group.complement.open = (
                !self.group.transport.open ||
                !self.group.complement.open
            );
        }

        function validateDate(value) {
            let date = new Date(value);
            let isInValid = (date < self.dataMinima) || (date > self.dataMaxima);

            if (isInValid) {
                let msg = 'Favor informar uma data no periodo entre ' +
                    _dateHelperService.dateToText(self.dataMinima) + ' e ' +
                    _dateHelperService.dateToText(self.dataMaxima);

                notification.notify({
                    type: 'error',
                    title: 'Data inválida',
                    detail: msg
                });

                $("#controller_purchaseorder_dataemissao").focus();
            }

        }

	}

}());
