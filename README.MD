# TOTVS HTML Framework - Modelo CRUD de Pedidos de Compras

O objetivo desse projeto é servir de modelo CRUD (Create-Read-Update-Delete) para o TOTVS HTML Framework (THF) versão 12.1.17 (AngularJS 1.3.20), usando uma entidade fictícia de Pedidos de Compras com 2.000 registros gerados aleatoriamente.

## 1. Introdução

O código-fonte foi produzido com base no [generator-totvs-dev](https://github.com/totvs/generator-totvs-dev), e seguindo as orientações do Knowledge Week da TOTVS entitulado "Iniciando uma aplicação com THF & Protheus", de 22/06/2018.

A API REST é fornecida pelo [JSON Server](https://github.com/typicode/json-server). Ele permite a manipulação fácil de dados "fake" para teste e disponibiliza uma API rapidamente sem grandes configurações.

Foram adicionados ao projeto o [gulp](https://github.com/gulpjs/gulp), [gulp-webserver](https://github.com/schickling/gulp-webserver) e [jshint](https://github.com/jshint/jshint).

O gulp nesse caso inicia a aplicação web e monitora as mudanças em tempo real nos códigos-fontes, mostrando a página atualizada no browser (live reloading).

O JSHint monitora a qualidade e possíveis erros no código-fonte JavaScript.

## 2. Instalação

### 2.1. NodeJS

Para instalar o nodejs, entre em https://nodejs.org/en/ e baixe a versão LTS.
A versão testada nesse projeto foi a 8.11.4 LTS.

### 2.2. JSON Server

1. Abra um prompt de comando
2. Vá até o diretório **thf-purchaseorder-sample\json-server-api**
3. Instale as dependências:

```bash
#!/bin/bash
npm install
```

Para mais informações ou personalizações, visualize o **README** contida na pasta da API.

### 2.3. Aplicação Web

1. Abra um prompt de comando
2. Vá até o diretório **thf-purchaseorder-sample**
3. Instale as dependências:

```bash
#!/bin/bash
npm install
bower install
```

## 3. Iniciando o servidor REST (JSON Server)

1. Abra um prompt de comando
2. Vá até o diretório **thf-purchaseorder-sample\json-server-api**
3. Execute o coamando:

```bash
#!/bin/bash
npm run-scrip serve
```

### 3.1. Testando a API

Abra no browser o endereço <http://localhost:3000>.

Nesse endereço é possível visualizar os dados fake.

## 4. Iniciando a aplicação web THF

1. Abra um prompt de comando
2. Vá até o diretório **thf-purchaseorder-sample**
3. Execute o coamando:

```bash
#!/bin/bash
gulp
```

A aplicação abrirá automaticamente no browser no endereço http://localhost:8000.
Qualquer alteração salva no código-fonte é visualizada imediatamente no browser.

## Referências e agradecimentos

- [generator-totvs-dev][1]
- [TOTVS HTML Framework 12.1.17 (AngularJS)][5]
- [AngularJS][6]
- [NodeJS][2]
- [Bower][9]
- [JSON Server][8]
- [Faker][10]
- [Gulp][3]
- [Gulp Web Server][4]
- [JSHint][7]

[1]: https://github.com/totvs/generator-totvs-dev
[2]: https://nodejs.org/en/
[3]: https://github.com/gulpjs/gulp
[4]: https://github.com/schickling/gulp-webserver
[5]: https://thf.totvs.com.br/12.1.17/#/
[6]: https://angularjs.org/
[7]: https://github.com/jshint/jshint
[8]: https://github.com/typicode/json-server
[9]: https://bower.io/
[10]: https://github.com/Marak/faker.js
