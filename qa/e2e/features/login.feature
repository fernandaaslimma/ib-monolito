#language: pt

@Login
Funcionalidade: Login

  Contexto:
    Dado que a tela de login esta sendo exibida

  @Implemented
  Cenário: Login efetuado com sucesso
    Quando o usuário ingressar com credenciais válidas
    Então o login deve ser realizado

  @Implemented
  Cenário: Login não efetuado com sucesso
    Quando o usuário ingressar com credenciais inválidas
    Então o login não deve ser realizado

  @Implemented
  Cenário: Ataque CSRF
    Quando o usuário ingressar com credenciais válidas
    Então o login deve ser realizado
    Quando realizar uma tentativa de cross site request forgery
    Então o login deve ser expirado

  @Implemented @SmokeTest
  Cenário: Usuário bloqueado
    Quando o usuário ingressar com a senha inválidas 3 vezes
    E o usuário reingressar com credenciais válidas
    Então o login não deve ser realizado

  @Implemented
  Esquema do Cenario: Usuário sem acesso a funcionalidade de câmbio
    Quando um usuario sem permissao de uso da funcionalidade <feature> ingressar
    Então o login deve ser realizado
    E a funcionalidade <feature> não deve estar disponível para o usuário

    Exemplos:
    | feature       |
    | câmbio        |
    | movimentações |
    | documentos    |
    | posição       |

  @Implemented
  Esquema do Cenario: Visualizar menu de usuário
    Dado que estou logado na home do Internet Banking com o usuário PF
    Quando acesso a funcionalidade <funcionalidade> no menu de usuário
    Então vejo que consigo visualizar a funcionalidade <funcionalidade>

    Exemplos:
    | funcionalidade    |
    # | Meus Dados        |
    # | Suitability       |
    | Termos de Produto |

  @Implemented
  Cenário: Não visualizar opção de Suitability no meu de usuário com Perfil PJ
    Dado que estou logado na home do Internet Banking com o usuário PJ3
    Quando acesso ao menu de usuário
    Então vejo que não é possível visualizar a opção de Suitability

  @Implemented @MockNotification
  Cenário: Verificar que não é possível fechar a notificação sem concordar com a mesma
    Quando realizo o login com o usuário PJ3
    Então verifico que não é possível fechar a notificação sem concordar com a mesma

  @VisualRegression
  Cenário: [Login] - Tela de login com botão desabilitado sem preencher dados de login
  @VisualRegression
  Cenário: [Login] - Tela de login com botão habilitado preenchendo dados de login
  @VisualRegression
  Cenário: [Login] - Validando Header
  @VisualRegression
  Cenário: [Login] - Summary - Gráfico de ativos
  @VisualRegression
  Cenário: [Login] - Summary - Posição consolidada
  @VisualRegression
  Cenário: [Login] - Summary - Dados da conta corrente em posição consolidada
  @VisualRegression
  Cenário: [Login] - Summary - Dados de renda fixa em posição consolidada
  @VisualRegression
  Cenário: [Login] - Summary - Dados de fundos em posição consolidada
  @VisualRegression
  Cenário: [Login] - Summary - Tabelas de movimentações
  @VisualRegression
  Cenário: [Login] - Summary - Tela de resumo
  @VisualRegression
  Cenário: [Login] - Validando rodapé


