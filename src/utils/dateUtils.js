import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatDate = (date, formatStr) => {
  return format(date, formatStr, { locale: ptBR });
};

export const getMonthDays = (date) => {
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  return eachDayOfInterval({ start, end });
};

export const formatDateWithLocale = (date, formatStr) => {
  return format(date, formatStr, { locale: ptBR });
};