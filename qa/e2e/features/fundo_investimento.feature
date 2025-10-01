#language: pt

@InvestmentFund
Funcionalidade: Fundos de investimento
  Para que eu possa ter mais praticidade em investir e não precisar ligar para os bankers
  Como usuário do Internet Banking
  Quero ter a possibilidade de investir em fundos de investimento de forma digital, simples e prática

  @Implemented
  Cenário: Visualizar descrição sobre fundos de investimento
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E acesso a funcionalidade de fundos de investimento
    Quando acesso um fundo disponível para aplicação
    # E desejo saber mais sobre fundo de investimentos
    Então visualizo a descrição sobre fundos de investimento

  @Implemented
  Cenário: Visualizar disclaimer de rentabilidade no período menor que 6 meses de constituição
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E acesso a funcionalidade de fundos de investimento
    Quando acesso um fundo que possui a rentabilidade sem histórico
    Então visualizo o disclaimer informando que a rentabilidade só pode ser exibida após 6 meses de constituição

  @Implemented
  Cenário: Visualizar disclaimer de rentabilidade no período entre 6 a 12 meses de constituição
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E acesso a funcionalidade de fundos de investimento
    Quando acesso um fundo que possui alguma rentabilidade no período entre 6 a 12 meses de constituição
    Então visualizo o disclaimer informando que o produto possui menos de 12 meses de constituição

  @Implemented
  Cenário: Não exibir disclaimer de rentabilidade em fundos com constituição acima de 12 meses
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E acesso a funcionalidade de fundos de investimento
    Quando acesso um fundo que possui alguma rentabilidade com constituição acima de 12 meses
    Então vejo que não é exibido disclaimer de período de contribuição

  @Implemented
  Cenário: Visualizar alteração de valor ao selecionar valor incrementador
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E acesso a funcionalidade de fundos de investimento
    Quando acesso um fundo para aplicar um valor de investimento
    E informo um valor para aplicação do fundo de R$ 500,00
    E seleciono o valor incrementador de R$ 5 mil duas vezes
    Então visualizo que o valor informado é de R$ 10.500,00 mil

  @Implemented
  Cenário: Visualizar crítica para saldo insuficiente
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E acesso a funcionalidade de fundos de investimento
    Quando acesso um fundo para aplicar um valor de investimento
    E preencho um valor acima do disponível na minha conta em fundo de investimento
    Então visualizo uma crítica de que meu saldo é insuficiente para essa aplicação
    E vejo que não é possível continuar com a aplicação

  @Implemented
  Cenário: Visualizar crítica para aplicação mínima em um fundo que nunca fiz investimento
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E acesso a funcionalidade de fundos de investimento
    Quando acesso um fundo que nunca fiz uma aplicação
    E preencho um valor abaixo da aplicação mínima
    Então visualizo uma crítica de valor mínimo a ser aplicado
    E vejo que não é possível continuar com a aplicação

  @Implemented
  Cenário: Realizar troca de conta para realizar aplicação
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E acesso a funcionalidade de fundos de investimento
    Quando acesso um fundo para aplicar um valor de investimento
    E seleciono outra conta disponível
    Então visualizo que minha conta foi alterada

  @Implemented
  Cenário: Exibir alerta de preenchimento do Suitability ao tentar investir em um fundo de investimento
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento Suitability
    E acesso a funcionalidade de fundos de investimento
    Quando acesso um fundo para aplicar um valor de investimento
    Então visualizo que é necessário realizar o preenchimento do meu Suitability

  @Implemented
  Cenário: Exibir alerta de atualização cadastral ao tentar investir em um fundo de investimento
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento Cadastral
    E acesso a funcionalidade de fundos de investimento
    Quando acesso um fundo para aplicar um valor de investimento
    Então visualizo que é necessário realizar a atualização dos meus dados cadastrais

  @Implemented
  Cenário: Não exibir opção de investir com usuário sem regra necessária
    Dado que estou logado na home do Internet Banking com o usuário PORTABILIDADE CREDITO PJ
    Então visualizo que não existe a opção para investir

  @Implemented
  Cenário: Não realizar aplicação em fundos de investimento sem aceitar termos necessários
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E acesso a funcionalidade de fundos de investimento
    Quando informo um determinado valor em um fundo que nunca efetuei uma aplicação
    Então visualizo que é exibido os termos de aceite para efetuar uma aplicação
    E vejo que não é possível continuar com a aplicação

  @Implemented
  Cenário: Não exibir termo de aceite em um fundo que possuo investimento
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E acesso a funcionalidade de fundos de investimento
    Quando preencho os dados necessário para realizar um investimento
    Então visualizo que não é solicitado o termo de aceite
    E vejo que é solicitado uma identificação por dois fatores

  @Implemented
  Cenário: Efetuar investimento em um fundo disponível
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E acesso a funcionalidade de fundos de investimento
    Quando preencho os dados necessário para realizar um investimento
    E informo um token válido do usuário Fundo Investimento
    Então visualizo o toastr de que a solicitação de aplicação foi realizada com sucesso
    E vejo que é possível ver o resumo da operação

  @Implemented @Skip
  Cenário: Reenvestir em um fundo disponível
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E acesso a funcionalidade de fundos de investimento
    Quando preencho os dados necessário para realizar um investimento em um fundo que ja possuo investimento
    E informo um token válido do usuário Fundo Investimento
    Então visualizo o toastr de que a solicitação de aplicação foi realizada com sucesso
    E vejo que é possível ver o resumo da operação

  @NotImplemented
  Cenário: Visualizar crítica em informar um valor abaixo do minímo em um fundo a qual já possuo uma aplicação
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E acesso a funcionalidade de fundos de investimento
    Quando preencho um valor abaixo do mínimo solicitado no fundo
    Então visualizo uma crítica de valor mínimo a ser aplicado
    E vejo que não é possível continuar com a aplicação

  @Implemented
  Cenário: Desabilitar investimento de um fundo fechado
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E acesso a funcionalidade de fundos de investimento
    Quando acesso um fundo que está fechado para investimento
    Então visualizo uma mensagem de alerta que o fundo está fechado para novas aplicações
    E vejo que a opção de investir está desabilitada

  @Implemented @Skip
  Cenário: Visualizar informaçao de desenquadramento de perfil
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento Desenquadrado
    E acesso a funcionalidade de fundos de investimento
    Quando vou realizar uma aplicação em um fundo do tipo agressivo
    Então visualizo que é exibido a opção de desenquadramento

  @Implemented @Skip
  Cenário: Visualizar informaçao de desenquadramento de perfil depois que efetuar uma aplicação
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento Desenquadrado
    E acesso a funcionalidade de fundos de investimento
    Quando realizo um investimento do tipo agressivo
    E acesso novamente o mesmo fundo para efetuar uma aplicação
    Então visualizo que sempre será exibida a informação de desenquadramento de perfil

  @Implemented
  Cenário: Investir em um fundo do tipo qualificado
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento Qualificado
    E acesso a funcionalidade de fundos de investimento
    Quando preencho os dados necessário para realizar um investimento do tipo qualificado
    E informo um token válido do usuário Fundo Investimento Qualificado
    Então visualizo o toastr de que a solicitação de aplicação foi realizada com sucesso
    E vejo que é possível ver o resumo da operação

  @Implemented
  Cenário: Não investir em um fundo do tipo qualificado
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento Desqualificado
    E acesso a funcionalidade de fundos de investimento
    Quando tento investir em um fundo do tipo qualificado
    Então visualizo uma mensagem de alerta indicando que não consigo investir em um fundo do tipo qualificado
    E vejo que a opção de investir está desabilitada

  @NotImplemented
  Cenário: Não investir em um fundo na qual o valor seja maior que da minha conta

  @Implemented @Manual
  Cenário: Desabilitar opção de investir em um fundo após o horário limite
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento
    E acesso a funcionalidade de fundos de investimento
    Quando acesso um fundo disponível para aplicação após o horário limite
    Então visualizo uma mensagem de alerta que não é possível realizar aplicações e resgate
    E vejo que não é possível continuar com a aplicação

  @Implemented @Manual @Mock
  Cenário: Empty state fundos de investimento
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento MFA
    E acesso a funcionalidade de fundos de investimento
    Então visualizo que não existe fundos para investimmento

  @Implemented @Manual @Mock
  Cenário: Investir em um fundo do tipo qualificado
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento Funcionário
    E acesso a funcionalidade de fundos de investimento
    Quando preencho os dados necessário para realizar um investimento do tipo qualificado
    E informo um token válido do usuário Fundo Investimento Funcionário
    Então visualizo o toastr de que a solicitação de aplicação foi realizada com sucesso
    E vejo que é possível ver o resumo da operação

  @VisualRegression
  Cenário: Visualizar lista de Produtos de Investimento
  @VisualRegression
  Cenário: Visualizar todos os fundos de investimento disponíveis
  @VisualRegression
  Cenário: Visualizar todas as informações do fundo selecionado
  @VisualRegression
  Cenário: Visualizar disclaimer de rentabilidade menor que 6 meses de constituição
  @VisualRegression
  Cenário: Visualizar disclaimer de rentabilidade menor que 12 meses de constituição
  @VisualRegression
  Cenário: Visualizar disclaimer de rentabilidade dos últimos 12 meses de constituição
  @VisualRegression
  Cenário: Visualizar toda a descrição sobre o fundo de investimento selecionado
  @VisualRegression
  Cenário: Visualizar dados de atualização da rentabilidade do fundo
