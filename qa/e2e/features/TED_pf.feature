#language: pt

@TransferTEDPF @MockWihoutNotification
Funcionalidade: Cadastro de TED para pessoa fisíca
  Para que eu possa efetuar uma transação bancária
  Como usuário pessoa física do Internet Banking
  Quero ter a possibilidade de realizar transferência de forma digital, simples e prática

 Contexto: Acessar a opção de cadastro de TED para pessoa física
  Dado que estou logado na home do Internet Banking com o usuário TED PF
  E acesso a funcionalidade de cadastro de TED para pessoa física

  @Implemented
  Cenário: Efetuar cadastro de TED para pessoa física no dia corrente com sucesso
    Quando efetuo uma TED PF cadastrando uma conta sem salvar
    Então visualizo a mensagem de transferência realizada com sucesso
    E visualizo que a TED foi realizada com sucesso

  @Implemented @Manual
  Cenário: Salvar nova conta bacária da mesma titularidade ao efetuar uma TED
    Quando efetuo uma TED PF cadastrando uma nova conta
    E acesso as minhas contas cadastradas
    Então visualizo a minha nova conta bancária cadastrada

  @Implemented @SmokeTest
  Cenário: Efetuar agendamento de TED para pessoa física em um dia útil com sucesso
    Quando informo os dados necessários de agendamento para efetuar a minha TED
    Então visualizo a mensagem de transferência agendada com sucesso
    E visualizo que a TED foi agendada com sucesso

  @Implemented
  Cenário: Selecionar valor incrementador para realizar cadastro de TED
    Quando seleciono o incrementador de valor sugerido
    E informo os meus dados bancários
    Então visualizo que a TED foi realizada com sucesso

  @Implemented
  Cenário: Alterar minha conta para realizar TED
    Quando informo os dados para realizar uma TED
    E decido alterar minha conta que será beneficada
    Então visualizo que a TED foi realizada com sucesso

  @Implemented
  Cenário: Alterar data de transferência
    Quando informo os dados para realizar uma TED
    E decido alterar para uma data futura
    Então visualizo que a TED foi agendada com sucesso

  @Implemented
  Cenário: Não efetuar cadastro de TED sem preencher os campos necessários
    Quando não preencho todos os dados necessários para efetuar o cadastro da TED
    Então visualizo que não é possivel prosseguir com a criação da TED

  @Implemented
  Cenário: Selecionar conta previamente cadastrada para afetuar TED
    Quando efetuo uma TED PF selecionando uma conta previamente cadastrada
    Então visualizo que a transação foi realizada com a conta selecionada

  @Implemented
  Cenário: Visualizar mudança entre contas previamente cadastradas
    Quando seleciono uma conta previamente cadastrada
    E seleciono outra conta diferente
    Então visualizo que a conta que está sendo exibida foi da minha última mudança

  @Implemented
  Cenário: Visualizar alteração de valor ao selecionar valor incrementador total
    Quando informo um valor para transferência de R$ 500,00
    E decido selecionar o valor total sugerido
    Então visualizo que consta somente o valor total da minha conta

  @Implemented
  Cenário: Visualizar alteração de valor ao selecionar valor incrementador
    Quando informo um valor para transferência de R$ 500,00
    E seleciono o valor incrementador de R$ 5 mil duas vezes
    Então visualizo que o valor informado é de R$ 10.500,00 mil

  @Implemented
  Cenário: Visualizar crítica para saldo insuficiente
    Quando preencho um valor acima do disponível na minha conta
    Então visualizo uma crítica de que meu saldo é insuficiente

  @Implemented @SmokeTest
  Cenário: Visualizar crítica ao selecionar data não útil
    Quando seleciono um dia não útil para realizar TED
    Então visualizo a crítica para selecionar uma data útil

  @Implemented
  Cenário: Visualizar crítica no campo para informar uma data
    Quando não informo uma data para realizar uma TED
    Então visualizo a crítica que é necessário informar uma data

  @Implemented @Manual @Skip
  Cenário: Realizar cadastro de TED antes do horário permitido
    Quando efetuo uma TED PF informando os dados necessários antes do horário permitido
    E visualizo um disclaimer informando o horário em que a TED será efetivada
    Então visualizo que a TED foi realizada com sucesso

  @Implemented @Manual @Skip
  Cenário: Realizar cadastro de TED após horário permitido
    Quando efetuo uma TED PF informando os dados necessários após o horário permitido
    E visualizo a opção de realizar TED para hoje está desabilitada
    E visualizo um disclaimer informando o horário em que a TED será efetivada
    Então visualizo que o agendamento está para o próximo dia útil

  @Implemented @Manual @Skip
  Cenário: Erro de conexão durante o processo de TED
    Quando efetuo uma TED PF informando os dados necessários
    E durante o processo tenho uma perda de conexão
    Então recebo um feedback sobre a perda da conexão

  @Implemented @Manual @Mock @Skip
  Cenário: Erro durante o processo de TED
    Quando efetuo uma TED PF informando os dados necessários
    E durante o processo acontece um erro no sistema
    Então visualizo que um erro aconteceu

  @Implemented @Manual @Mock @Skip
  Cenário: Empty State para usuário que não possui contas previamente cadastrada
    Então visualizo que o usuário não possui nenhuma conta previamente cadastrada

  @Implemented
  Cenário: Buscar por um contato previamente cadastrado
    Quando busco por um contato préviamente cadastro
    Então visualizo o contato pesquisado

  @Implemented
  Cenário: Buscar por um contato que não está previamente cadastrado
    Quando busco por um contato que não está previamente cadastrado
    Então visualizo que o contato não está cadastrado

  @Implemented @SmokeTest
  Cenário: Efetuar cadastro de TED para uma pessoa terceira
    Quando efetuo uma TED PF para uma conta terceira
    Então visualizo a mensagem de transferência realizada com sucesso
    E visualizo que a TED foi realizada com sucesso

  @Implemented
  Cenário: Visualizar mensagem de limite atingido
    Quando tento cadastrar uma TED PF acima do valor permitido de 300 mil
    Então visualizo mensagem de limite atingido
