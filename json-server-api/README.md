# Fake Web REST API

## Objetivo

Disponibilizar dados fictícios em massa para teste.

## Dados disponibilizados

- indices (contém o sumário das tabelas (últimas chaves e contadores de registros)
- condicaoPagamento
- emitentesEntrega
- mensagens
- compradores
- fornecedores
- estabelecimentos
- pacotesCompra
- pedidosCompra
- ordensCompra
- transportadores

## Dependências

- faker
- json-server
- jshint

## Instalando as dependências

Execute no terminal, dentro do diretório da API:

`npm install`

## Gerando dados aleatórios em massa

Execute no terminal, dentro do diretório da API:

`npm run-script fake`

## Criando um snapshot do database

Depois que executar *npm run-script fake*, digite **s** e tecle **ENTER**.

Os dados serão gravados num arquivo no formato **db-xxxx.json**.

Renomeie para **db.json**

## Iniciando a Web API

`npm run-script serve`

## Links

1. https://github.com/Marak/faker.js
2. https://github.com/typicode/json-server
