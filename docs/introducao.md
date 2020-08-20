# 📚 Introdução

Basicamente o projeto será criado para **controlar** as **despesas** de colaboradores que estarão **viajando a negócios**. Algumas **empresas** disponibilizam um determinado **valor** de crédito para um funcionário utilizar durante uma **viagem de negócios**. Seria interessante ter um **controle dos gastos** durante o período em questão, tanto para **empresa** quanto para o **colaborador**, pois ambos terão uma relação de valores:

- Quanto foi **gasto**?
- Qual o **valor inicial**?
- Precisa de mais **crédito**?
- Quanto ainda **pode gastar**?

> Inicialmente esse projeto foi criado como avalição final de estágio.

# 💬 Conceitos

Para que haja uma linguagem _ubíqua_ entre os **consumidores** e **contribuidores**, abaixo segue a explicação de cada **conceito** presente no projeto:

## 🚶 Usuário

Pessoa quem utilizará os **recursos** da aplicação. Nesse caso existem **dois** tipos de usuário: _administrador_ e _colaborador_, aquele é responsável por **gerenciar** contas e outros **colaboradores**, pode-se associar ao responsável pelo **setor financeiro** da empresa; e esse é quem **utiliza** o crédito oferecido como bem entender.

## 🏦 Conta

Representação de uma **conta bancária** onde estarão associados o **administrador**, **colaborador** e as **movimentações** feitas por esse.

## 💸 Movimentação

Representação de modificação no **saldo** da conta. Análogo ao conceito de usuário, existem **duas** categorias de movimentação: _crédito_ e _débito_, respectivamente significam **entrada** ou **saída** de um determinado valor.
