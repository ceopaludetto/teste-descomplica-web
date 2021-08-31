# Desafio Tech Descomplica | Web

## Tecnologias Utilizadas

- React;
- Typescript;
- Apollo GraphQL;
- Material UI;
- React Hook Form;
- React Use;

## Como Executar

1. Clone o repositório e instale as dependências executando `yarn` ou `npm install`;

2. Preencha o arquivo `.env.local` a partir do arquivo `.env.example`;

3. Execute os comandos `docker` para montar os containeres docker:

   1. Utilize `yarn docker:dev` ou `npm run docker:dev` para montar o container de desenvolvimento;
   2. Utilize `yarn docker:build` ou `npm run docker:build` para montar o container de produção;

4. É possível também executar sem a utilização do `docker` através dos comandos:

   1. `yarn start` ou `npm run start`, para executar o ambiente de desenvolvimento;
   2. `yarn build` ou `npm run build` seguido de `yarn serve` ou `npm run serve`, para executar o ambiente de produção;

5. Para acessar a aplicação va até http://localhost:3000.
