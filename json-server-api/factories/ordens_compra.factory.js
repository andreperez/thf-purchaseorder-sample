var faker = require('faker');

module.exports = class OrdensCompraFactory {
    
    constructor(pedidosCompra, estabelecimentos, compradores) {
                
        this.pedidosCompraId = [
            1,
            2, 
            3,
            4,
            5,
            faker.random.arrayElement(pedidosCompra).id,
            faker.random.arrayElement(pedidosCompra).id,
            faker.random.arrayElement(pedidosCompra).id,
            faker.random.arrayElement(pedidosCompra).id,
            faker.random.arrayElement(pedidosCompra).id
        ];        
        this.estabelecimentos = estabelecimentos;
        this.compradores = compradores;
        this.itens = [];
        this.unidadesMedida = [
            'PC',
            'UN',
            'KG',
            'M',
            'TON'
        ];
        this.dataInicio = new Date(2018, 0, 1);
        this.dataFim = new Date(2018, 12, 31);        

        for (let index = 0; index < 500; index++) {
            this.itens.push({
                "id": index,
                "nome": faker.commerce.productAdjective(),
                "descricao": faker.commerce.productName()
            });
        }
    }

    geraOrdensCompra(quantidadeRegistros) {

        let numeroRegistros = quantidadeRegistros;

        let _ordensCompra = [];

        for (let i = 1; i <= numeroRegistros; i++) {
            let item = faker.random.arrayElement(this.itens);

            _ordensCompra.push({
                "id": i,
                "ordem": i,
                "id_pedido_compra": faker.random.arrayElement(this.pedidosCompraId),
                "item": item.nome,
                "quantidade": faker.random.number({min: 0, max: 1500, precision: 4}),
                "um": faker.random.arrayElement(this.unidadesMedida),
                "dataEntrega": faker.date.between(this.dataInicio, this.dataFim),
                "estabelecimento": faker.random.arrayElement(this.estabelecimentos).id,
                "requisitante": faker.random.arrayElement(this.compradores).nome,
                "cotaAte": faker.date.between(this.dataInicio, this.dataFim),
                "comprador": faker.random.arrayElement(this.compradores).nome,
                "pacote": faker.random.number({min: 0, max: 366}),
                "descricaoItem": item.descricao
            });            
        }
        
        return _ordensCompra;     
    }

};