var faker = require('faker');

var geraCPNJ = function() {
    let _cnpj = "";
    for (let digit = 1; digit <= 13; digit++) {
        _cnpj += faker.random.number({min: 0, max: 9, precision: 1});
    }
    return _cnpj;
}

module.exports = class TransportadoresFactory {
    constructor(estados) {
        this.estados = estados;
    }

    geraTransportadores(quantidadeRegistros) {

        let numeroRegistros = quantidadeRegistros;

        let _transportadores = [];

        for (let i = 1; i <= numeroRegistros; i++) {
            _transportadores.push({
                "id": i,
                "transportador": i,
                "nome": `Transportador ${i} - ${faker.company.companyName()}`,
                "nomeAbreviado": faker.name.firstName(),
                "cnpj": geraCPNJ(),
                "viaTransporte": faker.random.number({min: 1, max: 6}),
                "uf": faker.random.arrayElement(this.estados),
                "inscricaoEstadual": faker.random.arrayElement([
                    'ISENTO', 
                    faker.random.number({min: 104952442114, max: 999999999999})
                ]),
                "pais": "Brasil",
                "phone": faker.phone.phoneNumber(),
                "cep": faker.random.number({min: 10000000, max: 99999999})
            });              
        }
        
        return _transportadores;     
    }
    
};