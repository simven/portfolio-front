import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scroll', () => {
  const handleScroll = () => {
    const scroll = window.scrollY;

    const header = document.querySelector('ul');
    if (header) {
      if (scroll > 100) {
        header.classList.add('backdrop-blur-lg', 'backdrop-saturate-170');
      } else {
        header.classList.remove('backdrop-blur-lg', 'backdrop-saturate-170');
      }
    }
  }

  return { handleScroll }
});
