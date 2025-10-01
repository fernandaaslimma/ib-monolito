#language: pt

@Position
Funcionalidade: Posições
  Para que eu possa visualizar os meus investimento(s)
  Eu como usuário que possuo investimento(s) no Internet Banking
  Quero visualizar todos os investimentos que tenho investido, assim como possíveis movimentações que estejam em andamento

  Contexto: Acessar a opção de Posições de fundos
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E acesso a funcionalidade de fundos de posições

  @Implemented
  Cenário: Visualizar versão antiga de fundos de posições
    Quando vou para versão anterior de fundos de posições
    Então visualizo a versão antiga de fundo de posições
    E vejo que é possível retornar para a versão simplificada

  @Implemented
  Cenário: Visualizar que a quantidade de ativos refletem na listagem de fundos efetivados
    Então visualizo que a quantidade de ativos refletem na listagem de fundos efetivados

  @Implemented
  Cenário: Visualizar informação de fundo indisponível quando resgate estiver como indefinido
    Quando tento acessar um fundo da minha listagem com o tipo de resgate como indefinido
    Então visualizo que a informação do fundo está indisponível

  @Implemented @SmokeTest
  Cenário: Visualizar informações detalhadas de um fundo a partir de posições
    Quando seleciono um fundo com prazo de regaste
    Então visualizo que é possível ver informações de rendimento
    E vejo que é possível investir novamente nesse mesmo fundo

  @Implemented
  Cenário: Acessar opção de investir a partir de posições de fundos
    Quando seleciono em investir
    Então visualizo que é possível acessar a funcionalidade de Fundos de Investimento

  @Implemented @RedeemPositions @SmokeTest
  Cenário: Solicitar resgate em um determinado fundo
    Quando solicito um resgate de um fundo disponível
    Então visualizo o toastr de que a solicitação de resgate foi realizada com sucesso
    E vejo que é possível ver o resumo da operação

  @Implemented @RedeemPositions
  Cenário: Visualizar crítica para resgate de movimentação mínima
    Quando tento efetuar um resgate abaixo da movimentação mínima permitida
    Então visualizo uma crítica de valor mínimo a ser resgatado
    E vejo que não é possível continuar com o resgate

  @Implemented @RedeemPositions
  Cenário: Visualizar crítica para saldo mínimo para permanência
    Quando tento efetuar um resgate cujo saldo mínimo para permanência fique abaixo do permitido
    Então visualizo uma crítica de saldo mínimo para permanência
    E vejo que não é possível continuar com o resgate

  @Implemented @RedeemPositions
  Cenário: Visualizar crítica para valor acima do disponível para resgate
    Quando tento efetuar um resgate maior que o saldo bruto disponível
    Então visualizo uma crítica de valor maior que saldo disponível
    E vejo que não é possível continuar com o resgate

  @Implemented @Manual @Mock @Skip
  Cenário: Não realizar resgate de um fundo após limite diário permitido
    Quando tento efetuar um resgatede um fundo disponível
    Então visualizo que o limite diário foi atingido
    E vejo que não é possível continuar com o resgate
