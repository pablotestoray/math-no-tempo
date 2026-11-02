# Matemática no Tempo — contexto do projeto

Este arquivo resume uma conversa longa no chat do Claude, para quem continuar o projeto (Claude Code, outro chat ou outra pessoa) saber de onde partir. Leia tudo antes de mexer em qualquer arquivo.

## Quem é o dono do projeto e como falar com ele

- Responda sempre em português.
- Ele não é programador e só tem o celular (Android), sem computador. Usa o Termux quando precisa de terminal, e o navegador para o GitHub.
- Explique um passo de cada vez. Quando for comando de Termux, mande pronto para colar. Peça um print da tela antes de passar para o passo seguinte.
- Nunca peça o token do GitHub nem mostre arquivos `.env` no chat.
- Branches: o site publica a partir do `main`. O Claude Code trabalha no branch da sessão (até agora `claude/new-session-x1i0jp`) e só leva para o `main` quando ele disser "sim, junta no main". Não abrir PR. O branch `claude/claude-md-pending-tasks-zrchuy`, citado numa regra antiga, não existe neste repositório.
- Ele prefere conselho honesto a concordância: aponte falhas e riscos logo no começo, marque a confiança das afirmações principais ([Certo], [Provável], [Chute]) e não use elogio de enchimento.

## A ideia do jogo

Um jogo para aprender matemática do zero até o cálculo, redescobrindo as ideias junto com quem as descobriu. Ele quer lançar o jogo um dia e também aprender matemática enquanto constrói.

- **Linha do tempo:** cada capítulo começa com um "timelapse" ("O ano é 600 a.C., Gizé, Egito…") e apresenta um problema que uma pessoa real enfrentou. O jogador tenta resolver com ferramentas físicas (estacas, cordas, sombras, blocos) e descobre a ideia sozinho.
- **A fórmula é um atalho, não uma aula:** primeiro o jogador resolve do jeito lento; depois percebe o padrão, e a fórmula vira uma ferramenta no caderno, como uma receita no Minecraft.
- **Honestidade histórica:** muita "história da matemática" é lenda. Todo capítulo termina com o quadro "O que se sabe de verdade", separando documento de história contada.
- **Oficina (área livre):** inspirada no Minecraft. Cada descoberta vira uma ferramenta de construção (esquadro, medidor de sombras, rodas com π, catapulta com parábola, velocímetro com derivada, reservatório com integral). Precisa de pedidos opcionais, como os aldeões do Minecraft, senão fica vazia. Ainda não foi feita: entra depois de 2 ou 3 capítulos.
- **Ciclo do jogo:** linha do tempo (descobrir) → oficina (usar) → um pedido que ninguém resolve ainda leva à próxima época.
- **A derivada dá para redescobrir** pela ideia, não pela definição formal: Galileu e o plano inclinado (distâncias 1, 3, 5, 7…) e Fermat com máximos e mínimos (a maior horta com 20 metros de cerca).
- **Painel da conta ao vivo:** no app de estudos anterior, o que mais ajudou foi ver a fórmula mudando com os números da cena. Isso deve voltar no jogo.

### Linha do tempo planejada (do mais fácil ao cálculo, não em ordem de data)

1. Tales, ~600 a.C.: altura da pirâmide pela sombra (proporção). **Feito: capítulo 1.**
2. Eratóstenes, ~240 a.C.: o tamanho da Terra com duas sombras. **Feito: capítulo 2.**
3. Egito, Papiro de Rhind (~1650 a.C.): frações e áreas de campos.
4. Babilônia (~1800 a.C.): trios como 3-4-5 e a conta de √2.
5. Pitagóricos: cordas e música (frações 2:1, 3:2); a corda de 12 nós e o canto reto.
6. Arquimedes, ~250 a.C.: π com polígonos e a área da parábola somando pedaços (semente da integral).
7. al-Khwarizmi, ~820: álgebra como equilibrar a balança.
8. Fibonacci, 1202: os coelhos (sequência).
9. Descartes e Fermat, ~1637: coordenadas e máximos/mínimos.
10. Galileu: queda e plano inclinado (velocidade e aceleração).
11. Newton e Leibniz: derivada e integral.

## Visual (decidido)

- Estilo "caderno ou papiro", com cada época desenhada como a arte real daquele tempo:
  - Egito: papiro com fibras cruzadas, tinta preta com títulos em vermelho (como o Papiro de Rhind).
  - Personagens gregos: silhuetas, como nos vasos gregos de figuras negras.
  - Caderno de descobertas: pergaminho, tinta sépia e anotações em vermelho "sanguínea", como os cadernos de Leonardo da Vinci.
