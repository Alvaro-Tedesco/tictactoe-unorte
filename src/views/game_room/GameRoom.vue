<template>
  <section class="root-game-room">
    <v-button text="Jogar" classes="p-3 bg-primary rounded-md"
              @click="redirectToGame"/>
  </section>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import VButton from "@/components/VButton.vue";

export default {
  name: "GameRoom",

  components: {
    VButton,
    HeaderPage,
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
