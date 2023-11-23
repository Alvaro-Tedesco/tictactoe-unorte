<template>
  <section class="root-game w-full">
    <header class="w-full">
      <div class="w-full pt-4 flex justify-center gap-2">
        <img class="w-[50px]" :src="logoLER" alt="Logo LER"/>
        <img class="w-[50px]" :src="logoUNORTE" alt="Logo UNORTE"/>
      </div>

      <h1 class="pt-6 text-white font-bold text-2xl text-center">Jogo da Velha</h1>
    </header>

    <main class="w-full">
      <router-view/>
    </main>

    <template v-if="$store.getters.result !== Result.NONE">
      <result-dialog :result="$store.getters.result"/>
    </template>
  </section>
</template>

<script>
import Result from "../../../enums/Result";
import HeaderPage from "../../../components/HeaderPage.vue";
import ResultDialog from "../../../components/ResultDialog.vue";

export default {
  name: "GameRoot",

  components: {
    HeaderPage,
    ResultDialog,
  },

  data() {
    return {
      Result,
      interval: null,
      logoLER: "https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg",
      logoUNORTE: "https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg",
    };
  },

  created() {
    if (this.$store.getters.result === Result.NONE) {
      this.interval = setInterval(() => {
        this.$store.dispatch('getSession', this.$route.params.sessionId);
      }, 1000);
    }
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss" scoped>
.root-game {
  background-image: linear-gradient(to bottom, #F25835, #000000 130%);

  main {
    min-height: calc(100vh - 122px);
  }
}
</style>