- Fontes (Google Fonts): Cinzel nos títulos e botões, EB Garamond no texto (com números normais, `lining-nums`), Caveat nas anotações à mão. A IM Fell English foi trocada porque os números dela "descem da linha" e ficavam difíceis de ler (troca feita no `index.html` em 02/11/2026).
- Cores: ficam em variáveis CSS no `:root` (`--papiro`, `--tinta`, `--verm`, `--sombra`, `--perg`, `--sepia`, `--mar`, `--grade` etc.), com tema claro e tema escuro ("papiro à noite").
- Tudo em 2D (SVG). 3D no navegador do celular fica pesado.
- Regras de layout que ele aprovou depois de testar no celular dele (tela deitada de ~800×360):
  - Nada fica por cima da cena. As falas e dicas aparecem na barra de cima, no lugar do objetivo, e o texto aparece inteiro (sem cortar).
  - Coluna própria à esquerda para o quadro "Perto de você" e as medidas.
  - Barra de baixo numa linha só, com rótulos curtos (Estaca, Sombra da pirâmide, Base, Responder).
  - Medidas curtas ("Sombra da estaca 1,7 15:14"); medida de outra hora fica apagada e riscada, com ✗, e o título da lista explica "✗ = outra hora".
  - Dicas e falas cabem em até 3 linhas no topo em telas de 640 a 873 de largura. Em telas deitadas até 760 de largura, a letra da fala diminui e some a linha "Meta". Ao escrever falas novas, teste a mais longa.
- Há um quadro de design com 3 telas de referência do capítulo 1 no Claude: https://claude.ai/artifact/6iya3eUMgaKi32ey1ik6xs (só abre logado na conta dele; o layout de jogo de lá é anterior às regras acima).

## O que existe hoje (capítulo 1 jogável)

- Repositório: `github.com/pablotestoray/math-no-tempo` (público).
- Site no ar pelo GitHub Pages (branch `main`, pasta raiz): **https://pablotestoray.github.io/math-no-tempo/**
- O branch `claude/new-session-x1i0jp` é onde o Claude Code trabalha. Tudo o que estava nele foi conferido e levado ao `main` com aprovação dele (correção do `sw.js` e tela do capítulo 1 reorganizada).

Arquivos do app (todos na raiz, sem pastas):

| Arquivo | Para que serve |
|---|---|
| `index.html` | Tela inicial, Estudos e o capítulo 1 (HTML, CSS e JavaScript num arquivo só). |
| `3d.html` | **Protótipo 3D do capítulo 1** (não está ligado aos Estudos; abre por endereço direto `/3d.html`). Sem biblioteca: desenha em 2D com projeção de perspectiva. Andar com o joystick ou WASD, olhar arrastando à direita, plantar estaca, mexer a hora (o sol e as sombras se movem de verdade), botão "Olhar de cima" (tecla R) para ver as sombras do chão. Testado no navegador: as medidas batem com o capítulo 1 (15:30: estaca 2,00 e pirâmide 31). Ainda sem a corda e sem caderno. |
| `cap2.html` | Capítulo 2 (Eratóstenes), num arquivo próprio para não arriscar o capítulo 1. Copia o CSS do `index.html`; se mudar o visual comum, mude nos dois. |
| `manifest.webmanifest` | Faz o jogo ser instalável (nome, ícones, tela cheia, celular deitado). |
| `sw.js` | Service worker: guarda os arquivos para o jogo abrir sem internet. Busca a página primeiro na internet (para o app receber atualizações) e só usa a cópia guardada quando está sem internet. A cada versão nova, mude o nome do cache (hoje `mat-no-tempo-v9`) e ponha os arquivos novos na lista `ARQUIVOS`. |
| `icone-192.png`, `icone-512.png`, `icone-maskable.png` | Ícones do app. |
| `CLAUDE.md` | Este arquivo. |

### Telas (desde 02/11/2026)

