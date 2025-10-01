# language: pt

@TransferTEDPJ @MockWihoutNotification @Pilot
Funcionalidade: Cadastro e Gerenciamento de TED PJ
  Para que eu possa efetuar uma transação bancária
  Como usuário pessoa física do Internet Banking
  Quero ter a possibilidade de realizar transferência de forma digital, simples e prática

@Implemented
Cenario: Cancelar criação de TED
  Dado que estou logado na home do Internet Banking com o usuário PJ3
  Quando abro a modal para ingressar com os dados da transferência
  E cancelo a operação
  Então visualizo que a modal foi fechada

@Implemented
Cenario: Cancelar criação de TED na tela de resumo
  Dado que estou logado na home do Internet Banking com o usuário PJ3
  Quando entro com as informações válidas para um cadastro de uma nova transferência
  E cancelo a transferência
  Então visualizo que a modal de confirmação foi fechada

@Implemented
Cenario: Cadastro de transferência para o mesmo dia com saldo
  Dado que estou logado na home do Internet Banking com o usuário PJ3
  Quando entro com as informações válidas para um cadastro de uma nova transferência
  E confirmo a transferência
  Então visualizo a mensagem de transferência cadastrada com sucesso

@Implemented
Cenario: Aprovando TED do mesmo dia com saldo
  Dado que estou logado na home do Internet Banking com o usuário PJ5
  Quando o PJ5 aprova a TED do dia
  E visualizo a mensagem de transferência aprovada com sucesso
  E logo com o usuario PJ6
  E o PJ6 aprova a TED do dia
  Então visualizo a mensagem de transferência aprovada com sucesso
  E a TED deve ser exibida em Lançamentos Futuros como Aguardando Liquidação

@Implemented
Cenario: Agendamento de TED para o mesmo dia sem saldo
  Dado que estou logado na home do Internet Banking com o usuário PJ3
  Quando entro com informações necessárias para preenchimento da TED sem saldo
  E confirmo o agendamento de falta de saldo
  Então visualizo a mensagem de transferência agendada com sucesso

@Implemented
Cenario: Cancelar agendamento da TED para o mesmo dia sem saldo
  Dado que estou logado na home do Internet Banking com o usuário PJ3
  Quando entro com informações necessárias para preenchimento da TED sem saldo
  E confirmo a transferência
  E cancelo o agendamento por falta de saldo
  Então visualizo que voltei para o cadastro da TED

@Implemented
Cenário: Agendamento da TED para uma data futura com saldo
  Dado que estou logado na home do Internet Banking com o usuário PJ3
  Quando entro com informações para uma transferência com data futura
  E confirmo a transferência
  Então visualizo a mensagem de transferência agendada com sucesso

@Implemented
Cenario: Aprovando TED para uma data futura com saldo
  Dado que estou logado na home do Internet Banking com o usuário PJ5
  Quando o PJ5 aprova a TED com data futura
  E visualizo a mensagem de transferência aprovada com sucesso
  E logo com o usuario PJ6
  E o PJ6 aprova a TED com data futura
  Então visualizo a mensagem de transferência aprovada com sucesso

@Implemented
Cenário: Agendamento da TED para uma data futura sem saldo
  Dado que estou logado na home do Internet Banking com o usuário PJ3
  Quando entro com informações para uma transferência com data futura sem saldo
  E confirmo a transferência
  Então visualizo a mensagem de transferência agendada com sucesso

@Implemented
Cenario: Cadastro da TED com saldo para mesmo dia com usuário cadastrador e aprovador
  Dado que estou logado na home do Internet Banking com o usuário PJ8
  Quando entro com as informações válidas para um cadastro de uma nova transferência com uma conta existente
  E confirmo a transferência
  E aprovo a transferência com o PJ8
  E visualizo a mensagem de transferência criada e aprovada com sucesso
  E logo com o usuario PJ6
  E o PJ6 aprova a TED do dia
  Então visualizo a mensagem de transferência aprovada com sucesso
  E a TED deve ser exibida em Lançamentos Futuros como Aguardando Liquidação

@Implemented
Cenario: Cadastro da TED com saldo para uma data futura com usuário cadastrador e aprovador
  Dado que estou logado na home do Internet Banking com o usuário PJ8
  Quando entro com informações para uma transferência com data futura com uma conta existente
  E confirmo a transferência
  E aprovo a transferência com o PJ8
  E visualizo a mensagem de transferência agendada e aprovada com sucesso
  E logo com o usuario PJ6
  E o PJ6 aprova a TED do dia
  Então visualizo a mensagem de transferência aprovada com sucesso
  E a TED deve ser exibida em Lançamentos Futuros como Aguardando Liquidação

@Implemented
Cenario: Cadastro da TED sem saldo para o mesmo dia com usuário cadastrador e aprovador
  Dado que estou logado na home do Internet Banking com o usuário PJ8
  Quando entro com informações necessárias para preenchimento da TED sem saldo com uma conta existente
  E confirmo o agendamento de falta de saldo
  E aprovo a transferência com o PJ8
  E visualizo a mensagem de transferência criada e aprovada com sucesso
  E logo com o usuario PJ6
  E o PJ6 aprova a TED do dia
  Então visualizo a mensagem de transferência aprovada com sucesso
  E a TED deve ser exibida em Lançamentos Futuros como Aguardando Liquidação

