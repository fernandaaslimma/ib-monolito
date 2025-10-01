#language: pt

@ValidationLayoutCredit @MockWihoutNotification @Pilot
Funcionalidade: Validação do layout de arquivos do menu crédito
    Para que eu possa realizar a validação de um arquivo CNAB
    Eu como usuário do Internet Banking com acesso ao menu de crédito
    Quero poder realizar o envio de arquivos cnab para validação de layout

Contexto: Acessar a validação de layout no menu de crédito
    Dado que estou logado na home do Internet Banking com o usuário PJ3
    E acesso a funcionalidade de validação de layout

@Implemented
Cenario: Envio de arquivo com conteúdo inválido
    Quando seleciono um arquivo CNAB no formato inválido
    Então visualizo a mensagem "Arquivo inválido. Verifique o retorno da validação."

@Implemented
Cenario: Envio de arquivo com extensão não permitida
    Quando seleciono um arquivo com extensão diferente de rem
    Então visualizo a mensagem "Arquivo não validado. Verifique a extensão ou número de arquivos."

@Implemented
Cenario: Envio de arquivo com tamanho maior do que o permitido
    Quando seleciono um arquivo CNAB com tamanho maior do que o permitido
    Então visualizo a mensagem "Arquivo não validado. Tamanho máximo excedido."

@Implemented
Cenario: Validação de layout de arquivo com sucesso
    Quando seleciono um arquivo CNAB válido
    Então visualizo uma modal com a mensagem arquivo válido

@Implemented
Cenario: Baixar arquivo de retorno da validação
    Quando seleciono um arquivo CNAB a ser validado
    E escolho a opção de baixar arquivo CNAB
    Então visualizo que um arquivo tipo txt é baixado

@Manual
Cenario: Tentiva de envio de mais de um arquivo ao mesmo tempo
    Quando seleciono dois arquivos ou mais
    Então visualizo um aviso informando para enviar um arquivo por vez

@Manual
Cenario: Copiar arquivo de retorno da validação para área de transferência
    Quando seleciono um arquivo CNAB a ser validado
    E seleciono a opção de copiar arquivo
    Então vejo que o conteúdo do retorno de validação foi copiado
    E posso colar onde eu preferir

@Manual
Cenario: Verificar que ao fechar o retorno da validação é recarregada a tela inicial
    Quando seleciono um arquivo CNAB a ser validado
    E fecho o retorno da validação
    Então vejo que que retorno para o início da tela de validação de crédito

@Manual
Cenario: Erro no upload do arquivo para validação de layout
    Quando seleciono um arquivo CNAB a ser validado
    E ocorre uma falha no momento do upload
    Então visualizo a mensagem Arquivo não validado
