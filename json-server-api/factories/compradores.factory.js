var faker = require('faker');

module.exports = class CompradoresFactory {

    geraCompradores(quantidadeRegistros) {

        const numeroRegistros = quantidadeRegistros;

        let _compradores = [];

        for (let i = 1; i <= numeroRegistros; i++) {
            let randomCard = faker.helpers.createCard();
            _compradores.push({
                "id": i,
                "comprador": randomCard.username,
                "nome": `Comprador ${i} - ${randomCard.name}`,
                "limiteCompras": faker.random.number({min: 0, max: 999999999}),
                "moeda": faker.random.number({min: 0, max: 1}),
                "corporativo": faker.random.number({min: 0, max: 1})
            });              
        }
        
        return _compradores;     
    }
    
};