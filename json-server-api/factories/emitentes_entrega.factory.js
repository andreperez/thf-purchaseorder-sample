var faker = require('faker');

module.exports = class EmitentesEntregaFactory {
    
    constructor(estados) {
              
        this.inscricaoEstadual = [
            'ISENTO',
            0
        ];

        this.estados = estados;

        this.caixaPostal = [
            '',
            0
        ];

        this.linhasProduto = [
            'MC',
            'Roupa',
            'GRÃOS',
            'SOFTWARE',
            'INDUSTRI',
            'TELEFONE',
            'HOSPEDAG',
            'DIVERSOS',
            'TEL/XERO',
            'TRATAMEN',
            'FERRAMEN',
            'EMBALAGE',
            'FORC/LUZ'
        ];

        this.ramosAtividade = [
            'TESTE',
            'RURAL',
            'COMERCIO',
            'INDUSTRIA',
            'CONSUMID',
            'Textil',
            'CAPIROTO',
            'FAB.PROD',
            'Clientes Ext',
            'AGRÍCOLA',
            'Industria',
            '1',
            '009999',
            '11',
            'comercio',
            'CONSUMIDOR',
            'Oi',
            'Rural',
            'rural',
            '12345678',
            'sul',
            'sullll',
            'TRANSPOR'
        ];

        this.dataInicio = new Date(2018, 0, 1);
        this.dataFim = new Date(2018, 12, 31);  
        
        this.bancos = [
            '654',
            '246',
            '025',
            '641',
            '213',
            '019',
            '029',
            '000',
            '740',
            '107',
            '031',
            '739',
            '096',
            '318',
            '752',
            '248',
            '218',
            '065',
            '036',
            '204',
            '394',
            '237',
            '225',
            'M15',
            '208',
            '044',
            '263',
            '473',
            '412',
            '040',
            '745',
            'M08',
            '241',
            'M19',
            '215',
            '756',
            '748',
            '075',
            '721',
            '222',
            '505',
            '229',
            '266',
            '003',
            '083-3',
            'M21',
            '707',
            '300',
            '495',
            '494',
            'M06',
            '024',
            '456',
            '214',
            '001',
            '047',
            '037',
            '039',
            '041',
            '004',
            '265',
            'M03',
            '224',
            '626',
            'M18',
            '233',
            '734',
            'M07',
            '612',
            'M22',
            '063',
            'M11',
            '604',
            '320',
            '653',
            '630',
            '077-9',
            '249',
            'M09',
            '184',
            '479',
            '376',
            '074',
            '217',
            '076',
            '757',
            '600',
            '212',
            'M12',
            '389',
            '746',
            'M10',
            '738',
            '066',
            '243',
            '045',
            'M17',
            '623',
            '611',
            '613',
            '094-2',
            '643',
            '724',
            '735',
            '638',
            'M24',
            '747',
            '088-4',
            '356',
            '633',
            '741',
            'M16',
            '072',
            '453',
            '422',
            '033',
            '250',
            '743',
            '749',
            '366',
            '637',
            '012',
            '464',
            '082-5',
            'M20',
            'M13',
            '634',
            'M14',
            'M23',
            '655',
            '610',
            '370',
            '021',
            '719',
            '755',
            '744',
            '073',
            '078',
            '069',
            '070',
            '092-2',
            '104',
            '477',
            '081-7',
            '097-3',
            '085-x',
            '099-x',
            '090-2',
            '089-2',
            '087-6',
            '098-1',
            '487',
            '751',
            '064',
            '062',
            '399',
            '168',
            '492',
            '652',
            '341',
            '079',
            '488',
            '014',
            '753',
            '086-8',
            '254',
            '409',
            '230',
            '091-4',
            '084'
        ];

        this.countries = [
            'Argentina',
            'Brasil',
            'Bolivia',
            'Alemanha',
            'Estados Unidos',
            'Bangladesh',
            'Congo'
        ];   

    }

    geraEmitentesEntrega(quantidadeRegistros) {       

        let numeroRegistros = quantidadeRegistros;

        let _emitentesEntrega = [];

        for (let i = 1; i <= numeroRegistros; i++) {
            
            let randomCard = faker.helpers.createCard();
            let phone = faker.random.arrayElement(
                [
                    '',
                    randomCard.phone,
                ]
            );

            this.inscricaoEstadual[1] = faker.random.number({min: 11111111111, max: 99999999999999});  
            this.caixaPostal[1] = faker.random.number({min: 11111111, max: 99999999});  


            _emitentesEntrega.push({
                "id": i,
                "nomeAbreviado": randomCard.name,
                "codigo": i,  
                "nome": faker.name.firstName() + " " + faker.name.lastName(),    
                "matriz": randomCard.company.name,
                "grupo": faker.random.number({min: 0, max: 99}),
                "CGC": faker.random.number({min: 0, max: 642840580001978999}), 
                "natureza": faker.random.number({min: 1, max: 3}),
                "inscricaoEstadual": faker.random.arrayElement(this.inscricaoEstadual),
                "endereco": randomCard.address.streetA,
                "endereco2": randomCard.address.streetB,
                "bairro": randomCard.address.streetC,
                "cidade": randomCard.address.city,
                "estado": faker.random.arrayElement(this.estados),
                "cep": faker.random.arrayElement(
                    [
                        faker.random.number({min: 11111111, max: 99999999 }),
                        randomCard.address.zipcode
                    ]
                ),
                "caixaPostal": faker.random.arrayElement(this.caixaPostal),
                "pais": faker.random.arrayElement(this.countries),
                "transportadorPadrao": faker.random.number({min: 0, max: 99999}),
                "linhaProduto": faker.random.arrayElement(this.linhasProduto),
                "ramoAtividade": faker.random.arrayElement(this.ramosAtividade),
                "dataImplantacao": faker.date.between(this.dataInicio, this.dataFim),
                "emissaoPedido": faker.random.number({min: 1, max: 2}),
                "prog": faker.random.boolean(),   // Não-Sim
                "mensagem": faker.random.number({min: 0, max: 1000}),
                "telefone": phone,
                "ramalTelefone": faker.random.arrayElement(['', faker.random.number({min: 0, max: 500})]),
                "telefaxRamal": faker.random.arrayElement(['', faker.random.number({min: 0, max: 500})]),
                "telefax": phone,
                "telex": phone,
                "telefax2": phone,
                "ramalTelefax2": faker.random.arrayElement(['', faker.random.number({min: 0, max: 500})]),
                "telefoneModem": phone,
                "ramalTelefone": faker.random.arrayElement(['', faker.random.number({min: 0, max: 500})]),
                "modem": phone,
                "email": randomCard.email,
                "homePage": randomCard.website,
                "parceiroEDI": faker.random.number({min: 0, max: 555}),
                "portador": faker.random.number({min: 0, max: 99999}),
                "modalidadeAP": faker.random.number({min: 1, max: 7}),
                "banco": faker.random.arrayElement(this.bancos),
                "agencia": faker.random.arrayElement(['', faker.random.number({min: 0, max: 999999})]),
                "contaCorrente": faker.random.arrayElement(['', faker.random.number({min: 0, max: 999999})]),
                "taxaFinanceira": faker.random.number({min: 0, max: 50}),
                "diasTaxaFinanceira": faker.random.number({min: 0, max: 200}),
                "tipoPagamento": faker.random.number({min: 0, max: 8}),
                "diasCompensacao": faker.random.number({min: 0, max: 200}),
                "tipoDespesaPadrao": faker.random.number({min: 0, max: 200}),
                "condicaoPagamento": faker.random.number({min: 0, max: 1000}),
                "vencimentoFeriado": faker.random.number({min: 1, max: 3}),
                "vencimentoDomingo": faker.random.number({min: 1, max: 3}),
                "vencimentoSabado": faker.random.number({min: 1, max: 3}),
                "observacao": faker.lorem.paragraphs(),
                "agenteRetencao": faker.random.boolean(),
                "rendimento": faker.random.boolean(),
                "tributacaoCOFINS": faker.random.number({min: 0, max: 2}),
                "tributacaoPIS": faker.random.number({min: 0, max: 2}),
                "PIS_COFINSporUnidade": faker.random.boolean(),
                "contribuinteSubstitutoIntermediario": faker.random.boolean(),
                "optanteCreditoPresumidoSubstituicaoTributaria": faker.random.boolean(),
                "InscrAuxST": faker.random.arrayElement(['', faker.lorem.word()]),
                "pagamentos": faker.random.number({min: 1, max: 2})
            });
        }

        return _emitentesEntrega;
    }
    
};