# SisEnex - Desafio Web

Nesse Repositório se encontra o servidor com a API que deve ser executada localmente para realizar o desafio web do processo de recrutamento do SisEnex.

## Requisitos

- Ter o `node` e o `npm` instalado em sua máquina.

Site oficial do [Node.js](https://nodejs.org/en/)

## Como Executar o servidor

- Primeiro Clone esse repositório:

```bash
git clone https://github.com/bmviniciuss/sisenex-desafio-web
```

- Acesse a pasta do `servidor`:

```bash
cd sisenex-desafio-web/servidor
```

- Instale as dependências:

```bash
npm install
```

- Com o `npm` inicie o servidor:

```bash
npm run start
```

Pronto! O servidor com a `API` está rodando localmente na sua máquina em `http://localhost:4000`. O `endpoint` para o recurso de `users` é `http://localhost:4000/users`.

## Observações

A `API` foi criada através de uma bibliteca chamada `json-server`. A documentação da mesma pode ser encontrada no link abaixo.

[Documentação do json-server](https://github.com/typicode/json-server)
