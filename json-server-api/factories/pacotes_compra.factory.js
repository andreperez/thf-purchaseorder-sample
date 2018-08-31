var faker = require('faker');

module.exports = class PacotesCompraFactory {
    
    constructor(compradores) {
        this.compradores = compradores;
    }

    geraPacotes(quantidadeRegistros) {

        let numeroRegistros = quantidadeRegistros;

        let _pacotesCompra = [];

        for (let i = 1; i <= numeroRegistros; i++) {
            
            _pacotesCompra.push({
                "id": i,
                "numero": i,
                "descricao": faker.lorem.words(),
                "comprador_id": faker.random.arrayElement(this.compradores).id,
                "dataInicio": faker.date.recent()
            });              

        }
        
        return _pacotesCompra;
    }
    
};