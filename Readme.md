
# Projeto - MovieFlix API

Listagem de filmes. 

### Informações do catálogo
- Título
- Descrição
- Banner
- Diretor
- Produtor

### Libs
- API feita com NodeJS
- Express
- Typescript
- Mongoose
- Mongoose paginate
- Axios

### Banco de dados
Banco de dados não relacional (noSQL) - MongoDB.

### Endpoints
- `('/')` Endpoint para consultar 50 filmes de uma API externa e salvar os dados no banco local.

- `('/list')` Endpoint para Listar os filmes com paginação de 10 em 10.

### Como Executar o Projeto

- Selecione um diretório a sua escolha

- execute os comandos: 
```
git clone https://github.com/hiagopsilva/movieflix-api.git
```

```
cd movieflix-api
```

Rode o comando `yarn` ou `npm install`

Para rodar o projeto em modo de desenvolvimento:
```
yarn dev
```

Para rodar o projeto em modo de homologação:
```
yarn hml
```

Para rodar o projeto em modo de produção:
```
yarn prd
```

