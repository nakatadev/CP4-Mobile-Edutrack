/**
 * Dados mockados usados nas telas de idealização do CP4.
 * Nenhuma persistência real ainda — isso entra no CP5.
 */

export type StudySession = {
  id: string;
  materia: string;
  dia: string;
  horario: string;
  concluida: boolean;
};

export type Meta = {
  id: string;
  titulo: string;
  progresso: number;
  totalHoras: number;
  horasFeitas: number;
};

export const usuarioMock = {
  nome: 'Rodrigo',
  email: 'rodrigo@exemplo.com',
  plano: 'Gratuito' as 'Gratuito' | 'Premium',
  streakDias: 6,
  pomodorosHoje: 3,
  metaDiariaPomodoros: 5,
};

export const cronogramaMock: StudySession[] = [
  { id: '1', materia: 'Matemática — Funções', dia: 'Seg', horario: '19:00', concluida: true },
  { id: '2', materia: 'Química Orgânica', dia: 'Ter', horario: '20:00', concluida: true },
  { id: '3', materia: 'Redação — Dissertativa', dia: 'Qua', horario: '19:30', concluida: false },
  { id: '4', materia: 'Física — Cinemática', dia: 'Qui', horario: '19:00', concluida: false },
  { id: '5', materia: 'História do Brasil', dia: 'Sex', horario: '18:30', concluida: false },
];

export const metasMock: Meta[] = [
  { id: '1', titulo: 'Revisar Matemática — ENEM', progresso: 0.6, totalHoras: 20, horasFeitas: 12 },
  { id: '2', titulo: 'Redação nota 900+', progresso: 0.35, totalHoras: 10, horasFeitas: 3.5 },
  { id: '3', titulo: 'Química — reações orgânicas', progresso: 0.8, totalHoras: 8, horasFeitas: 6.4 },
];

export const pomodoroConfigMock = {
  duracaoFocoMin: 25,
  duracaoPausaMin: 5,
  ciclosAteLongPausa: 4,
};

export const metaDetalheMock = {
  ...metasMock[0],
  descricao: 'Revisar os principais tópicos de Matemática cobrados no ENEM: funções, geometria e estatística.',
  horasPorSemana: [
    { semana: 'Sem 1', horas: 3 },
    { semana: 'Sem 2', horas: 4 },
    { semana: 'Sem 3', horas: 2.5 },
    { semana: 'Sem 4', horas: 2.5 },
  ],
};