- **Início:** o desenho ocupa a tela inteira e forma uma cena só com o texto: "Um jogo de descobertas" e "Mathematica" ficam escritos no friso de cima do templo, as colunas ficam nas pontas da tela, e o botão "Entrar nos estudos" fica na base de pedra (sem subtítulo, a pedido dele). O desenho é refeito pelo tamanho da tela (`arteInicio`), então se estica para os lados em qualquer celular. Ele em SVG feito para o jogo: duas colunas gregas, o mar com um barco, um filósofo em silhueta de vaso grego apontando para uma esfera desenhada a tinta com a espiral de ouro (que se desenha sozinha ao abrir), o triângulo de 10 pontos e um compasso. Fundo de papel quadriculado. As referências foram três imagens que ele mandou (pintura do Pitágoras de J. A. Knapp, uma ilustração de livro com dois gregos e o mar, e um esboço de Atlas com a espiral de ouro). **As imagens não estão no jogo**, só inspiraram o desenho: as duas últimas podem ter direitos autorais.
- **Estudos:** barra de cima com voltar, "Mathematica" e duas abas: **Estudos** e **Criar** (com cadeado; mostra "A oficina ainda está fechada"). Na aba Estudos, um carrossel que se passa para o lado (ou com as setas), com os 11 capítulos da linha do tempo. Cada um é um quadrado com um desenho do assunto e o título embaixo. Só o capítulo 1 abre; os outros têm cadeado e dizem "Em breve" (o 2 diz "É o próximo a ficar pronto"). O capítulo 1 mostra "✓ Concluído" depois de resolvido.
- **Capítulo 1:** o topo ganhou um botão de voltar para os estudos, e o fim do capítulo tem "Voltar aos estudos".
- O botão voltar do Android volta uma tela (capítulo → estudos → início) em vez de fechar o app.
- **Nome:** "Mathematica" é marca registrada da Wolfram Research (programa de matemática). Serve na tela por enquanto, mas decidir outro nome antes de publicar na Play Store. O nome do app instalado continua "Matemática no Tempo".
- Para um capítulo novo: mudar `aberto:true` na lista `CAPS` do `index.html` e ligar o clique do cartão à abertura dele.
- **Zoom desligado:** o app não deixa aumentar com dois dedos nem com toque duplo (`user-scalable=no` e `touch-action: manipulation`). Se o celular estiver com "forçar zoom" ligado na acessibilidade do Chrome, o zoom continua funcionando, e isso é de propósito.
- **Lições de teste (02/11/2026):**
  - Testar sempre com as fontes reais do Google carregadas. Com fonte de reserva, o título "Mathematica" parecia caber, mas na Cinzel real ele invadia a coluna do desenho. Hoje o título diminui sozinho até caber (`ajustaTitulo`).
  - No Chrome do Android, os cartões do carrossel apareciam com pedaços faltando. A causa provável é recorte com canto arredondado, `color-mix` e transparência dentro de uma área que rola. Foi trocado por cores fixas (`--sombra-card`, `--apagado`) e `contain: paint`. Evitar esses efeitos em listas que rolam.

### Como o capítulo 2 funciona (`cap2.html`)

- O cartão 2 dos Estudos abre `cap2.html`. Antes de sair, o `index.html` grava `#estudos` no endereço; o botão voltar do capítulo 2 faz `history.back()`, e o `index.html` abre direto nos Estudos quando vê `#estudos`.
- **Abertura:** 240 a.C., Alexandria. Eratóstenes lê que em Siena, ao meio-dia do dia mais longo do ano, o sol ilumina o fundo de um poço.
- **Mundo:** dia do solstício (declinação 24°), Alexandria a 31,2° e Siena a 24° de latitude. Ao meio-dia o sol fica a 7,2° do alto em Alexandria (1/50 do círculo) e bem no alto em Siena. Altura do sol pela fórmula de verdade (`zenite`). Estaca de 2 passos; distância Siena–Alexandria de 5.000 estádios (dada).
- **Barra "Hora do dia":** 10:00 a 14:00, passos de 2 minutos. Ao meio-dia a sombra da estaca dá 0,25 passos, a mais curta.
- **Coluna da esquerda:** o poço de Siena na mesma hora (a luz só chega ao fundo inteiro ao meio-dia) e as medidas.
- **Botões:** Sombra (mede a estaca e diz se diminuiu ou aumentou), Tigela (anima a sombra sendo marcada em volta do círculo e conta quantos pedaços cabem: 50 ao meio-dia, ~37 às 11:30), De longe (troca a cena pela Terra redonda com raios paralelos; a barra passa a mover Alexandria na curva, e a coluna mostra **a conta ao vivo**: pedaços na volta, 5.000 × N e a volta da Terra; avisa quando fica igual à tigela do jogador).
- **Resposta:** aceita 250.000 ± 5% (pode escrever com ponto). Respostas erradas com explicação: 5.000 (só a distância), 50 (só os pedaços), 100 (dividiu), conta certa com tigela fora do meio-dia, zeros a mais ou a menos.
- **4 dicas progressivas.** Todas as falas e dicas foram testadas para caber em 3 linhas de 640 a 873 de largura.
- **Caderno:** Descoberta 2, "Fração do círculo" (pedaço/círculo = 5.000/volta), com os números do jogador, o atalho dos 7,2 graus e a ferramenta "tigela de sol". Depois, "O que se sabe de verdade" (Cleomedes, incertezas do estádio, 39.000 a 46.000 km contra 40.000 km de verdade).
- Progresso salvo no `localStorage` (chave `mnt-cap2`); o cartão 2 mostra "✓ Concluído".

