#language: pt

@Overview @MockNotification
Funcionalidade: Visão Geral
  Para que eu possa ter uma melhor visibilidade da minha carteira de investimentos
  Eu como usuário que possuo investimento(s) no Internet Banking
  Quero ter uma visão consolidada dos meus produtos ativos e das minhas movimentações

  @Implemented
  Cenário: Visualizar posições de renda fixa
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento - Visão Geral
    Quando seleciono a opção renda fixa a partir do menu de produtos
    Então visualizo as posições investidas em renda fixa

  @Implemented
  Cenário: Visualizar posições de renda variável
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento - Renda Variável
    Quando seleciono a opção renda variável a partir do menu de produtos
    Então visualizo as posições investidas em renda variável

  @Implemented @SmokeTest
  Cenário: Visualizar posições de fundo de investimento
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento - Visão Geral
    Quando seleciono a opção fundo de investimento a partir do menu de produtos
    Então visualizo as posições do fundo de investimento

  @Implemented @SmokeTest
  Cenário: Visualizar classe de ativos com investimento
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento - Visão Geral
    Quando acesso a classe de ativos a partir do menu
    Então visualizo as classes a qual eu possuo investimento

  @Implemented @SmokeTest
  Cenário: Visualizar minhas movimentações
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento - Visão Geral
    Quando acesso a opção movimentações a partir do menu
    Então visualizo que possuo investimentos

  @Implemented
  Cenário: Visualizar as movimentações de um produto e período específico
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento - Visão Geral
    Quando acesso a opção movimentações a partir do menu
    E filtro por "um período específico"
    Então visualizo a movimentação desejada

  @Implemented
  Cenário: Visualizar todas as minhas movimentações de um produto específico
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento - Visão Geral
    Quando acesso a opção movimentações a partir do menu
    E decido ver mais
    Então visualizo que existe mais movimentações sendo exibida

  @Implemented
  Cenário: Visualizar as movimentações apenas de renda fixa
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento - Visão Geral
    Quando acesso a opção movimentações a partir do menu
    E filtro por "renda fixa"
    Então visualizo apenas as movimentações de renda fixa

  @Implemented
  Cenário: Visualizar as movimentações apenas de renda variável
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento - Renda Variável
    Quando acesso a opção movimentações a partir do menu
    E filtro por "renda variável"
    Então visualizo apenas as movimentações de renda variável

  @Implemented
  Cenário: Visualizar que nenhum resultado foi encontrado ao pesquisar por um período futuro
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento - Visão Geral
    Quando acesso a opção movimentações a partir do menu
    E filtro por "período futuro"
    Então visualizo que nenhum resultado foi encontrado

  @Implemented
  Cenário: Visualizar erro ao digitar um período do qual não exista movimentação
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento - Visão Geral
    Quando acesso a opção movimentações a partir do menu
    E filtro por "período que não exista movimentações"
    Então visualizo que nenhum resultado foi encontrado

  @Implemented
  Cenário: Visualizar que nenhum resultado foi encontrado em um ativo a qual não possuo investimento
    Dado que estou logado na home do Internet Banking com o usuário Fundo Investimento - Visão Geral
    Quando acesso a opção movimentações a partir do menu
    E filtro por "renda variável"
    Então visualizo que não possuo investimento no tipo de produto selecionado

  @Implemented @mockOnlyCheckingAccount
  Cenário: Visualizar que os cards de investimento não são exibidos quando o cliente possui apenas a conta corrente
    Dado que estou logado na home do Internet Banking com o usuário sem investimento
    Então visualizo que existe apenas o card de conta corrente

  @Implemented
  Cenário: Visualizar uma mensagem quando acessar a classe de ativos sem possuir nenhum investimento
    Dado que estou logado na home do Internet Banking com o usuário sem investimento
    Quando acesso a classe de ativos a partir do menu
    Então visualizo a mensagem "No momento você não tem classes de ativos para serem exibidos."

  @Implemented
  Cenário: Visualizar uma mensagem quando acessar produtos sem possuir nenhum investimento
    Dado que estou logado na home do Internet Banking com o usuário sem investimento
    Então visualizo a mensagem "No momento você não tem podutos para serem exibidos."

   @Implemented @Manual @skip
   Cenário: Acessar a opção de Floating Button
    Dado que estou logado na home do Internet Banking com o usuário "com Investimento" através do mobile
    Quando acesso a opção movimentações a partir menu
    E decido ver mais
    Então visualizo que é possível retornar para o topo a partir do Floating Button

  @Implemented @Manual @skip
  Cenário: Visualizar classe de ativos com investimento
    Dado que estou logado na home do Internet Banking com o usuário "com Investimento"
    Quando acesso a classe de ativos a partir do menu
    Então visualizo as classes a qual eu possuo investimento
    E vejo que não é possível acessar o detalhe de cada ativo

  @Implemented @Manual @skip
  Cenário: Verificar que é possível voltar para a página anterior ao selecionar o Arrow Button
  Dado que estou logado na home do Internet Banking com o usuário "com Investimento"
  Quando seleciono a opção fundo de investimento
  E seleciono a Arrow Button para retornar
  Então visualizo que retorno para a página anterior
