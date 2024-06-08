Claro! Vou ajustar o README.md para não incluir o Redux e formatar para você colocar diretamente em um arquivo markdown:

```markdown
# Pizzashop Web

Pizzashop Web é uma aplicação web para gerenciar pedidos de uma pizzaria. Ela permite aos usuários visualizar o menu, adicionar pizzas ao carrinho e finalizar pedidos. O projeto foi desenvolvido com várias tecnologias modernas para garantir uma experiência de usuário fluida e eficiente.

## Funcionalidades

- **Visualização do Menu**: Os usuários podem visualizar todas as pizzas disponíveis, incluindo descrições e preços.
- **Carrinho de Compras**: Os usuários podem adicionar pizzas ao carrinho de compras.
- **Finalização do Pedido**: Os usuários podem finalizar o pedido fornecendo informações de contato e endereço de entrega.
- **Autenticação de Usuários**: Registro e login de usuários para gerenciar pedidos personalizados.
- **Administração**: Interface para administradores gerenciarem o menu e os pedidos.

## Tecnologias Utilizadas

### Frontend

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Biblioteca para navegação em aplicações React.
- **Axios**: Cliente HTTP para realizar requisições ao backend.
- **Material-UI**: Biblioteca de componentes React para estilização.
- **Formik**: Biblioteca para criação e validação de formulários.
- **Yup**: Biblioteca para validação de schemas, usada com Formik.

### Backend

- **Node.js**: Ambiente de execução JavaScript server-side.
- **Express.js**: Framework web para Node.js.
- **MongoDB**: Banco de dados NoSQL.
- **Mongoose**: Biblioteca para modelagem de dados no MongoDB.
- **JSON Web Token (JWT)**: Padrão para criação de tokens de acesso.
- **Bcrypt**: Biblioteca para hashing de senhas.

### Ferramentas e Outras Bibliotecas

- **Docker**: Plataforma para desenvolvimento, envio e execução de aplicações em containers.
- **ESLint**: Ferramenta de linting para manter o código limpo e consistente.
- **Prettier**: Ferramenta de formatação de código.
- **Jest**: Framework de testes para JavaScript.
- **Enzyme**: Utilitário de testes para React.

## Como Executar o Projeto

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado. [Download Node.js](https://nodejs.org/)
- **Docker**: Para execução dos containers. [Download Docker](https://www.docker.com/)

### Passos para Executar

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/Glendson/pizzashop-web.git
   cd pizzashop-web
   ```

2. **Instale as Dependências**

   Para o frontend:
   ```bash
   cd client
   npm install
   ```

   Para o backend:
   ```bash
   cd ../server
   npm install
   ```

3. **Configuração do Ambiente**

   Crie um arquivo `.env` na pasta `server` e adicione as seguintes variáveis:

   ```
   MONGO_URI=<sua_uri_mongodb>
   JWT_SECRET=<seu_segredo_jwt>
   ```

4. **Inicie a Aplicação**

   Use Docker para iniciar os serviços:

   ```bash
   docker-compose up
   ```

   Ou, inicie manualmente:

   Para o backend:
   ```bash
   cd server
   npm start
   ```

   Para o frontend:
   ```bash
   cd client
   npm start
   ```

   A aplicação estará disponível em `http://localhost:3000`.

## Contribuição

1. Faça um Fork do repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin feature/nova-feature`).
5. Crie um novo Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.
```

Você pode salvar esse conteúdo em um arquivo chamado `README.md` no seu projeto. Se precisar de mais alguma modificação, me avise!