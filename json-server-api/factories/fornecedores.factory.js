var faker = require('faker');

var geraCPNJ = function() {
    let _cnpj = "";
    for (let digit = 1; digit <= 13; digit++) {
        _cnpj += faker.random.number({min: 0, max: 9, precision: 1});
    }
    return _cnpj;
}

module.exports = class FornecedoresFactory {

    geraFornecedores(quantidadeRegistros) {

        let numeroRegistros = quantidadeRegistros;

        let _fornecedores = [];

        for (let i = 1; i <= numeroRegistros; i++) {
            let randomCard = faker.helpers.createCard();

            _fornecedores.push({
                "id": i,
                "nomeAbreviado": `Nome Abreviado ${i}`,
                "nome": `Nome Completo ${i} - ${randomCard.company.name}`,
                "cnpj": geraCPNJ()
            });       
        }

        return _fornecedores;
    }
    
};