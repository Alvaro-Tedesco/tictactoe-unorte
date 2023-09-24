<template>
  <section class="root-game-room">
    <v-button @click="redirectToGame">Jogar</v-button>

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
        this.$router.push({name: 'game_board', params: {room_id: 1, player_id: 1,},});

        this.activeLoading = false;
      }, 500);
    },
  },
}
</script>

<style lang="scss" scoped>
.root-game-room {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
