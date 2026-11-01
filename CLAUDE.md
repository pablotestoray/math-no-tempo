# Matemática no Tempo — contexto do projeto

Este arquivo resume uma conversa longa no chat do Claude, para quem continuar o projeto (Claude Code ou outra pessoa) saber de onde partir. Leia tudo antes de mexer em qualquer arquivo.

## Quem é o dono do projeto e como falar com ele

- Responda sempre em português.
- Ele não é programador e só tem o celular (Android), sem computador. Usa o Termux quando precisa de terminal.
- Explique um passo de cada vez. Quando for comando de Termux, mande pronto para colar. Peça um print da tela antes de passar para o passo seguinte.
- Nunca peça o token do GitHub nem mostre arquivos `.env` no chat.
- Ele registrou esta regra para o Claude Code: commits e push só no branch `claude/claude-md-pending-tasks-zrchuy`, sem abrir PR. Confirme com ele se a regra vale para este repositório. Se valer, o GitHub Pages precisa publicar a partir desse branch (veja "Onde paramos").
- Ele prefere conselho honesto a concordância: aponte falhas e riscos logo no começo, marque a confiança das afirmações principais ([Certo], [Provável], [Chute]) e não use elogio de enchimento.

## A ideia do jogo

Um jogo para aprender matemática do zero até o cálculo, redescobrindo as ideias junto com quem as descobriu. Ele quer lançar o jogo um dia e também aprender matemática enquanto constrói.

- **Linha do tempo:** cada capítulo começa com um "timelapse" ("O ano é 600 a.C., Gizé, Egito…") e apresenta um problema que uma pessoa real enfrentou. O jogador tenta resolver com ferramentas físicas (estacas, cordas, sombras, blocos) e descobre a ideia sozinho, se for possível descobrir.
- **A fórmula é um atalho, não uma aula:** primeiro o jogador resolve do jeito lento; depois percebe o padrão, e a fórmula vira uma ferramenta no caderno, como uma receita no Minecraft.
- **Honestidade histórica:** muita "história da matemática" é lenda. Todo capítulo termina com o quadro "O que se sabe de verdade", separando documento de história contada.
- **Oficina (área livre):** inspirada no Minecraft. Cada descoberta vira uma ferramenta de construção (esquadro, medidor de sombras, rodas com π, catapulta com parábola, velocímetro com derivada, reservatório com integral). Precisa ter pedidos opcionais, como os aldeões do Minecraft, senão fica vazia. Ainda não foi feita: entra depois de 2 ou 3 capítulos.
- **Ciclo do jogo:** linha do tempo (descobrir) → oficina (usar) → um pedido que ninguém resolve ainda leva à próxima época.
- **A derivada dá para redescobrir** pela ideia, não pela definição formal: Galileu e o plano inclinado (distâncias 1, 3, 5, 7…), e Fermat com máximos e mínimos (a maior horta com 20 metros de cerca).

### Linha do tempo planejada (do mais simples ao cálculo)

1. Tales, ~600 a.C.: altura da pirâmide pela sombra (proporção). **Feito: capítulo 1.**
2. Eratóstenes, ~240 a.C.: o tamanho da Terra com duas sombras. **Próximo capítulo.**
3. Egito, Papiro de Rhind (~1650 a.C.): frações e áreas de campos.
4. Babilônia (~1800 a.C.): trios como 3-4-5 e a conta de √2.
5. Pitagóricos: cordas e música (frações 2:1, 3:2); a corda de 12 nós e o canto reto.
6. Arquimedes, ~250 a.C.: π com polígonos e a área da parábola somando pedaços (semente da integral).
7. al-Khwarizmi, ~820: álgebra como equilibrar a balança.
8. Fibonacci, 1202: os coelhos (sequência).
9. Descartes e Fermat, ~1637: coordenadas e máximos/mínimos.
10. Galileu: queda e plano inclinado (velocidade e aceleração).
11. Newton e Leibniz: derivada e integral.

A ordem dos capítulos não é cronológica de propósito: vai do mais fácil ao mais difícil.

## Visual (decidido)

- Estilo "caderno ou papiro", com cada época desenhada como a arte real daquele tempo:
  - Egito: papiro com fibras cruzadas, tinta preta com títulos em vermelho (como o Papiro de Rhind).
  - Personagens gregos: silhuetas pretas, como nos vasos gregos de figuras negras.
  - Caderno de descobertas: pergaminho, tinta sépia e anotações em vermelho "sanguínea", como os cadernos de Leonardo da Vinci.
- Fontes (Google Fonts): Cinzel nos títulos, IM Fell English no texto, Caveat nas anotações à mão.
- Cores do tema claro: papiro `#E9D8AE`, papiro escuro `#E2CC98`, pedra `#D4B271`, tinta `#2A1C10`, vermelho `#9E3B26`, sombra `#6B4A26`, pergaminho `#EFE3C4`, sépia `#3E2A16`. Existe também um tema escuro ("papiro à noite") nas variáveis CSS.
- Tudo em 2D (SVG). 3D no navegador do celular fica pesado.
- Há um quadro de design com 3 telas de referência do capítulo 1 (abertura, jogo, caderno) no Claude: https://claude.ai/artifact/6iya3eUMgaKi32ey1ik6xs (só abre logado na conta dele).

## O que existe hoje (capítulo 1 jogável)

Arquivos do app (todos na raiz, sem pastas):

