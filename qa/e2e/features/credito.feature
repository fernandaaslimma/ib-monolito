#language: pt

@Remittances @MockWihoutNotification @Pilot
Funcionalidade: Recebíveis
  Para que eu possa realizar download e upload das minhas remessas
  Eu como usuário do Internet Banking com acesso ao menu de crédito
  Quero poder realizar download e upload dos arquivos disponíveis

  @Implemented
  Cenário: Realizar download de um recebível
    Dado que estou logado na home do Internet Banking com o usuário PJ3
    Quando faço o download de um recebível
    Então visualizo que o download foi realizado com sucesso

  @Implemented
  Cenário: Visualizar que não possuo nenhum recebível
    Dado que estou logado na home do Internet Banking com o usuário PJ9
    Quando acesso a opção de retorno para download de recebíveis
    Então visualizo o retorno "Você não possui nenhum arquivo de retorno para download no momento"

  @Manual
  Cenário: Filtrar por um período específico em que possua recebíveis
    Dado que estou logado na home do Internet Banking com o usuário PJ3
    Quando seleciono por um período que exista recebíveis
    Então visualizo que existem recebíveis no período selecionado

  @Manual
  Cenário: Filtrar por um período específico em que não possua recebíveis
    Dado que estou logado na home do Internet Banking com o usuário PJ3
    Quando seleciono por um período que não exista recebíveis
    Então visualizo que não existe nenhum arquivo para download no período selecionado

  @Manual
  Cenário: Limpar filtro selecionado de recebíveis
    Dado que estou logado na home do Internet Banking com o usuário PJ3
    E possua um filtro previamente selecionado
    Quando limpo o filtro de recebíveis
    Então visualizo todos os recebíveis disponíveis

  @Implemented
  Cenário: Realizar upload de remessa
    Dado que estou logado na home do Internet Banking com o usuário PJ3
    Quando faço o upload de uma remessa
    Então visualizo a mensagem "Envio Realizado."

  @Implemented
  Cenário: Visualizar alerta de remessa duplicada
    Dado que estou logado na home do Internet Banking com o usuário PJ3
    Quando tento realizar o upload de um arquivo enviado anteriormente
    Então visualizo a mensagem "Arquivo duplicado, verifique os envios anteriores."

  @Implemented
  Cenário: Visualizar alerta de erro ao tentar fazer upload com arquivo não permitido
    Dado que estou logado na home do Internet Banking com o usuário PJ3
    Quando tento realizar o upload de um arquivo que não é permitido
    Então visualizo a mensagem "Envio não realizado. Verifique a extensão ou número de arquivos."

  @Implemented
  Cenário: Visualizar alerta de erro ao tentar fazer upload de um arquivo com tamanho não permitido
    Dado que estou logado na home do Internet Banking com o usuário PJ3
    Quando tento realizar o upload de um arquivo com o tamanho acima do permitido
    Então visualizo a mensagem "Envio não realizado. Tamanho máximo excedido."
  @Implemented
  Cenário: Visualizar alerta de erro ao tentar fazer upload de um arquivo CNAB no formato inválido
    Dado que estou logado na home do Internet Banking com o usuário PJ3
    Quando tento realizar o upload de um arquivo CNAB inválido
    Então visualizo a mensagem "Envio não realizado. Layout CNAB inválido."

  @Implemented
  Cenário: Visualizar que não possuo nenhuma remessa feita
    Dado que estou logado na home do Internet Banking com o usuário PJ9
    Quando acesso a opção de upload de remessas em recebíveis
    Então visualizo o retorno "Você não possui nenhuma remessa disponível no momento."
