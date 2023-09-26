<template>
  <main class="flex justify-center">
    <section>
    </section>

    <section>
      <div class="flex flex-col gap-10">
        <div>
          <div class="flex justify-center">
            <span>Robotica</span>
          </div>
          <div class="flex justify-center">
            <span>Colaborativa</span>
          </div>
        </div>
        <div class="flex justify-center">
          <h1 class="p-3 bg-primary rounded-md text-5xl w-fit">Jogo da Velha</h1>
        </div>
        <div class="flex justify-center">
          <v-button @click="goToLogin">Jogar</v-button>
        </div>
        <div class="flex justify-center">
          <v-button @click="goToMatches">Partidas</v-button>
        </div>
      </div>
    </section>

    <section>
    </section>
  </main>
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
      services.session.create().then((response) => {
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