| Arquivo | Para que serve |
|---|---|
| `index.html` | O jogo inteiro: HTML, CSS e JavaScript num arquivo só. |
| `manifest.webmanifest` | Faz o jogo ser instalável (nome, ícones, tela cheia, celular deitado). |
| `sw.js` | Service worker: guarda os arquivos para o jogo abrir sem internet. |
| `icone-192.png`, `icone-512.png`, `icone-maskable.png` | Ícones do app. |

Versão para jogar no navegador (não instala): https://claude.ai/artifact/D8FmVEGLRUHeRuMbgAS5vd (só abre logado na conta dele).

### Como o capítulo 1 funciona

- **Abertura:** o texto aparece aos poucos; tocar pula a animação.
- **Cena:** a pirâmide com a sombra no chão, e um quadro "Perto de você" com Tales e a estaca de 2 passos (a estaca é pequena demais para aparecer na mesma escala da pirâmide).
- **Barra "Hora do dia":** de 13:00 a 17:00, em passos de 2 minutos. Elevação do sol: `73.92 * sin(π * (hora − 6) / 12)` graus. Às 15:30 o sol fica exatamente a 45°, e a sombra de tudo fica do tamanho da coisa.
- **Números do mundo:** pirâmide com 146 passos de altura e 230 de base (medidas reais da Grande Pirâmide em metros; 1 passo = 1 metro). Estaca com 2 passos.
- **Medidas:** sombra da estaca (1 casa decimal), parte visível da sombra da pirâmide (inteiro) e base (230). Antes de ~15h a sombra da pirâmide fica toda escondida embaixo dela, e o jogo avisa. Se a hora muda depois de medir, as medidas antigas aparecem como "de outra hora".
- **Dois jeitos de resolver:** esperar 15:30 (sombra da estaca = 2) e somar a sombra visível (31) com a metade da base (115), ou usar a proporção em qualquer hora.
- **Resposta:** aceita 146 ± 4. Respostas erradas recebem explicação específica (só a parte visível, só a metade da base, medidas de horas diferentes).
- **4 dicas progressivas.** A terceira mostra a "sombra escondida" tracejada embaixo da pirâmide.
- **Ao acertar:** o caderno se preenche com os números do jogador, mostra a regra (altura ÷ sombra é igual para a estaca e para a pirâmide) e libera a ferramenta "medidor de sombras". Depois vem "O que se sabe de verdade".
- O progresso fica salvo no `localStorage` (chave `mnt-cap1`).
- Testado com navegador automático em celular deitado (844×390), em pé (390×844) e tema escuro, sem erros.

## Onde paramos

Os 6 arquivos já estão extraídos no celular dele, na pasta `Jogo-matematica-no-tempo` da memória interna. O objetivo agora é publicar no GitHub Pages e instalar como app pelo Chrome ("Instalar app"; o Chrome do Android cria um APK automaticamente para apps instaláveis).

Passos:

1. ✅ Baixar o zip e extrair os 6 arquivos.
2. ⏳ **Próximo passo:** criar o repositório público `matematica-no-tempo` no GitHub, com README (github.com/new → nome → Public → Add a README file → Create repository).
3. Subir os 6 arquivos e este `CLAUDE.md` para a raiz do repositório (Add file → Upload files).
4. Ligar o GitHub Pages: Settings → Pages → Source: "Deploy from a branch" → branch `main` (ou o branch da regra acima, se valer aqui) → pasta `/ (root)` → Save.
5. Esperar 1 a 2 minutos e abrir `https://<usuario>.github.io/matematica-no-tempo/` no Chrome do celular.
6. Menu do Chrome → "Instalar app" (ou "Adicionar à tela inicial"). Testar se abre em tela cheia e sem internet.

Lembre: um passo por vez, com print antes de seguir.

## Tarefas abertas (em ordem)

1. **Corrigir a atualização do app (fazer antes de mudar o jogo):** o `sw.js` atual serve tudo primeiro do cache, com o nome fixo `mat-no-tempo-v1`. Assim, quem instalou o app não recebe as mudanças. Trocar para "rede primeiro" no `index.html` (cache só quando estiver sem internet) e mudar o nome do cache a cada versão.
2. Ele testar o capítulo 1 sem dicas e contar onde travou e se teve o "aha" quando a sombra da estaca deu 2 passos. Ajustar o capítulo com base nisso.
3. Mostrar para 1 ou 2 pessoas e observar sem ajudar.
4. Capítulo 2: Eratóstenes mede a Terra (também com sombras, reaproveita o medidor de sombras).
5. Capítulo com a corda de 12 nós (canto reto, 3-4-5).
6. Oficina pequena, só com as ferramentas já descobertas e 2 ou 3 pedidos.
7. Mais tarde: APK de verdade montado pelo GitHub Actions (empacotando o jogo web), já pensando na Play Store. Não usar sites que "transformam site em APK": muitos colocam anúncios ou rastreadores.

## Histórico, para não repetir o que já foi tentado

- Antes do jogo existiu um app de estudos (livro interativo de cálculo, funções, matrizes e física, com cenas 3D). Ele parou com esse app porque queria algo mais criativo. Os textos de explicação de lá podem virar conteúdo do caderno do jogo.
- O que funcionou no app de estudos: começar pela ideia antes da fórmula; exemplo resolvido linha por linha; mostrar a fórmula mudando ao vivo com os números da cena (por exemplo, f′(x) = lim… preenchida com o valor da barra). Isso deve voltar no jogo: um painel pequeno que mostra a conta mudando enquanto o jogador mexe.
- O que não funcionou: ordem dos assuntos fora de dificuldade, exemplos que mostram só parte da ideia (o "sapo pulando metade" não ensina a ideia central do limite), e bibliotecas externas de fórmulas que não carregavam no app do Claude.
