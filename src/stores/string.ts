import { defineStore } from 'pinia'

export const useString = defineStore('string', () => {
  const lowercaseFirstLetter = (s) => s.charAt(0).toLowerCase() + s.slice(1);
  const uppercaseFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  return { lowercaseFirstLetter, uppercaseFirstLetter }
});
