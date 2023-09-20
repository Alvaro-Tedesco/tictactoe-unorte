<template>
  <section class="flex p-1 bg-primary">
    <div class="w-1/3">
      <template v-if="backButton">
        <div class="w-fit rounded-3xl">
          <v-button class="shadow drop-shadow" @click="backButton">voltar</v-button>
        </div>
      </template>
    </div>

    <div class="w-1/3 flex justify-center gap-2">
      <img class="w-[50px]" :src="logoLER" alt="Logo LER"/>
      <img class="w-[50px]" :src="logoUNORTE" alt="Logo UNORTE"/>
    </div>

    <div class="w-1/3"></div>

  </section>
</template>

<script>
import VButton from "@/components/VButton.vue";

export default {
  name: "HeaderPage",

  components: {
    VButton,
  },

  props: {
    backButton: {type: Function, default: null}
  },

  data() {
    return {
      logoLER: "https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg",
      logoUNORTE: "https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg",
    }
  },
}
</script>
