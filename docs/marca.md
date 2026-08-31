# Identidade Visual — EduTrack

## Nome

**EduTrack** — combina "Edu" (educação/estudo) com "Track" (acompanhar, trilhar), reforçando a
proposta central do app: acompanhar a jornada de estudos do usuário.

## Logo

Marca simples: um selo arredondado na cor primária com o símbolo de estudo (formatura/livro),
acompanhado do wordmark "EduTrack" em Poppins Bold.

![Style guide EduTrack](marca/style-guide.png)

Arquivo Figma (editável, com o logo, paleta e tipografia): https://www.figma.com/design/DMtLARyrO0XZNoSm8z1IGk

## Paleta de cores

| Nome | Hex (light) | Uso |
| --- | --- | --- |
| Primary | `#4F46E5` | Ações principais, marca, links |
| Secondary | `#14B8A6` | Progresso positivo, concluído |
| Accent | `#F59E0B` | Destaques, metas, progresso |
| Texto | `#14161A` | Texto principal |
| Texto secundário | `#5B6472` | Texto de apoio |
| Fundo | `#F7F8FB` | Background das telas |
| Elemento | `#EEF0F6` | Cards e superfícies |

Os mesmos valores estão em código em [`src/constants/theme.ts`](../src/constants/theme.ts)
(inclui também as variantes para modo escuro).

## Tipografia

- **Poppins** (Bold / SemiBold) — títulos, wordmark e destaques. Fonte geométrica, moderna e
  amigável, transmitindo energia e foco.
- **Inter** (Regular / Medium / SemiBold) — textos e conteúdo. Fonte de alta legibilidade em
  telas pequenas, ideal para listas de cronograma e cards de dados.

## Telas do app

O EduTrack tem 8 telas. As mesmas telas existem em dois lugares: como conceito visual no Figma
(estático, para a identidade de marca do CP4) e como código funcional no app Expo, já navegável
(ver [estrutura de pastas no README](../README.md#estrutura-de-pastas)).

| # | Tela | Descrição |
| --- | --- | --- |
| 1 | Onboarding | Boas-vindas, apresentação da proposta de valor |
| 2 | Login | Entrar na conta (mock, sem autenticação real ainda) |
| 3 | Home / Dashboard | Saudação, streak, pomodoros do dia, próxima sessão |
| 4 | Cronograma | Lista da semana de estudos por matéria/dia/horário |
| 5 | Pomodoro | Timer de foco/pausa |
| 6 | Metas | Progresso das metas de estudo |
| 7 | Detalhe da Meta | Progresso detalhado, horas por semana, adicionar sessão |
| 8 | Perfil | Dados do usuário, streak, plano, configurações |

Prints do Figma (telas conceituais, estáticas):

| Onboarding | Login | Home |
| --- | --- | --- |
| ![Tela Onboarding](marca/tela-onboarding.png) | ![Tela Login](marca/tela-login.png) | ![Tela Home](marca/tela-home.png) |

| Cronograma | Pomodoro |
| --- | --- |
| ![Tela Cronograma](marca/tela-cronograma.png) | ![Tela Pomodoro](marca/tela-pomodoro.png) |

Metas, Detalhe da Meta e Perfil existem como código funcional (`src/app/(tabs)/metas.tsx`,
`src/app/meta-detalhe.tsx`, `src/app/perfil.tsx`); os prints correspondentes no Figma entram
assim que o limite de uso do plano do Figma MCP for renovado.
