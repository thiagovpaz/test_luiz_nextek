# Gerenciador de Tarefas

Este projeto é uma aplicação de gerenciamento de tarefas com funcionalidades como adicionar, listar, editar, excluir, buscar e filtrar tarefas.

## Tecnologias Utilizadas

- **Frontend:** ReactJS (Vite), React Toastify, CSS Modules, Axios
- **Backend:** NestJS, SQLite, TypeORM

## Como Rodar o Projeto

### Requisitos

Certifique-se de ter instalado:

- Node.js (16 ou superior)
- npm ou yarn
- Git

### 1. Clonar o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```

### 2. Rodar o Backend

1. Entre na pasta do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm run start:dev
   ```
4. O backend estará rodando em `http://localhost:3000`.

### 3. Rodar o Frontend

1. Entre na pasta do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm run dev
   ```
5. O frontend estará rodando em `http://localhost:5173`.

### 4. Testar a Aplicação

1. Acesse `http://localhost:5173` no navegador.
2. Certifique-se de que o backend está ativo.
3. Utilize as funcionalidades:
   - Adicionar tarefas
   - Editar, excluir e alternar o status
   - Buscar e filtrar tarefas

