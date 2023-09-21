<template>
  <section class="root-game-room">
    <v-button text="Jogar" classes="p-3 bg-primary rounded-md" @click="redirectToGame"/>

    <template v-if="activeLoading">
      <v-loading/>
    </template>
  </section>
</template>

<script>
import VButton from "../../components/VButton.vue";
import VLoading from "../../components/VLoading.vue";
import HeaderPage from "../../components/HeaderPage.vue";

export default {
  name: "GameRoom",

  components: {
    VButton,
    VLoading,
    HeaderPage,
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
