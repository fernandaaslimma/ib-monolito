#language: pt

@RedeemLCA
Funcionalidade: Resgate de LCA
	Para realizar resgates de LCA
	Como Pessoa fisíca do Internet Banking
	Quero ter a possibilidade de resgatar os meus investimentos

@Implemented
Cenário: Visualizar alteração de valor de acordo com a priorização de menor data de vencimento
	Dado que estou logado na home do Internet Banking com o usuário Teste Renda Fixa Resgate
    E que vou realizar resgate de LCA
    Quando informo um determinado valor
    E escolho a priorização por menor data de vencimento
    Então visualizo as opções de resgate disponíveis por menor data de vencimento

@Implemented
Cenário: Visualizar alteração de valor de acordo com a priorização de menor rendimento
	Dado que estou logado na home do Internet Banking com o usuário Teste Renda Fixa Resgate
    E que vou realizar resgate de LCA
    Quando informo um determinado valor
    E escolho a priorização por menor rendimento
    Então visualizo as opções de resgate disponíveis por menor rendimento

#Só executar esse cenário em caso de extrema urgência, pois ele irá travar todo o fluxo de regate, já que somente é possível realizar um resgate diário
@Implemented
Cenário: Realizar resgate de LCA
	Dado que estou logado na home do Internet Banking com o usuário Teste Renda Fixa Resgate
    E que vou realizar resgate de LCA
    Quando informo o valor a ser resgatado
    E realizo o resgate
    Então visualizo que realizei o resgate do LCA

@Implemented @Mock @Skip
Cenário: Visualizar alerta relacionado ao valor máximo de resgate
	Dado que estou logado na home do Internet Banking com o usuário Teste Transactions
  	E que vou realizar resgate de LCA
	Quando informo o saldo acima do disponível para resgate
	Então visualizo uma crítica indicando que o valor máximo foi atingido

@Implemented
Cenário: Visualizar empty state para conta sem aplicações em LCA
	Dado que estou logado na home do Internet Banking com o usuário Teste Renda Fixa Sem Resgate
	Quando acesso os meus rendimentos de renda fixa
	Então visualizo a mensagem que não há LCA disponível para resgate no momento

@NotImplemented @Mock @Skip
Cenário: Visualizar de alerta quanto a duplicidade de resgate
	Dado que estou logado no usuario de Resgate LCA especifico para duplicidade de resgate
	Quando resolvo realizar um resgate LCA
	Então visualizo a mensagem de que já existe uma movimentação em andamento para determinado LCA

@Implemented
Cenário: Visualizar mensagem de notificação quando o valor do resgate ultrapassar o limite permitido
	Dado que estou logado na home do Internet Banking com o usuário Teste Renda Fixa Resgate
    E que vou realizar resgate de LCA
	Quando informo um valor acima do limite de resgate
	Então visualizo uma mensagem de notificação de que o valor está acima do limite de resgate