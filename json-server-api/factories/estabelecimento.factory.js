var faker = require('faker');

module.exports = class EstabelecimentosFactory {
    constructor(estados) {
        this.estados = estados;
    }

    $$(x) {
        return faker.random.arrayElement(x);
    }

    geraEstabelecimentos(quantidadeRegistros) {

        let numeroRegistros = quantidadeRegistros;

        let _estabelecimentos = [];

        for (let i = 1; i <= numeroRegistros; i++) {
            let randomCard = faker.helpers.createCard();
            _estabelecimentos.push({
                "id": i,
                "nome": `Estabelecimento ${i} - ${randomCard.company.name}`,
                "cidade": faker.address.city(),
                "estado": this.$$(this.estados)
            });            
        }

        return _estabelecimentos;
    }
    
};