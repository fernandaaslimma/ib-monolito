#language: pt

@OpenBanking @MockWihoutNotification
Funcionalidade: Open Banking
  Para que eu possa ter meus dados compartilhado através do Open Baking com outras instituições
  Eu como usuário pessoal física e/ou jurídica da BBM
  Quero ter controle e consentir os meus dados que serão necessários para ser compartilhados

  @Implemented @SmokeTest
  Cenário: Consentir dados solicitado ao receptor fluxo de pessoa física
    Dado que estou logado com o usuário Open Banking PF para consentir os dados solicitado
    Quando confirmo os dados que vou consentir
    Então visualizo que os dados foram consentidos

  @Implemented @SmokeTest
  Cenário: Solicitar um novo consentimento
    Dado que estou logado na home do Internet Banking com o usuário Open Banking PF
    Quando solicito um novo consentimento para uma determinada instituição
    Então visualizo que fui redirecionado para a instituição para aprovar a solicitação

  @Implemented @Manual
  Cenário: Solicitar um novo consentimento do tipo Pessoa Jurídica
    Dado que estou logado na home do Internet Banking com o usuário PJ4
    Quando solicito um novo consentimento do tipo PJ para uma determinada instituição com o CNPJ "69.779.256/0001-45"
    Então visualizo que fui redirecionado para a instituição para aprovar a solicitação

  @Implemented
  Cenário: Retornar para IB após aprovação do consentimento com fluxo de pessoa física
    Dado que estou logado com o usuário Open Banking PF para consentir os dados solicitado
    Quando confirmo os dados que vou consentir
    Então visualizo que os dados foram consentidos no retorno para o Internet Banking

  @Implemented @Manual @Skip
  Cenário: Retornar para IB após o cancelamento do consentimento com fluxo de pessoa física
    Dado que estou logado com o usuário Open Banking PF para consentir os dados solicitado
    Quando durante o fluxo de aprovação realizo o cancelamento
    Então visualizo que os dados não foram consentidos no retorno para o Internet Banking

  @Implemented
  Cenário: Revogar consentimento quando o compartilhamento transmitido está ativo
    Dado que estou logado na home do Internet Banking com o usuário Open Banking PF
    E possuo um compartilhamento transmitido ativo
    Quando encerro um compartilhamento
    Então visualizo a mensagem de compartilhamento encerrado

  @Manual @Skip
  Cenário: Revogar consentimento quando o compartilhamento recebido está ativo
    Dado que estou logado na home do Internet Banking com o usuário Open Banking PF
    E possuo um compartilhamento recebido ativo
    Quando encerro um compartilhamento
    Então visualizo a mensagem de compartilhamento encerrado

  @Manual @Skip
  Cenário: Verificar que o compartilhamento transmitido que esteja revogado não é exibido
    Dado que estou logado na home do Internet Banking com o usuário Open Banking PF
    E possuo um compartilhamento transmitido ativo
    Quando encerro um compartilhamento
    Então visualizo que o compartilhamento transmitido que foi revogado não é exibido na lista de recebidos

  @Manual @Skip
  Cenário: Verificar que o compartilhamento recebido que esteja revogado não é exibido
    Dado que estou logado na home do Internet Banking com o usuário Open Banking PF
    E possuo um compartilhamento recebido ativo
    Quando encerro um compartilhamento
    Então visualizo que o compartilhamento recebido que foi revogado não é exibido na lista de recebidos

  @Implemented
  Cenário: Verificar que não é possível revogar um compartilhamento transmitido com status pendente
    Dado que estou logado na home do Internet Banking com o usuário Open Banking PF
    Quando escolho um compartilhamento transmitido pendente
    Então visualizo que não é possível encerrar o compartilhamento

  @Implemented
  Cenário: Verificar que não é possível revogar um compartilhamento recebido com status pendente
    Dado que estou logado na home do Internet Banking com o usuário Open Banking PF
    Quando escolho um compartilhamento recebido pendente
    Então visualizo que não é possível encerrar o compartilhamento

  @Implemented
  Cenário: Redirecionar usuário no tipo Prospect para a pagina de criar novo consentimento após o login
    Dado que a tela de login esta sendo exibida
    Quando realizo o login com o usuário Prospect
    Então visualizo que fui redirecionada para a página de criar novo consentimento

  @NotImplemented @Manual @Skip
  Cenário: Verificar opções do menu de usuário quando logado com usuário tipo Prospect
    Dado que estou logado na home do Internet Banking com o usuário Prospect
    Quando seleciono o menu de usuário
    Então visualizo que possuo apenas a opção de logout

  @Implemented
  Cenário: Verificar que o usuário no tipo Prospect possui acesso somente aos compartilhamentos Recebidos
    Dado que estou logado na home do Internet Banking com o usuário Prospect
    Quando acesso os meus compartilhamentos
    Então visualizo que estou nos meus compartilhamentos recebidos
    E vejo que não existe opção de compartilhamentos transmitidos

  @Implemented
  Cenário: Verificar que o usuário tipo Prospect não consegue compartilhar dados da BBM
    Dado que estou logado com o usuário Prospect para consentir os dados solicitado
    Então visualizo uma mensagem de que não possuo autorização para compartilhar dados da BBM

  @Manual @Skip
  Cenário: Cancelar compartilhamento dos dados durante o fluxo de consentimento
    Dado que estou logado com o usuário Open Banking PF para consentir os dados solicitado
    Quando desejo cancelar o compartilhamento dos meus dados durante o processo
    Então visualizo que retornei para a home do Internet Banking

  @Implemented @Manual @Skip
  Cenário: CPF/CNPJ diferente entre os dois bancos
    Dado que eu solicite o consentimento dos meus dados
    Quando faço login com um usuário que possui os dados diferente do consentido
    Então visualizo a mensagem de que o CPF/CNPJ informado no consentimento é diferente do cadastrado

  @Implemented
  Cenário: Possuir aprovadores para o compartilhamento de dados fluxo pessoa jurídica
    Dado que estou logado com o usuário Open Banking PJ para consentir os dados solicitado
    Então visualizo que existe uma lista com um ou mais aprovadores

  @Manual @Implemented
  Cenário: Visualizar dados de saldo da conta
    Dado que estou logado com o usuário Open Banking PF para consentir os dados solicitado
    Quando desejo visualizar meus dados de saldo da conta
    Então visualizo que meus meus dados da conta estão sendo exibidos

  @Manual @Implemented
  Cenário: Visualizar dados de extrato da conta
    Dado que estou logado com o usuário Open Banking PF para consentir os dados solicitado
    Quando desejo visualizar meus dados do extrato da conta
    Então visualizo que meus meus dados do extrato estão sendo exibidos

  @Manual @Implemented
  Cenário: Visualizar dados de limites da conta
    Dado que estou logado com o usuário Open Banking PF para consentir os dados solicitado
    Quando desejo visualizar meus dados de limites da conta
    Então visualizo que meus meus dados de limites estão sendo exibidos

  @Manual @NotImplemented
  Cenário: Desabilitar card com informações pendentes
    Dado que estou logado com o usuário Open Banking PF para consentir os dados solicitado
    Quando desejo visualizar algum dado que não está disponível
    Então visualizo que não é possível interagir com o card da informação

  @Implemented
  Cenário: Visualizar consulta dos meus compartilhamentos ativos
		Dado que estou logado na home do Internet Banking com o usuário Open Banking PF
    E possuo um compartilhamento transmitido ativo
		Então visualizo que é possível cancelar o compartilhamento

  @Implemented @Manual @Mock
	Cenário: Visualizar consulta dos meus compartilhamentos inativos
		Dado que estou logado na home do Internet Banking com o usuário Open Banking PF
    E possuo uma transmissão inativa
    Quando acesso a minha lista de transmitidos do Open Banking
    E acesso a minha transmissão inativa
		Então visualizo que não é possível tomar ações para ativar ou cancelar

  @Implemented @Manual
  Cenário: Visualizar que é possível aprovar um consentimento a partir das minhas transmissões pendentes
		Dado que estou logado na home do Internet Banking com o usuário Open Banking PF
    E possuo uma transmissão pendente
    Quando acesso a minha lista de transmitidos do Open Banking
    E acesso a minha última transmissão pendente
		Então visualizo que é possível seguir o fluxo para aprovar o consentimento

  @Implemented @Manual
  Cenário: Visualizar que é possível cancelar um consentimento a partir das minhas transmissões pendentes
		Dado que estou logado na home do Internet Banking com o usuário Open Banking PF
    E possuo uma transmissão pendente
    Quando acesso a minha lista de transmitidos do Open Banking
    E acesso a minha última transmissão pendente
    E acesso a opção de cancelamento a partir do fluxo de consentir os dados
		Então visualizo que é possível cancelar a solicitação

  @Implemented @Manual
  #Logar com outro usuário aprovador (PJ) e visualizar opção de aprovação
  Cenário: Aprovar consentimento
    Dado que estou logado na home do Internet Banking com o usuário Open Banking PJ
    E possuo um consentimento de Open Banking para ser aprovado
    Quando aprovo a solicitação de compartilhamento de dados
    Então visualizo que o consentimento foi aprovado

  @Implemented @Manual
  Cenário: Lembrar depois para aprovar um consentimento
    Dado que estou logado na home do Internet Banking com o usuário Open Banking PJ
    Quando decido ser lembrado depois da aprovação do consentimento
    Então visualizo que estou na home do Internet Banking
