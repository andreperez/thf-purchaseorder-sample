/**
 * @description
 * Geração de dados fake em massa
 *
 * @see
 * https://github.com/Marak/faker.js
 */

var faker = require('faker');

const condicoesPagamentoFactory = require('./factories/condicoes_pagamento.factory.js');
const emitentesEntregaFactory = require('./factories/emitentes_entrega.factory.js');
const mensagensFactory = require('./factories/mensagens.factory.js');
const compradoresFactory = require('./factories/compradores.factory');
const estabelecimentosFactory = require('./factories/estabelecimento.factory');
const fornecedoresFactory = require('./factories/fornecedores.factory');
const pedidosCompraFactory = require('./factories/pedidos_compra.factory');
const ordensCompraFactory = require('./factories/ordens_compra.factory');
const pacotesCompraFactory = require('./factories/pacotes_compra.factory');
const estadosFactory = require('./factories/estados.factory');
const transportadoresFactory = require('./factories/transportadores.factory');

module.exports = () => {

    // Dados expostos ao REST
    const data = {
        indices: [],
        condicaoPagamento: [],
        emitentesEntrega: [],
        mensagens: [],
        compradores: [],
        fornecedores: [],
        estabelecimentos: [],
        pacotesCompra: [],
        pedidosCompra: [],
        ordensCompra: [],
        transportadores: []
    };

    //#################################################################
    // Últimos IDs das tabelas.
    // Para saber qual será o próxmimo ao adicionar um novo registro
    //#################################################################
    data.indices = [];

    //#################################################################
    // UF - Utilizado internamente em várias tabelas
    //#################################################################

    const _estadosFactory = new estadosFactory();
    const estados = _estadosFactory.getEstados();

    //#################################################################
    // REST de Condições de Pagamento
    //#################################################################
    const _condicoesPagamentoFactory = new condicoesPagamentoFactory();
    data.condicaoPagamento = _condicoesPagamentoFactory.geraCondicoesPagamento(1000);
    data.indices.push({
        "id": 1,
        "tabela": "condicoesPagamento",
        "lastIndex": 1000,
        "count": 1000
    });

    //#################################################################
    // REST de Emitentes de Entrega
    //#################################################################
    const _emitentesEntregaFactory = new emitentesEntregaFactory(estados);
    data.emitentesEntrega = _emitentesEntregaFactory.geraEmitentesEntrega(4850);
    data.indices.push({
        "id": 2,
        "tabela": "emitentesEntrega",
        "lastIndex": 4850,
        "count": 4850
    });

    //#################################################################
    // REST de Mensagens
    //#################################################################
    const _mensagensFactory = new mensagensFactory();
    data.mensagens = _mensagensFactory.geraMensagens(967);
    data.indices.push({
        "id": 3,
        "tabela": "mensagens",
        "lastIndex": 967,
        "count": 967
    });

    //#################################################################
    // REST de Compradores
    //#################################################################
    const _compradoresFactory = new compradoresFactory();
    data.compradores = _compradoresFactory.geraCompradores(1341);
    data.indices.push({
        "id": 4,
        "tabela": "compradores",
        "lastIndex": 1341,
        "count": 1341
    });

    //#################################################################
    // REST de Estabelecimentos
    //#################################################################
    const _estabelecimentosFactory = new estabelecimentosFactory(estados);
    data.estabelecimentos = _estabelecimentosFactory.geraEstabelecimentos(1000);
    data.indices.push({
        "id": 5,
        "tabela": "estabelecimentos",
        "lastIndex": 1000,
        "count": 1000
    });

    //#################################################################
    // REST de Fornecedores
    //#################################################################
    const _fornecedoreFactory = new fornecedoresFactory();
    data.fornecedores = _fornecedoreFactory.geraFornecedores(1000);
    data.indices.push({
        "id": 6,
        "tabela": "fornecedores",
        "lastIndex": 1000,
        "count": 1000
    });

    //#################################################################
    // REST de Pacotes de Compra
    //#################################################################
    const _pacotesCompraFactory = new pacotesCompraFactory(data.compradores);
    data.pacotesCompra = _pacotesCompraFactory.geraPacotes(350);
    data.indices.push({
        "id": 7,
        "tabela": "pacotes",
        "lastIndex": 350,
        "count": 350
    });

    //#################################################################
    // REST de Transportadores
    //#################################################################
    const _transportadoresFactory = new transportadoresFactory(estados);
    data.transportadores = _transportadoresFactory.geraTransportadores(223);
    data.indices.push({
        "id": 8,
        "tabela": "transportadores",
        "lastIndex": 223,
        "count": 223
    });

    //#################################################################
    // REST de Pedidos de Compras
    //#################################################################
    const _pedidosCompraFactory = new pedidosCompraFactory(
        data.fornecedores,
        data.estabelecimentos,
        data.condicaoPagamento,
        data.emitentesEntrega,
        data.mensagens,
        data.compradores,
        data.pacotesCompra,
        data.transportadores
    );
    data.pedidosCompra = _pedidosCompraFactory.geraPedidos(2000);
    data.indices.push({
        "id": 9,
        "tabela": "pedidosCompra",
        "lastIndex": 2000,
        "count": 2000
    });

    //#################################################################
    // REST de Ordens de Compras
    //#################################################################
    const _ordensCompraFactory = new ordensCompraFactory(data.pedidosCompra, data.estabelecimentos, data.compradores);
    data.ordensCompra = _ordensCompraFactory.geraOrdensCompra(5000);
    data.indices.push({
        "id": 10,
        "tabela": "ordensCompra",
        "lastIndex": 5000,
        "count": 5000
    });

    return data;
};
