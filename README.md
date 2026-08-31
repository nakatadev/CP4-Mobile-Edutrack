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
- [Enunciado do checkpoint](docs/enunciado/) — prints do enunciado original

Identidade visual e telas conceituais também estão no Figma:
https://www.figma.com/design/DMtLARyrO0XZNoSm8z1IGk

## Stack

- [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/)
- TypeScript
- [Expo Router](https://docs.expo.dev/router/introduction/) (navegação por arquivos)

## Estrutura de pastas

```
src/
  app/            telas (Expo Router) — index, cronograma, pomodoro, metas
  components/     componentes compartilhados (Logo, Card, ThemedText, ThemedView)
  constants/      tokens de design (cores, tipografia, espaçamento)
  data/           dados mockados usados pelas telas (sem persistência real ainda)
  hooks/          hooks compartilhados (tema, color scheme)
docs/             documentação do projeto (escopo, marca, pitch)
assets/           ícones, splash e imagens do app
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
