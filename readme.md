# Documentação do Projeto

## **Como instalar e executar o projeto**

### **Pré-requisitos**
- Node.js instalado (versão 14 ou superior).
- Gerenciador de pacotes `npm` ou `yarn`.
- Banco de dados SQLite (configurado automaticamente pelo Prisma).
- Postman ou outra ferramenta para testar as requisições.

### **Passos para instalação**

1. **Clone o repositório**:
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>

2. **Instale as dependências:**
    npm install

3. **Configure o banco de dados: O banco de dados SQLite já está configurado no arquivo .env. Certifique-se de que o arquivo .env contém a seguinte configuração:**
    DATABASE_URL="file:./banco.db"

4. **Execute as migrações do Prisma: Gere o banco de dados e as tabelas com o comando:**
    npx prisma migrate dev --name init

5. **Inicie o servidor: Execute o servidor com o comando:**
    npm start

    OBS: O servidor estará disponível em http://localhost:3000.

### **Decisões de Design e Arquitetura Tomadas**

1. **Arquitetura MVC:**

    *O projeto foi estruturado seguindo o padrão Model-View-Controller (MVC):*
    *Model:* Gerencia a interação com o banco de dados usando o Prisma.
    *Controller:* Contém a lógica de negócios e manipula as requisições e respostas.
    *Routes:* Define os endpoints e conecta as rotas aos controladores.
    
2. **Prisma ORM:**
    O Prisma foi escolhido como ORM para facilitar a interação com o banco de dados SQLite, permitindo migrações e consultas eficientes.

3. **Banco de Dados SQLite:**
    O SQLite foi escolhido por ser leve e fácil de configurar, ideal para projetos pequenos ou em desenvolvimento.

4. **Validação Simples:**
    As validações básicas (como campos obrigatórios) foram implementadas diretamente nos controladores.

### **Tecnologias Utilizadas**

1. **Node.js:**
    Plataforma para execução do JavaScript no backend.

2. **Express.js:**
    Framework para criação de APIs REST.

3. **Prisma:**
    ORM para interação com o banco de dados.

4. **SQLite:**
    Banco de dados leve e embutido.

5. **Postman:**
    Ferramenta para testar as requisições HTTP

