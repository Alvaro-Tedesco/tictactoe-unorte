<template>
  <section class="root-game-room">
    <v-button @click="redirectToGame">Jogar</v-button>
  </section>
</template>

<script>
import VButton from "@/components/VButton.vue";

export default {
  name: "GameRoom",

  components: {
    VButton,
  },

  methods: {
    redirectToGame() {
      setTimeout(() => {
        this.$router.push({name: 'game_board', params: {room_id: 1, player_id: 1}});
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
