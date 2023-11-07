<template>
  <section class="root-game-room">
    <v-button classes="p-2 bg-light-blue rounded-md text-white font-bold" @click="redirectToGame">Jogar</v-button>

    <template v-if="activeLoading">
      <v-loading/>
    </template>
  </section>
</template>

<script>
import VButton from "../../../components/VButton.vue";
import VLoading from "../../../components/VLoading.vue";

export default {
  name: "GameRoom",

  components: {
    VButton,
    VLoading,
  },

  data() {
    return {
      activeLoading: false,
    };
  },

  methods: {
    redirectToGame() {
      this.activeLoading = true;

      setTimeout(() => {
        this.$router.push({
          name: 'game_board',
          params: {
            sessionId: this.$route.params.sessionId,
            playerId: this.$route.params.playerId,
          },
        });

        this.activeLoading = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.root-game-room {
  height: calc(100vh - 175px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
