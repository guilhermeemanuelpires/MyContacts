# Meus Contatos
## About 🧾
Projeto desenvolvido para demonstrar o conhecimento nas tecnologias abordadas.O projeto MyContacts consiste em um pequeno cadastro de contatos, onde temos um cabeçalho que define as informações básicas da pessoa, como nome e sobrenome, em seguida temos o detalhe do cabeçalho, onde adicionamos os respectivos contatos, sejam telefone, e-mail e etc.

Para o desenvolvimento da aplicação foram utilizado seguintes tecnologias e ferramentas.
#### Backend
- Node js
- Express
- TypeOrm
#### Banco de Dados
- MySql ou MariaDb
#### Frontend
- Vue js
- Bootstrap
#### Configuração do banco de dados
- Para realizar a configuração de banco é necessário criar uma base chamada “contacts" ou como preferir.
- Agora você terá que definir alguns parâmetros obrigatórios, onde se define a configuração do arquivo de conexão do banco de dados do projeto backend, que fica no diretório **“MyContacts\backend\ormconfig.json”**.
* **type :** Define o tipo do banco de dados utilizado MySql ou MariaDb.
* **host :** Define o local onde está rodando o serviço do banco escolhido.
* **port :** Define a porta do serviço banco de dados.
* **username :** Define o usuário do banco de dados.
* **password :**  Define a senha do banco de dados.
* **database :** Define a nome da Banco a ser utlizado. 
* Com tudo configurado corretamente você já pode execuatr o servidor **“npm start”**
