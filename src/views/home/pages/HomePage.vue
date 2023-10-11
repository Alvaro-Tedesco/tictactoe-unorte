<template>
  <section>
    <header class="w-full p-8 text-center text-white">
      <p class="pt-4 pb-2 text-3xl">
        Desafie seus amigos e teste sua <br>estratégia no do Jogo da Velha online!
      </p>

      <span>ROBÓTICA COLABORATIVA</span>
    </header>

    <main class="w-full py-4 flex justify-center items-center gap-8">
      <div class="flex flex-col justify-center">
        <img src="../../../assets/icons/icon_o_white.svg" alt="X">

        <img class="mt-8" src="../../../assets/icons/icon_x_white.svg" alt="O">
      </div>

      <img src="../../../assets/icons/board.svg" alt="#" style="max-width: 250px;">

      <div class="flex flex-col justify-center">
        <img src="../../../assets/icons/icon_x_white.svg" alt="X">

        <img class="mt-8" src="../../../assets/icons/icon_o_white.svg" alt="O">
      </div>
    </main>

    <footer class="w-full pt-4 flex justify-center items-center gap-4">
      <v-button classes="p-2 bg-light-blue rounded-md text-white font-bold" @click="goToLogin">Jogar</v-button>

      <v-button classes="p-2 bg-primary rounded-md text-light-blue font-bold" @click="goToMatches">Partidas</v-button>
    </footer>
  </section>
</template>

<script>
import HeaderPage from "../../../components/HeaderPage.vue";
import VButton from "../../../components/VButton.vue";
import services from "../../../http";

export default {
  name: "HomePage",

  components: {
    VButton,
    HeaderPage,
  },

  methods: {
    goToLogin() {
      services.session.create({}).then((response) => {
        this.$store.dispatch('setSession', response.data);

        this.$router.push({name: 'login', params: {sessionId: this.$store.getters.sessionId}});
      }).catch((error) => {
        console.error(error);
      });
    },

    goToMatches() {
      this.$router.push({name: 'matches'});
    }
  }
}
</script>
