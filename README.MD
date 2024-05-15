# Projeto Fullstack Node/React

Bem-vindo ao meu projeto fullstack! Este projeto é uma aplicação completa desenvolvida para fins de estudo e prática de habilidades em desenvolvimento web. Utiliza Node.js com Apollo Server para o backend e React para o frontend. Abaixo, você encontrará uma descrição detalhada do projeto, instruções de configuração e como rodar a aplicação.

## 🛠️ Tecnologias Utilizadas

### Backend
- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
- ![Apollo Server](https://img.shields.io/badge/Apollo%20Server-311C87?logo=apollo-graphql&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
- ![GraphQL](https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=white)

### Frontend
- ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
- ![Apollo Client](https://img.shields.io/badge/Apollo%20Client-311C87?logo=apollo-graphql&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
- ![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?logo=styled-components&logoColor=white) (opcional)

## ✨ Funcionalidades

- Autenticação de usuários
- Operações CRUD (Create, Read, Update, Delete) para recursos específicos
- Interface interativa e responsiva
- Integração completa entre frontend e backend utilizando GraphQL

## 📂 Estrutura do Projeto

  ```bash
  root
  │ README.md
  │ package.json
  │
  └───backend
  │ │ src
  │ │ ├── index.ts
  │ │ ├── schema.ts
  │ │ ├── resolvers
  │ │ └─── ...
  │ │
  │ └───package.json
  │
  └───frontend
  │ src
  │ ├── App.tsx
  │ ├── index.tsx
  │ ├── components
  │ └─── ...
  │
  └───package.json
  ```


## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de estudar e praticar as seguintes tecnologias e conceitos:

- Criação de um servidor GraphQL com Apollo Server
- Utilização de TypeScript para tipagem estática no backend e frontend
- Desenvolvimento de uma API GraphQL robusta e eficiente
- Integração de um frontend React com Apollo Client para consumir a API GraphQL
- Prática de conceitos de autenticação e operações CRUD
- Desenvolvimento de uma interface de usuário moderna e responsiva

## 📋 Pré-requisitos

- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white) instalado
- ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=white) ou npm instalado

## ⚙️ Como Configurar o Ambiente de Desenvolvimento

### Backend

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio/backend
   ```

2. Instale as dependências:

    ```bash
    yarn install
    # ou
    npm install
    ```

3. Configure as variáveis de ambiente:

  ```bash
  DATABASE_URL=your_database_url
  PORT=4000
  ```

4. Execute o servidor 

    ```bash
    yarn start
    # ou
    npm start
    ```

### Frontend

1. cd ../frontend

2. Instale as dependências:

    ```bash
    yarn install
    # ou
    npm install
    ```

3. Configure as variáveis de ambiente:

  ```bash
  REACT_APP_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
  ```

4. Execute o aplicativo React:

    ```bash
    yarn start
    # ou
    npm start
    ```

## 🤝 Como Contribuir

- Fork este repositório
- Crie uma branch para sua feature (git checkout -b feature/nova-feature)
- Commit suas mudanças (git commit -am 'Adiciona nova feature')
- Faça o push para a branch (git push origin feature/nova-feature)
- Crie um novo Pull Request

## 📜 Licença
Este projeto está licenciado sob a MIT License.

