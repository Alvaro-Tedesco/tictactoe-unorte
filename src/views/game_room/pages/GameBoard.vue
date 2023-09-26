<template>
  <section class="root-game-board">
    <div class="w-full pt-4 px-4 flex justify-between gap-20 max-[300px]:gap-12">
      <div class="p-2 border border-primary bg-primary rounded-md"
           :class="$route.params.playerId === Player.PLAYER_1.id ? 'shadow-md shadow-green' : 'shadow-none opacity-60'">
        <span class="text-sm">JOGADOR 1</span>
      </div>

      <div class="p-2 border border-primary bg-primary rounded-md"
           :class="$route.params.playerId === Player.PLAYER_2.id ? 'shadow-md shadow-green' : 'shadow-none opacity-60'">
        <span class="text-sm">JOGADOR 2</span>
      </div>
    </div>

    <div class="w-full mt-20 flex justify-center">
      <v-board :is-second-player="$route.params.playerId === Player.PLAYER_2.id" @position="setPosition($event)"/>
    </div>

    <div class="w-full mt-12 pb-4 flex justify-center items-center">
      <v-button @click="backToGameRoom">SAIR</v-button>
    </div>
  </section>
</template>

<script>
import services from "../../../http";
import VBoard from "../../../components/VBoard.vue";
import VButton from "../../../components/VButton.vue";
import Player from "../../../enums/Player";
import Piece from "../../../enums/Piece";

export default {
  name: "GameBoard",

  components: {
    VBoard,
    VButton,
  },

  data() {
    return {
      Player,
      Piece,
    };
  },

  methods: {
    /**
     * @param {string} position
     */
    setPosition(position) {
      const piece = this.$route.params.playerId === Player.PLAYER_1.id ? Piece.ORANGE.value : Piece.BLACK.value;

      services.gameRoom.move({
        param: {
          sessionId: this.$route.params.sessionId,
        },
        data: {
          piece,
          position,
          player: Player.getPlayer(this.$route.params.playerId).value,
        },
      }).then((response) => {
        this.$store.dispatch("setSession", response.data);
      });
    },

    backToGameRoom() {
      services.gameRoom.finish({
        param: {
          sessionId: this.$route.params.sessionId,
        },
      }).then((response) => {
        console.log(response);
        this.$router.push({
          name: "game_room",
          params: {
            sessionId: this.$route.params.sessionId,
            playerId: this.$route.params.playerId,
          },
        });
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.root-game-board {
  width: 100%;
  height: 100%;
}
</style>
