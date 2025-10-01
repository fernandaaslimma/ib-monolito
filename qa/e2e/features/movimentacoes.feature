#language: pt

@MovementsInProgress
Funcionalidade: Movimentações em andamento
  Para que eu possa visualizar minhas movimentações
  Eu como usuário que possuo investimento(s) no Internet Banking
  Quero visualizar o andamento dos meus investimentos

  @Implemented
  Cenário: Visualizar investimentos disponiveis
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    Quando acesso as minha movimentações em andamento
    Então visualizo todas as minhas movimentações em andamento

  @Implemented
  Cenário: Visualizar investimento realizado no dia corrente
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E efetuo uma aplicação em fundos de investimento
    Quando acesso as minha movimentações em andamento
    Então visualizo que a aplicação que eu realizei está sendo exibida

  @Implemented
  Cenário: Não visualizar menu de movimentações
    Dado que estou logado no Internet Banking com um usuário que não possui nenhum investimento
    Então visualizo que a informação de movimentações não é exibida

