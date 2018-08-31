var faker = require('faker');

module.exports = class MensagensFactory {

    geraMensagens(quantidadeRegistros) {

        let numeroRegistros = quantidadeRegistros;

        let _mensagens = [];

        for (let i = 1; i <= numeroRegistros; i++) {
            _mensagens.push({
                "id": i,
                "mensagem": i,
                "descricao": faker.lorem.sentence()
            });            
        }
        
        return _mensagens;     
    }

};