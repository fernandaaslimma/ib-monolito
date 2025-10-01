#language: pt

@InvestmentLCA @Pilot
Funcionalidade: Investimento de LCA
  Para realizar resgates de LCA
  Como Pessoa fisica
  Quero ter a opção de fazer resgate LCA pelo meu celular para acelerar a transação bancária, sem a necessidade de ligar para o meu banker e solicitar a retirada do valor.

  @Implemented
  Cenário: Visualizar os cards de investimento de LCA
    Dado que estou logado na home do Internet Banking com o usuário Renda Fixa Conservador
    E acesso a opção de investir em Renda Fixa
    Então visualizo os cards disponíveis para investimento

  @Implemented @SmokeTest
  Cenário: Investir em renda fixa - LCA do tipo Conservador
    Dado que estou logado na home do Internet Banking com o usuário Renda Fixa Conservador
    E acesso a opção de investir em Renda Fixa
    Quando invisto em um LCA do tipo Conservador
    Então visualizo o toastr de que a solicitação de aplicação foi realizada com sucesso
    E vejo que é possível ver o resumo da operação

  @Implemented
  Cenário: Visualizar crítica ao informar um valor abaixo do mínimo
    Dado que estou logado na home do Internet Banking com o usuário Renda Fixa Conservador
    E acesso a opção de investir em Renda Fixa
    Quando tento investir em LCA com um valor mínimo
    Então visualizo uma mensagem de valor mínimo a ser aplicado

  @Implemented
  Cenário: Visualizar crítica ao informar um valor acima do máximo
    Dado que estou logado na home do Internet Banking com o usuário Renda Fixa Conservador
    E acesso a opção de investir em Renda Fixa
    Quando tento investir em LCA com um valor máximo
    Então visualizo uma mensagem de valor máximo a ser aplicado

  @Implemented
  Cenário: Exibir alerta de preenchimento de perfil do investidor ao tentar investir em uma renda fixa
    Dado que estou logado na home do Internet Banking com o usuário Renda Fixa Suitability
    E acesso a opção de investir em Renda Fixa
    Quando tento efetuar um investimento em LCA
    Então visualizo que é necessário realizar o preenchimento do meu Suitability

  @Implemented
  Cenário: Exibir alerta de atualização cadastral ao tentar investir em uma renda fixa
    Dado que estou logado na home do Internet Banking com o usuário Renda Fixa Cadastral
    E acesso a opção de investir em Renda Fixa
    Quando tento efetuar um investimento em LCA
    Então visualizo que é necessário realizar a atualização dos meus dados cadastrais

  @Manual @NotImplemented
  Cenário: Não investir em renda fixa - LCA após o horário limite
    Dado que estou logado na conta de investimento de Renda Fixa - LCA
    E acesso a opção de investir em Renda Fixa
    Quando acesso um card disponível para aplicação após o horário limite
    Então visualizo uma mensagem de alerta que não é possível realizar aplicações e resgate

  @Skip @NotImplemented @NotImplementedBackEnd
  Cenário: Investir em renda fixa - LCA do tipo Agressivo
    Dado que estou logado na conta de investimento de Renda Fixa - LCA
    E acesso a opção de investir em Renda Fixa
    Quando invisto em um LCA do tipo Agressivo
    Então visualizo o toastr de que a solicitação de aplicação foi realizada com sucesso
    E vejo que é possível ver o resumo da operação

  @Implemented @InvestmentLCA
  Cenário: Exibir alerta para mais de uma aplicação no mesmo dia para a mesma LCA
    Dado que estou logado na home do Internet Banking com o usuário Renda Fixa Conservador
    E acesso a opção de investir em Renda Fixa
    Quando invisto em um LCA do tipo Conservador
    E tento investir no mesmo LCA em seguida
    Então visualizo o alerta de que já existe movimentações em andamento para essa aplicação em renda fixa

  @Skip @NotImplemented @NotImplementedBackEnd
  Cenário: Exibir alerta para um perfil que não corresponde ao perfil da aplicação
    Dado que estou logado na conta de investimento de Renda Fixa Conservador
    Dado acesso a funcionalidade de investir em renda Fixa
    Quando invisto em um LCA do meu perfil investidor
    Então visualizo o alerta de que essa movimentação não corresponde ao meu perfil de investidor