@Implemented
Cenario: Cadastro da TED sem saldo para uma data futura com usuário cadastrador e aprovador
  Dado que estou logado na home do Internet Banking com o usuário PJ8
  Quando entro com informações para uma transferência com data futura sem saldo com uma conta existente
  E confirmo a transferência
  E aprovo a transferência com o PJ8
  E visualizo a mensagem de transferência agendada e aprovada com sucesso
  E logo com o usuario PJ6
  E o PJ6 aprova a TED do dia
  Então visualizo a mensagem de transferência aprovada com sucesso
  E a TED deve ser exibida em Lançamentos Futuros como Aguardando Liquidação

@Implemented
Cenario: Cadastro da TED com saldo para mesmo dia com usuário cadastrador e aprovador - único aprovador
  Dado que estou logado na home do Internet Banking com o usuário PJ9
  Quando entro com as informações válidas para um cadastro de uma nova transferência com PJ9
  E confirmo a transferência
  E aprovo a transferência com o PJ9
  Então visualizo a mensagem de transferência criada e aprovada com sucesso
  E a TED deve ser exibida em Lançamentos Futuros como Aguardando Liquidação

@Implemented
Cenario: Cadastro da TED com saldo para uma data futura com usuário cadastrador e aprovador - único aprovador
  Dado que estou logado na home do Internet Banking com o usuário PJ9
  Quando entro com informações para uma transferência com data futura com PJ9
  E confirmo a transferência
  E aprovo a transferência com o PJ9
  Então visualizo a mensagem de transferência agendada e aprovada com sucesso
  E a TED deve ser exibida em Lançamentos Futuros como Aguardando Liquidação

@Implemented
Cenario: Cadastro da TED sem saldo para o mesmo dia com usuário cadastrador e aprovador - único aprovador
  Dado que estou logado na home do Internet Banking com o usuário PJ9
  Quando entro com informações necessárias para preenchimento da TED sem saldo com PJ9
  E confirmo o agendamento de falta de saldo
  E aprovo a transferência com o PJ9
  Então visualizo a mensagem de transferência criada e aprovada com sucesso
  E a TED deve ser exibida em Lançamentos Futuros como Aguardando Liquidação

@Implemented
Cenario: Cadastro da TED sem saldo para uma data futura com usuário cadastrador e aprovador - único aprovador
  Dado que estou logado na home do Internet Banking com o usuário PJ9
  Quando entro com informações para uma transferência com data futura sem saldo com PJ9
  E confirmo a transferência
  E aprovo a transferência com o PJ9
  Então visualizo a mensagem de transferência agendada e aprovada com sucesso
  E a TED deve ser exibida em Lançamentos Futuros como Aguardando Liquidação

@Implemented
Cenario: Cadastro da TED para uma data inválida com seleção automática para a próxima data válida
  Dado que estou logado na home do Internet Banking com o usuário PJ3
  Quando entro com informações para uma data inválida
  E escolho a primeira data válida
  E confirmo a transferência com nova data
  Então visualizo a mensagem de transferência agendada com sucesso

@Implemented
Cenario: Cadastro da TED para uma data inválida com seleção para uma nova data
  Dado que estou logado na home do Internet Banking com o usuário PJ3
  Quando entro com informações para uma data inválida
  E seleciono uma nova data
  E confirmo a transferência com nova data
  Então visualizo a mensagem de transferência agendada com sucesso

@Implemented
Cenário: Cadastro de TED com uma nova conta que não possui poder de aprovação
  Dado que estou logado na home do Internet Banking com o usuário PJ8
  Quando entro com as informações válidas para um cadastro de uma nova transferência
  E confirmo a transferência
  Então visualizo a mensagem de transferência cadastrada com sucesso
  E vejo que não aparece o fluxo de aprovação

@Implemented
Cenário: Verificar que não é possível criar uma TED com CNPJ inválido
  Dado que estou logado na home do Internet Banking com o usuário PJ3
  Quando entro com informações necessárias para preenchimento da TED com CNPJ inválido
  Então visualizo a mensagem de alerta que o CNPJ não é válido 
  E vejo que não é possível cadastrar a TED

@Implemented
Cenário: Excluir um favorecido
  Dado que estou logado na home do Internet Banking com o usuário PJ3
  Quando acesso a lista de favorecidos
  E seleciono a opção excluir entre um dos favorecidos
  Então visualizo que a conta do favorecido foi excluída

@Implemented
Cenário: Verificar mensagem quando não existe nenhum favorecido cadastrado
  Dado que estou logado na home do Internet Banking com o usuário PJ3
  Quando acesso a lista de favorecidos de uma conta que não possui favorecidos
  Então visualizo a mensagem sem favorecidos cadastrados

@Implemented @MockDeleteFavoredAccount
Cenário: Verificar mensagem de erro ao tentar excluir um favorecido sem sucesso
  Dado que estou logado na home do Internet Banking com o usuário PJ3
  Quando acesso a lista de favorecidos
  E seleciono a opção excluir entre um dos favorecidos
  Então visualizo a mensagem Conta não excluída. Tente novamente.