#language: pt

@StatementPJ @MockWithoutNotification
Funcionalidade: Extrato de transações
  Para que eu possa visualizar meu extrato bancário
  Como usuário pessoa física ou jurídica do Internet Banking
  Quero ter a possibilidade de visualizar minhas transações futuras de uma forma simples

  @Implemented
  Esquema do Cenario: Visualizar extrato de transações futuras do tipo PJ
    Dado que estou logado na home do Internet Banking com o usuário PJ9
    E efetuo um agendamento de TED PJ para a próxima <dia>
    Quando acesso minhas transações futuras
    Então visualizo que efetuei uma transação do tipo PJ para ser liquidada no dia <dia>

    Exemplos:
    | dia     |
    | Segunda |
    | Quarta  |
    | Sexta   |

  @Implemented
  Esquema do Cenario: Visualizar extrato de transações futuras do tipo PF
    Dado que estou logado na home do Internet Banking com o usuário TED PF
    E efetuo um agendamento de TED PF para a próxima <dia>
    Quando acesso minhas transações futuras
    Então visualizo que efetuei uma transação do tipo PF para ser liquidada no dia <dia>

    Exemplos:
    | dia     |
    | Segunda |
    | Quarta  |
    | Sexta   |

  @Implemented @StatementVoucher
  Cenario: Visualizar comprovante de uma transferência enviada
    Dado que estou logado na home do Internet Banking com o usuário TED PF
    E efetuo uma TED do tipo PF
    Quando acesso a transação que acabei de realizar
    Então visualizo todos os detalhes da minha transação

  @Implemented @StatementVoucher @ShareVoucher
  Cenario: Realizar donwload do comprovante de transferência na versão desktop
    Dado que estou logado na home do Internet Banking com o usuário TED PF
    Quando desejo visualizar mais detalhes de uma transferência efetuada
    E compartilho o comprovante
    Então visualizo que o download do comprovante foi realizado

  @NotImplemented @Skip
  Cenario: Visualizar comprovante de uma transferência agendada
    Dado que estou logado na home do Internet Banking com o usuário TED PF
    E efetuo uma TED agendada do tipo PF
    Quando acesso a transação que acabei de realizar
    Então visualizo os detalhes da minha transação
    E vejo que ela está com o agendamento realizado

  @NotImplemented @Skip
  Cenario: Visualizar comprovante de uma transferência recebida
    Dado que estou logado na home do Internet Banking com o usuário TED PF
    Quando acesso uma transação que recebi
    Então visualizo os detalhes de recebimento da transação

  @NotImplemented @Skip
  Cenario: Cancelar transação em curso
    Dado que estou logado na home do Internet Banking com o usuário TED PF
    E efetuo uma TED agendada do tipo PF
    Quando acesso as minhas transações futuras
    E cancelo a minha transação que está em curso
    Então visualizo que a transação foi cancelada

  @NotImplemented @Skip
  Cenario: Entrar em contato com o banker a partir do comprovante de transação
    Dado que estou logado na home do Internet Banking com o usuário TED PF
    Quando pesquiso por uma transação que foi efetivada
    Então visualizo que é possível entrar em contato com o banker

  @Implemented @Manual @Skip
  Cenario: Visualizar extrato de transações futuras organizado por data
    Dado que estou logado na home do Internet Banking com o usuário TED PF
    E efetuo um agendamento de TED PF para um dia especifico
    Quando acesso minhas transações futuras
    Então visualizo a data do agendamento está organizado entre as demais para ser debitada

  @Implemented @Manual
  Cenario: Visualizar informações de conta selecionada ao baixar extrato
    Dado que estou logado na home do Internet Banking com o usuário TED PJ
    E efetuo um agendamento de TED PJ para um dia especifico
    Quando faço o donwload do do meu extrato
    Então visualizo que os meus dados estão sendo exibido no PDF

  @Implemented @Manual @Mock
  Cenario: Visualizar apenas detalhes da conta no extrato
    Dado que estou logado na home do Internet Banking com o usuário TED PJ com única conta
    Quando acesso meu extrato
    Então visualizo que não a opção de altenar contas não é exibido

  @Implemented
  Cenario: Realizar troca de conta no extrato
    Dado que estou logado na home do Internet Banking com o usuário PJ9
    Quando alterno entre minhas contas no extrato
    Então visualizo que os meus dados foram alterados no extrato

  @Implemented
  Cenario: Visualizar mensagem de erro ao filtrar por uma data futura
    Dado que estou logado na home do Internet Banking com o usuário TED PF
    Quando filtro por um período futuro
    Então visualizo a mensagem que "Datas futuras não são válidas"