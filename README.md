# Facile Challenger Backend

### 1. Descrição<br>

O serviço recebe inicialmente como parametro uma string que é encriptada e salva em um banco de dados, retornando o id do registro criado. O serviço tambem realiza a consulta por id, retornando o mesmo registro porem com a string desencriptada. 

### 2.Rotas<br>

O serviço pode ser executado localmente ou através de requisições para https://encrypt-challenger.herokuapp.com/

`"/"(post) => rota para o envio do nome` <br>
`"/encripts/:id"(get) => rota para a consulta por id`<br><br>

Por exemplo: <br>

URL:
`GET https://encrypt-challenger.herokuapp.com/encripts/:id`

Resultado:
```json
{
    "encripted_name": "shazam"
}
```

## 3 - Passos para testar localmente

### 1. Baixar código.

`git clone https://github.com/LorranGabriel/facile-challenge-backend.git`

### 2. Installar dependencias

`npm i`

### 3. Criar arquivo .env

Crie um arquivo .env com a seguinte informação:

`DATABASE_URL= 'your psql database url'`

### 4. Start service

Inicie o serviço utilizando:
`yarn dev`

Ou crie a versão de produção utilizando:
`yarn build`




