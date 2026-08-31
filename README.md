# EduTrack

App de organização de estudos — cronograma, técnica pomodoro e metas em um só lugar.

Projeto da disciplina **Mobile Development & IOT** (turma 3ESPZ-2026), Checkpoints 4, 5 e 6:
desenvolvimento de um app completo em React Native, do zero ao APK instalável. Este repositório
contém o Checkpoint 4 — idealização do app.

## Integrantes

- Rodrigo Nakata — RM556417
- Arthur Abonizio — RM555506
- Gabriel Padula — RM554907

## Documentação

- [Escopo do projeto](docs/escopo.md) — problema, público-alvo, proposta de valor
- [Identidade visual](docs/marca.md) — logo, paleta de cores, tipografia, telas conceituais
- [Pitch](docs/pitch.md) — modelo de negócio e diferencial competitivo

Identidade visual e telas conceituais também estão no Figma:
https://www.figma.com/design/DMtLARyrO0XZNoSm8z1IGk

## Stack

- [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/)
- TypeScript
- [Expo Router](https://docs.expo.dev/router/introduction/) (navegação por arquivos)

## Telas

14 telas ao todo — fluxo de entrada, o app principal em tabs, e telas de apoio (fora das tabs):

| Tela | Rota | Grupo |
| --- | --- | --- |
| Onboarding | `/onboarding` | fluxo de entrada |
| Login | `/login` | fluxo de entrada |
| Criar conta | `/cadastro` | fluxo de entrada |
| Home / Dashboard | `/home` | tabs |
| Cronograma | `/cronograma` | tabs |
| Pomodoro | `/pomodoro` | tabs |
| Metas | `/metas` | tabs |
| Nova sessão de estudo | `/nova-sessao` | fora das tabs (modal) |
| Nova meta | `/nova-meta` | fora das tabs (modal) |
| Detalhe da Meta | `/meta-detalhe` | fora das tabs |
| Perfil | `/perfil` | fora das tabs |
| Editar perfil | `/editar-perfil` | fora das tabs |
| Notificações | `/notificacoes` | fora das tabs |
| Estatísticas | `/estatisticas` | fora das tabs |

Detalhes visuais de cada tela em [docs/marca.md](docs/marca.md#telas-do-app).

## Estrutura de pastas

```
src/
  app/
    index.tsx           redireciona para /onboarding
    onboarding.tsx       boas-vindas
    login.tsx             entrar (mock)
    cadastro.tsx          criar conta (mock)
    perfil.tsx             perfil e configurações
    editar-perfil.tsx      editar nome/e-mail
    notificacoes.tsx       lista de notificações
    estatisticas.tsx       horas/pomodoros por matéria e por dia
    meta-detalhe.tsx       detalhe de uma meta
    nova-meta.tsx           criar meta (modal)
    nova-sessao.tsx         criar sessão de estudo (modal)
    (tabs)/               grupo de telas com tab bar
      _layout.tsx         navegador de tabs
      home.tsx            dashboard
      cronograma.tsx
      pomodoro.tsx
      metas.tsx
    _layout.tsx           navegador raiz (Stack)
  components/     componentes compartilhados (Logo, Card, ThemedText, ThemedView)
  constants/      tokens de design (cores, tipografia, espaçamento)
  data/           dados mockados usados pelas telas (sem persistência real ainda)
  hooks/          hooks compartilhados (tema, color scheme)
docs/             documentação do projeto (escopo, marca, pitch)
assets/           ícones, splash e imagens do app (inclui assets/images/logo.jpeg)
public/           logo original enviado pelo grupo (referência)
```

## Como rodar

```bash
npm install
npx expo start
```

No terminal do Expo você pode abrir o projeto no Android, iOS ou web. Veja mais em
[docs.expo.dev](https://docs.expo.dev/get-started/introduction/).

## Status

- [x] Checkpoint 4 — idealização (docs, marca, pitch, estrutura inicial, telas conceituais)
- [ ] Checkpoint 5 — protótipo com navegação funcional e dados mockados
- [ ] Checkpoint 6 — simulação rodando (Android Studio/Windows) e build do APK
