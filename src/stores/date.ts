import { defineStore } from 'pinia'

export const useDate = defineStore('date', () => {
  const getDayMonthYear = (date, locale = 'fr-FR') => {
    if (!date) return '';
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getMonthYear = (date, locale = 'fr-FR') => {
    if (!date) return '';
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString(locale, {
      year: 'numeric',
      month: '2-digit'
    });
  };

  const getYear = (date, locale = 'fr-FR') => {
    if (!date) return '';
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString(locale, {
      year: 'numeric'
    });
  };

  return { getDayMonthYear, getMonthYear, getYear }
});
