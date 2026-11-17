import { createContext, useContext } from 'react';
import type { Frequency } from './store';
import type { Ctx } from './types';

export function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('');
}

export const FREQUENCY_LABEL: Record<Frequency, string> = {
  once: 'Uma vez',
  daily: 'Diária',
  weekly: 'Semanal',
  biweekly: 'Quinzenal',
  monthly: 'Mensal',
};

export function iso(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
export function today() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}
export function shiftDays(days: number) {
  const d = today();
  d.setDate(d.getDate() + days);
  return iso(d);
}
export function parseISO(s: string) {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1);
}
export function daysUntil(s: string) {
  return Math.round((parseISO(s).getTime() - today().getTime()) / 86400000);
}
export function brl(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
export function dayMonth(s: string) {
  const d = parseISO(s);
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`;
}
const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
export const monthName = (i: number) => MONTHS[i] ?? '';
export const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

export function dueLabel(s: string) {
  const n = daysUntil(s);
  if (n < 0)
    return `Venceu há ${Math.abs(n)} ${Math.abs(n) === 1 ? 'dia' : 'dias'}`;
  if (n === 0) return 'Vence hoje';
  if (n === 1) return 'Vence amanhã';
  return `Vence em ${n} dias`;
}

export const RoomyCtx = createContext<Ctx | null>(null);

export function useRoomy() {
  const ctx = useContext(RoomyCtx);
  if (!ctx) throw new Error('useRoomy precisa estar dentro de RoomyProvider');
  return ctx;
}
