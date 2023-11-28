<template>
  <section class="w-full pt-8 px-4 flex flex-col justify-center">
    <h1 class="pb-2 text-white font-bold text-xl">Jogadores na partida</h1>

    <template v-for="(player) in players">
      <div class="w-full p-4 flex justify-center items-center">
        <div class="w-50 p-2 flex justify-center items-center gap-4 border border-primary bg-primary rounded-md">
          <span class="text-sm text-light-blue font-bold">{{ player.name }}</span>

          <span class="w-6 h-6 block rounded-full" :class="`bg-${player.piece.value.toLowerCase()}`"></span>

          <template v-if="$store.getters.session.players.includes(player.value)">
            <check-bold-icon fill-color="#005000"/>
          </template>
        </div>
      </div>
    </template>

    <v-button class="mt-4" @click="goToGame">Jogar</v-button>

    <template v-if="activeLoading">
      <v-loading/>
    </template>
  </section>
</template>

<script>
import Player from "../../../enums/Player";
import VList from "../../../components/VList.vue";
import VButton from "../../../components/VButton.vue";
import VLoading from "../../../components/VLoading.vue";
import CheckBoldIcon from "vue-material-design-icons/CheckBold.vue";

export default {
  name: "GameRoom",

  components: {
    VList,
    VButton,
    VLoading,
    CheckBoldIcon,
  },

  data() {
    return {
      Player,
      activeLoading: false,
      players: [
        Player.PLAYER_1,
        Player.PLAYER_2,
      ],
    };
  },

  methods: {
    goToGame() {
      if (!this.$store.getters.session.ready) {
        return alert("Os robôs ainda não estão prontos!");
      }

      this.$router.push({
        name: 'game_board',
        params: {
          sessionId: this.$route.params.sessionId,
          playerId: this.$route.params.playerId,
        },
      }).finally(() => {
        this.activeLoading = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.root-game-room {
  height: calc(100vh - 175px);
}
</style>
