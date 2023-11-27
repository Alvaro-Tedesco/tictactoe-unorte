<template>
  <section class="root-game w-full">
    <header class="w-full">
      <div class="w-full pt-4 flex flex-wrap justify-center gap-8">
        <img class="w-[70px] min-h-[50px]" src="../../../assets/images/UNORTE_BRANCO.svg" alt="Logo UNORTE">
        <img class="w-[70px] min-h-[50px]" src="../../../assets/images/LAMPI_BRANCO.svg" alt="Logo LAMPI">
        <img class="w-[70px] min-h-[50px]" src="../../../assets/images/LER_BRANCO.svg" alt="Logo LER">
        <img class="w-[70px] min-h-[50px]" src="../../../assets/images/NIC_BRANCO.svg" alt="Logo NIC">
      </div>

      <h1 class="pt-6 text-white font-bold text-2xl text-center">Jogo da Velha</h1>
    </header>

    <main class="w-full">
      <router-view/>
    </main>
  </section>
</template>

<script>
import Result from "../../../enums/Result";
import Player from "../../../enums/Player";
import HeaderPage from "../../../components/HeaderPage.vue";

export default {
  name: "GameRoot",

  components: {
    HeaderPage,
  },

  data() {
    return {
      Result,
      Player,
      interval: null,
    };
  },

  created() {
    if (this.$store.getters.result.value === Result.NONE.value) {
      this.interval = setInterval(() => {
        this.$store.dispatch('getSession', this.$route.params.sessionId);
      }, 200);
    }
  },

  mounted() {
    if (this.$route.params.playerId === Player.SPECTATOR.id) {
      return;
    }

    this.$store.dispatch('setPlayer', {
      params: {
        sessionId: this.$route.params.sessionId,
      },
      query: {
        player: Player.fromId(this.$route.params.playerId).value,
      }
    }).catch((error) => {
      alert("Erro ao tentar entrar na sessão: " + (error?.response?.data?.message ?? "Erro interno"));
      console.error(error);
    });
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
