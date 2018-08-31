var faker = require('faker');

module.exports = class PedidosCompraFactory {

    constructor(
        fornecedores, 
        estabelecimentos,
        condicoesPagamento,
        emitentesEntrega,
        mensagem,
        compradores,
        pacotesCompra,
        transportadores
    ) {
        this.urgencia = ["Normal", "Emergencial"];
        this.natureza = ["Compra", "Serviço", "Beneficiamento"];
        this.statusImpressao = ["Não impresso", "Impresso"];   
        this.frete = ["Pago", "A Pagar"];
        this.viaTransporte = [
            "Rodoviário", 
            "Aeroviário",
            "Marítmo",
            "Ferroviário",
            "Rodoferroviário",
            "Outros"
        ];

        this.fornecedores = fornecedores;
        this.estabelecimentos = estabelecimentos;
        this.transportadores = transportadores;

        this.dataInicio = new Date(2018, 0, 1);
        this.dataFim = new Date(2018, 12, 31);
        
        this.condicoesPagamento = condicoesPagamento;
        this.emitentesEntrega = emitentesEntrega;
        this.mensagem = mensagem;
        this.compradores = compradores;
        this.pacotesCompra = pacotesCompra;
    }

    geraPedidos(quantidadeRegistros) {

        let numeroRegistros = quantidadeRegistros;

        let _pedidosCompra = [];

        for (let i = 1; i <= numeroRegistros; i++) {

            let fornecedor = faker.random.arrayElement(this.fornecedores);
            let valorTotal = faker.finance.amount(0, 9999999999, 2);
    
            _pedidosCompra.push({
                id: i,
                pedido: `${faker.random.number(111, 900)}.${faker.random.number(111, 900)}`,
                urgencia: faker.random.arrayElement(this.urgencia),
                fornecedor_id: fornecedor.id,
                nomeAbreviado: fornecedor.nomeAbreviado,
                nomeFornecedor: fornecedor.nome,
                cnpj: fornecedor.cnpj,
                valorTotal: valorTotal,
                valorAberto: valorTotal,
                natureza: faker.random.arrayElement(this.natureza),
                statusImpressao: faker.random.arrayElement(this.statusImpressao),
                dataEmissao: faker.date.between(this.dataInicio, this.dataFim),
                contrato: faker.random.number({min: 0, max: 1234903}),                
                condicaoPagamento_id: faker.random.arrayElement(this.condicoesPagamento).id,                
                estabelecimentoEntrega_id: faker.random.arrayElement(this.estabelecimentos).id,
                estabelecimentoCobranca_id: faker.random.arrayElement(this.estabelecimentos).id,
                estabelecimentoGestor_id: faker.random.arrayElement(this.estabelecimentos).id,                
                emitenteEntrega_id: faker.random.arrayElement(this.emitentesEntrega).id,                
                transportador_id: faker.random.arrayElement(this.transportadores).id,
                frete: faker.random.arrayElement(this.frete),
                viaTransporte: faker.random.arrayElement(this.viaTransporte),
                mensagem_id: faker.random.arrayElement(this.mensagem).id,                
                responsavel_id: faker.random.arrayElement(this.compradores).id,
                imprimePedido: faker.random.boolean(),
                pacoteCompra_id: faker.random.arrayElement(this.pacotesCompra).id,
                comentarios: faker.random.arrayElement(['', faker.lorem.paragraphs()])
            });            
            
        }

        return _pedidosCompra;     
    }

};