#language: pt

@FeedbackConection @Manual
Funcionalidade: Feedback perda de conexão
  Para receber feedback sobre a perda de conexão
  Como usuário do sistema
  Quero receber um feedback sobre a variação da conexão, sendo a perda ou reconexão

  Contexto: Estar na tela de login
    Dado Estar logado na aplicação

  @Implemented
  Cenario: Receber feedback sobre perda de conexão ao navegar pelo sistema
    Quando navegar entre os menus do sistema
    E acontecer a perda de conexão
    Então recebo um feedback sobre a perda da conexão
    E vejo que não sai do contexto da aplicação

  @Implemented
  Cenario: Receber o feedback de perda de conexão quando vou efetuar uma transferência
    Quando vou efetuar uma transação
    E acontece a perda de conexão
    Então a modal de perda conexão é exibida

  @Implemented
  Cenario: Visualizar toaster de perda de conexão após fechar modal
    Quando vou efetuar uma transação
    E acontece a perda de conexão
    E fecho a modal que é exibida
    Então visualizo que o toaster é exibido

  @Implemented
  Cenario: Receber o feedback de conexão restabelecida quando vou fazer uma transferência
    Quando vou efetuar uma transação
    E acontece a perda de conexão
    E a conexão é restabelecida
    Então visualizo que a modal de perda de conexão não está sendo exibida
    E visualizo que o toaster de reconexão está sendo exibida
