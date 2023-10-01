<template>
  <section class="root-header-page">
    <nav class="w-full flex justify-evenly items-center">
      <div class="w-1/3 p-4 flex justify-center gap-2">
        <img class="w-[50px]" :src="logoLER" alt="Logo LER"/>
        <img class="w-[50px]" :src="logoUNORTE" alt="Logo UNORTE"/>
      </div>

      <div class="w-1/3 flex justify-center">
        <label class="text-white font-bold text-xl">Jogo da Velha</label>
      </div>

      <div class="w-1/3 flex flex-wrap justify-center gap-8">
        <router-link :to="{name: 'home',}">
          <span>Página inicial</span>
        </router-link>

        <router-link :to="{name: 'matches',}">
          <span>Partidas</span>
        </router-link>
      </div>
    </nav>
  </section>
</template>

<script>
import VButton from "../components/VButton.vue";

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
    };
  },
}
</script>

<style lang="scss" scoped>
.root-header-page {
  width: 100%;
  color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    a {
      color: #FFFFFF;
      text-decoration: none;

      &.router-link-exact-active, &.router-link-active {
      color: darkslateblue;
      text-decoration: underline;
    }
  }
}
</style>
