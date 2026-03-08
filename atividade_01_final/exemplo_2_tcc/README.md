# VaiDeCarona

Esse projeto é destinado a uma aplicação de caronas, onde, ele facilita e democratiza o deslocamento de viagens de forma barata e inteligente.

## Tecnologias

- React
- Vite
- React Router
- Axios
- Styled Components

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

### Clone este repositório:

```bash
git clone [url-do-seu-repositorio]
```


### Acesse a pasta do projeto:

```bash
cd example-front
```

### Instale as dependências:
```bash
npm install
```
ou
```bash
yarn install
```
## Configuração

### Crie um arquivo .env na raiz do projeto:
```bash
cp .env.example .env
```
### Configure as variáveis de ambiente necessárias:
```bash
VITE_API_URL=http://localhost:8090/api
```
### Executando o projeto

Para rodar em modo de desenvolvimento:
```bash
npm run dev
```
ou
```bash
yarn dev
```
O aplicativo abrirá em http://localhost:5173

## Build para produção
```bash
npm run build
```
ou
```bash
yarn build
```
## Estrutura de Pastas
```tree
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── services/      # Serviços e chamadas API
├── styles/        # Arquivos de estilo
├── utils/         # Funções utilitárias
└── App.jsx        # Componente principal
```
## Licença

Este projeto está sob a licença MIT