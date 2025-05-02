<script setup lang="ts">
import { computed, ref } from 'vue'
import axios, { type AxiosError } from 'axios'
import {useToast} from 'vue-toast-notification';
import { useRecaptcha } from '@/composables/useRecaptcha'

const $toast = useToast();

const { executeRecaptcha } = useRecaptcha();
const siteKey = '6LeaPCsrAAAAAP3CuVQ7HjMxI3VP395fftmTsbKM';

const loading = ref(false);
const msgForm = ref({
  name: '',
  email: '',
  message: ''
})

const isFormValid = computed(() => msgForm.value.name !== '' && msgForm.value.email !== '' && msgForm.value.message !== '');

const sendMail = async () => {
  loading.value = true;

  const grecaptchaToken = await executeRecaptcha(siteKey);

  const msgBody = {
    fromName: msgForm.value.name,
    fromEmail: msgForm.value.email,
    to: 'simonvennat@gmail.com',
    subject: 'Nouveau message de ' + msgForm.value.name,
    message: msgForm.value.message,
    captchaToken: grecaptchaToken,
  }

  if (grecaptchaToken) {
    axios.post(import.meta.env.VITE_API_BASE_URL + '/email/send/1', msgBody)
      .then(() => {
        $toast.success('Message envoyé !')
        loading.value = false;
        msgForm.value = {
          name: '',
          email: '',
          message: ''
        }
      })
      .catch((error: AxiosError) => {
        $toast.error('Erreur : ' + error.message)
        loading.value = false;
      });
  }
}
</script>

<template>
  <div id="contact" class="pt-20">
    <h1 class="title flex justify-center">Me contacter</h1>
    <div class="flex justify-center text-text-secondary">
      <a href="https://www.linkedin.com/in/simon-vennat" target="_blank">
        <i class="bx bxl-linkedin-square bx-md px-2 transition-all duration-300 ease-in-out hover:text-text-primary"></i>
      </a>

      <a href="https://github.com/simven" target="_blank">
        <i class="bx bxl-github bx-md px-2 transition-all duration-300 ease-in-out hover:text-text-primary"></i>
      </a>
    </div>

    <div class="contact-list grid gap-6 md:gap-10 mt-14 max-w-screen-2xl mx-auto">
      <div class="col-span-4 md:col-span-2 w-full flex justify-center">
        <form id="contactForm" class="w-full flex flex-col items-center" @submit.prevent="sendMail">
          <div class="mb-5 w-full">
            <input v-model="msgForm.name" type="text" name="name" class="rounded-md w-full p-2.5 bg-border-primary focus:text-border-primary focus:bg-text-primary" placeholder="Nom" required>
          </div>
          <div class="mb-5 w-full">
            <input v-model="msgForm.email" type="email" name="email" class="rounded-md w-full p-2.5 bg-border-primary focus:text-border-primary focus:bg-text-primary" placeholder="Email" required>
          </div>
          <div class="mb-5 w-full">
            <textarea v-model="msgForm.message" name="message" rows="6" class="rounded-md w-full p-2.5 bg-border-primary focus:text-border-primary focus:bg-text-primary" placeholder="Description" required></textarea>
          </div>

          <button
            :disabled="!isFormValid || loading"
            :class="{ 'opacity-40': !isFormValid || loading }">

            Envoyer
          </button>
        </form>
      </div>

      <div class="col-span-4 md:col-span-2">
        <div class="flex flex-col items-center gap-5">
          <h2>Quelques informations</h2>

          <div class="flex flex-col items-center text-center gap-5">
            <div class="flex flex-col gap-1.5">
              <i class="bx bxs-pin bx-sm"></i>
              <p>Hauts-de-France</p>
            </div>

            <div class="flex flex-col gap-1.5">
              <i class="bx bxs-phone bx-sm"></i>
              <a class="text-text-secondary underline" href="tel:+33651640789">+33 6 51 64 07 89</a>
            </div>

            <div class="flex flex-col gap-1.5">
              <i class="bx bxs-envelope bx-sm"></i>
              <a class="text-text-secondary underline" href="mailto:simonvennat@gmail.com" target="_blank"> simonvennat@gmail.com </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (min-width: 768px) {
  .contact-list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

button {
  @apply rounded-md font-bold text-base py-2 px-4 transition-all hover:saturate-150;
  color: var(--color-primary);
  background: var(--color-text-primary);
}
</style>
