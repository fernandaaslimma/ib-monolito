#language: pt

@PowersOfAttorney @MockWihoutNotificationAPI @Pilot
Funcionalidade: Procuração Vencida
	Para que eu possa ter visibilidade sobre minha procuração vencida
  Eu como usuário que possuo do Internet Banking
  Quero ter um feedback quando não conseguir efetuar determianadas ações devido a minha procuração estar vencida

	Contexto: Estar logado com um usuário com procuração vencida
		Dado que estou logado na home do Internet Banking com o usuário Investidor - Procuração Vencida

  @Implemented
	Cenário: Visualizar que minha procuração está vencida quando altero minha conta ao tentar cadastrar uma transferência
		Quando seleciono uma outra conta para realizar uma nova transferência
		Então visualizo que minha procuração está vencida

  @Implemented
	Cenário: Visualizar que minha procuração está vencida quando tento cadastrar uma transferência
    Quando informo um valor para realizar o cadastro de uma nova transferência
    Então visualizo que minha procuração está vencida