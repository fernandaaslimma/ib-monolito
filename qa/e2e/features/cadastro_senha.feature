#language: pt

@CreatePassword
Funcionalidade: Cadastro de senha
  Para que eu possa utilizar a aplicação
  Como Pessoa Física e/ou Jurídica
  Quero cadastrar minha senha para que eu consiga ter acesso a minha conta

  @Implemented
  Cenário: Solicitar redefinição de senha
    Dado que a tela de login esta sendo exibida
    E seleciono a opção de esqueci minha senha
    Quando informo um email para envio das instruções de redefinição de senha
    Então visualizo a confirmação do envio de email

  @Implemented @SmokeTest
  Cenário: Cadastrar senha com sucesso
    Dado que a tela de cadastro de senha é exibida com um link válido
    Quando informo meus dados válidos para o cadastro de senha
    Então visualizo o toastr de senha cadastrada com sucesso
    E vejo que retornei para a tela de login

  @Implemented
  Esquema do Cenário: Erro ao cadastrar senha
    Dado que a tela de cadastro de senha é exibida com um link válido
    Quando informo um documento válido e a senha <password>
    Então visualizo a mensagem de erro <error>

    Exemplos:

    | password | error		      		                                   |
    | 12345678 | Sequential passwords are not allowed.  	             |
    | 11112233 | Passwords must have at least 4 different algarisms.   |
    | 04021991 | Passwords with your birthdate or CPF are not allowed. |
    | 05332256 | Passwords with your birthdate or CPF are not allowed. |

  @Implemented
  Cenário: Erro ao cadastrar com link expirado
    Dado que a tela de cadastro de senha é exibida com um link expirado
    Quando informo meus dados válidos para o cadastro de senha
    Então visualizo a mensagem que o link foi expirado

  @Implemented
  Cenário: Erro após informar um documento inválido após seis tentativas
    Dado que a tela de cadastro de senha é exibida com um link válido
    Quando informo um documento inválido e uma senha válida por seis vezes consecutivas
    Então visualizo a mensagem que excedi o limite de tentantivas de recuperação de senha

  @Implemented
  Cenário: Erro ao cadastrar senha sem o envio do documento
    Dado que a tela de cadastro de senha é exibida com um link válido
    Quando informo uma senha válida sem informar o documento necessário
    Então o botão para confirmação da senha não deverá estar habilitado

  @VisualRegression
  Cenário: [Cadastro de Senha] - Tela cadastrar senha en-EN
  @VisualRegression
  Cenário: [Cadastro de Senha] - Tela cadastrar senha pt-BR
  @VisualRegression
  Cenário: [Cadastro de Senha] - Feedback ao cadastrar senha
  @VisualRegression
  Cenário: [Cadastro de Senha] - Verificar tooltip no campo de senha
