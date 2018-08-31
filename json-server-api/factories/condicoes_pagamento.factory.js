var faker = require('faker');

module.exports = class CondicoesPagamentoFactory {
    constructor() {}

    geraCondicoesPagamento(quantidadeRegistros) {
        const numeroRegistros = quantidadeRegistros;

        let _condicaoPagamento = [];

        let formasPagamento = [
            "A Vista",
            "30/60 DIAS",
            "ANTECIPADO",
            "2 DD",
            "30 DD",
            "45 DD",
            "60 DD",
            "8 Vezes",
            "9 Vezes",
            "30 / 45 / 60 DD",
            "30 / 60 / 90 DD",
            "12 Vezes",
            "13 dias úteis após a emissão",
            "20 / 40 DD",
            "20 / 30 / 40 DD",
            "5 DD",
            "Vencimento Dia 15 - Dentro Mês",
            "18 DDL",
            "19 DDL",
            "20 DIAS APÓS EMISSÃO",
            "A Vista 21",
            "21 Dias após a emissão",
            "no recebto da invoice, net",
            "24 DDL",
            "25dd",
            "26 DDL",
            "7 DD",
            "10 DD",
            "12 DD",
            "28 DD",
            "35 DIAS APÓS EMISSÃO",
            "Vencimento dia 15 c/ 40 dias",
            "30 D.F.QUINZENA"
        ];

        for (let i = 1; i <= numeroRegistros; i++) {
            formasPagamento.push(faker.lorem.sentence());

            _condicaoPagamento.push({
                "id": i,
                "condicaoPagamento": i,
                "percentualDescontoPagamentoAntecipado": faker.random.number({
                    min: 0,
                    max: 99
                }),
                "duplicataDescontoAntecipado": faker.random.number({
                    min: 0,
                    max: 99
                }),
                "numeroParcelas": faker.random.number({
                    min: 0,
                    max: 30
                }),
                "tabelaFinanceira": faker.random.number({
                    min: 0,
                    max: 20
                }),
                "diaMesVencimento": faker.random.number({
                    min: 0,
                    max: 31
                }),
                "numeroDiasAntecipacao": faker.random.number({
                    min: 0,
                    max: 5
                }),
                "descricao": faker.random.arrayElement(formasPagamento),
                "diaMesBase": faker.random.number({
                    min: 0,
                    max: 31
                })
            });
        }

        return _condicaoPagamento;
    }
    
};