### Como o capítulo 1 funciona

- **Abertura:** o texto aparece aos poucos; tocar pula a animação.
- **Cena:** a pirâmide com a sombra no chão. Na coluna da esquerda, o quadro "Perto de você" mostra Tales e a estaca de 2 passos (a estaca é pequena demais para aparecer na mesma escala da pirâmide).
- **Barra "Hora do dia":** de 13:00 a 17:00, em passos de 2 minutos. Elevação do sol: `73.92 * sin(π * (hora − 6) / 12)` graus. Às 15:30 o sol fica exatamente a 45°, e a sombra de tudo fica do tamanho da coisa.
- **Números do mundo:** pirâmide com 146 passos de altura e 230 de base (medidas reais da Grande Pirâmide em metros; 1 passo = 1 metro). Estaca com 2 passos.
- **Medidas:** sombra da estaca (1 casa decimal), parte visível da sombra da pirâmide (inteiro) e base (230). Antes de ~15h a sombra da pirâmide fica toda escondida embaixo dela, e o jogo avisa. Se a hora muda depois de medir, as medidas antigas aparecem como "de outra hora".
- **Dois jeitos de resolver:** esperar 15:30 (sombra da estaca = 2,0) e somar a sombra visível (31) com a metade da base (115), ou usar a proporção em qualquer hora.
- **Resposta:** aceita 146 ± 4. Respostas erradas recebem explicação específica (só a parte visível, só a metade da base, medidas de horas diferentes).
- **4 dicas progressivas.** A terceira mostra a "sombra escondida" tracejada embaixo da pirâmide.
- **Ao acertar:** o caderno se preenche com os números do jogador, mostra a regra (altura ÷ sombra é igual para a estaca e para a pirâmide) e libera a ferramenta "medidor de sombras". Depois vem "O que se sabe de verdade" e o anúncio do próximo capítulo (Eratóstenes).
- O progresso fica salvo no `localStorage` (chave `mnt-cap1`).
- Testado com navegador automático no tamanho do celular dele (deitado e em pé, temas claro e escuro), sem erros.

## Onde paramos

1. ✅ Arquivos extraídos no celular (pasta `Jogo-matematica-no-tempo`).
2. ✅ Repositório `math-no-tempo` criado, público.
3. ✅ Os 6 arquivos da primeira versão subiram para a raiz.
4. ✅ GitHub Pages ligado (`main`, raiz, HTTPS).
5. ✅ O jogo abriu no celular pelo endereço do site, e ele jogou.
6. ✅ Tela do capítulo 1 reorganizada (coluna à esquerda, fala no topo, barra numa linha), feita pelo Claude Code e levada ao `main`.
7. ✅ Instalado como app no celular dele.
8. ✅ Tela inicial "Mathematica" e tela de Estudos (carrossel de capítulos e aba Criar trancada), mais a troca de fonte para EB Garamond.
9. Falta confirmar: o app abre sem internet (modo avião).

Lembre: um passo por vez, com print antes de seguir.

## O plano daqui para frente (em ordem)

1. Ele testar o capítulo 1 sem pedir dica e contar onde travou e se teve o "aha" quando a sombra da estaca deu 2 passos. Ajustar o capítulo com base nisso.
2. Mostrar para 1 ou 2 pessoas e observar sem ajudar. Se elas descobrirem sozinhas e gostarem, a ideia funciona.
3. ✅ Capítulo 2: Eratóstenes mede a Terra (feito em 02/11/2026; falta ele jogar no celular).
4. Capítulo com a corda de 12 nós (canto reto, 3-4-5).
5. Oficina pequena (a aba Criar), só com as ferramentas já descobertas e 2 ou 3 pedidos.
6. APK de verdade montado pelo GitHub Actions (empacotando o jogo web), já pensando na Play Store. Não usar sites que "transformam site em APK": muitos colocam anúncios ou rastreadores.

## Histórico, para não repetir o que já foi tentado

- Antes do jogo existiu um app de estudos (livro interativo de cálculo, funções, matrizes e física, com cenas 3D). Ele parou com esse app porque queria algo mais criativo. Os textos de explicação de lá podem virar conteúdo do caderno do jogo.
- O que funcionou no app de estudos: começar pela ideia antes da fórmula; exemplo resolvido linha por linha; a fórmula mudando ao vivo com os números da cena.
- O que não funcionou: assuntos fora da ordem de dificuldade; exemplos que mostram só parte da ideia (o "sapo pulando metade" não ensina a ideia central do limite); bibliotecas externas de fórmulas que não carregavam dentro do app do Claude; telas com informação demais por cima da cena.
