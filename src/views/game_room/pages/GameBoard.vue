<template>
  <section class="root-game-board">
    <template v-if="activeLoading">
      <v-loading/>
    </template>

    <div class="w-full py-14 sm:flex sm:justify-evenly">
      <div class="w-full p-4 flex justify-center items-center">
        <div class="w-40 p-2 flex justify-center items-center gap-4 border border-primary bg-primary rounded-md"
             :class="$store.getters.turn.id === Player.PLAYER_1 ? 'shadow-md shadow-green' : 'shadow-none opacity-60'">
          <span class="text-sm text-light-blue font-bold">JOGADOR 1</span>

          <span class="w-6 h-6 block rounded-full bg-orange"></span>
        </div>
      </div>

      <div class="w-full flex justify-center">
        <v-board @position="setPosition($event)"/>
      </div>

      <div class="w-full p-4 flex justify-center items-center">
        <div class="w-40 p-2 flex justify-center items-center gap-4 border border-primary bg-primary rounded-md"
             :class="$store.getters.turn.id === Player.PLAYER_1 ? 'shadow-none opacity-60' : 'shadow-md shadow-green'">
          <span class="text-sm text-light-blue font-bold">JOGADOR 2</span>

          <span class="w-6 h-6 block rounded-full bg-black"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Piece from "../../../enums/Piece";
import Player from "../../../enums/Player";
import Position from "../../../enums/Position";
import VBoard from "../../../components/VBoard.vue";
import VButton from "../../../components/VButton.vue";
import VLoading from "../../../components/VLoading.vue";

export default {
  name: "GameBoard",

  components: {
    VBoard,
    VButton,
    VLoading,
  },

  data() {
    return {
      Piece,
      Player,
      Position,
      activeLoading: false,
    };
  },

  computed: {
    playerTurn() {
      return this.$store.getters.turn.id === this.$route.params.playerId;
    }
  },

  methods: {
    /**
     * @param {Position} position
     */
    async setPosition(position) {
      this.activeLoading = true;

      if (this.playerTurn) {
        await this.$store.dispatch("setPosition", {
          params: {
            sessionId: this.$route.params.sessionId,
          },
          data: {
            piece: this.$store.getters.turn.piece.value,
            player: this.$store.getters.turn.value,
            position: position.value,
          },
        }).catch((error) => {
          alert("Não foi possível definir a posição: " + error);
          console.error(error);
        }).finally(() => {
          this.activeLoading = false;
        });
      } else {
        this.activeLoading = false;
        alert("Não é sua vez");
      }
    },

    async backToGameRoom() {
      this.activeLoading = true;

      await this.$store.dispatch("finishSession", this.$route.params.sessionId).then(() => {
        this.$router.push({
          name: "game_room",
          params: {
            sessionId: this.$route.params.sessionId,
            playerId: this.$route.params.playerId,
          },
        }).catch((error) => {
          alert("Não foi possível encerrar a sessão: " + error);
          console.error(error);
        }).finally(() => {
          this.activeLoading = false;
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.root-game-board {
  width: 100%;
  height: 100%;
}
</style>
