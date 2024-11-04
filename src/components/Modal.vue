<script setup lang="ts">
import { onUnmounted, watch } from 'vue'

const props = defineProps<{
  show: boolean
}>();

const emit = defineEmits<{
  (e: 'close'): void
}>();


function closeModal() {
  emit('close');
}

watch(() => props.show, (newVal) => {
  if (newVal) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden');
});
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="fixed inset-0 z-40">

      <div class="relative overflow-y-auto bg-primary w-screen h-screen px-0 sm:px-8 py-24">
        <div class="sticky flex justify-end px-4 top-0 left-0">
          <button @click="closeModal" title="Fermer" class="flex items-center justify-center rounded-xl bg-opaque hover:bg-border-primary w-max p-2 backdrop-blur-md saturate-130 transition-all duration-300 ease-in-out">
            <i class='bx bx-x bx-sm'></i>
          </button>
        </div>

<!--        <div class="flex flex-col gap-14 max-w-[81%] lg:max-w-[60%] mx-auto">-->
        <div class="flex flex-col gap-14 max-w-4xl mx-auto px-8 sm:px-0">
          <slot name="icon"></slot>
          <h1 class="flex justify-center"><slot name="title"></slot></h1>

          <div class="flex justify-center text-base">
            <slot name="date"></slot>
          </div>

          <slot name="img"></slot>

          <p class="mx-10"><slot name="content"></slot></p>

          <slot name="links"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* Animation de l'apparition et disparition de l'overlay */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Animation de l'apparition et disparition de la modal */
.modal-enter-active, .modal-leave-active {
  transition: transform 0.3s ease;
}
.modal-enter-from {
  transform: scale(0.95);
  opacity: 0;
}
.modal-enter-to {
  transform: scale(1);
  opacity: 1;
}
.modal-leave-from {
  transform: scale(1);
  opacity: 1;
}
.modal-leave-to {
  transform: scale(0.95);
  opacity: 0;
}
</style>
