<template>
  <section class="root-game-board">
    <div class="w-full pt-4 px-4 flex justify-between gap-20 max-[300px]:gap-12">
      <div class="p-2 border border-primary bg-primary rounded-md"
           :class="true ? 'shadow-md shadow-green' : 'shadow-none'">
        <span class="text-sm">NOME DO JOGADOR 1</span>
      </div>

      <div class="p-2 border border-primary bg-primary rounded-md"
           :class="true ? 'shadow-md shadow-green' : 'shadow-none'">
        <span class="text-sm">NOME DO JOGADOR 2</span>
      </div>
    </div>

    <div class="w-full mt-20 flex justify-center">
      <v-board :movementDone="movementDone" @move="makeMove($event)"/>
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

export default {
  name: "GameBoard",

  components: {
    VBoard,
    VButton,
  },

  data() {
    return {
      movementDone: {
        A1: null,
        A2: null,
        A3: null,
        B1: null,
        B2: null,
        B3: null,
        C1: null,
        C2: null,
        C3: null,
      },
    };
  },

  methods: {
    /**
     * @param {string} position
     */
    makeMove(position) {
      const piece = this.$route.params.playerId === "1" ? "orange" : "black";

      services.gameRoom.move({
        params: {
          sessionId: this.$route.params.sessionId,
        },
        data: {
          piece: piece.toUpperCase(),
          position,
          player: this.$route.params.playerId,
        },
      }).then((response) => {
        console.log(response);
        this.movementDone[position] = piece;
      });

      this.movementDone[position] = piece;
    },

    backToGameRoom() {
      services.gameRoom.finish().then((response) => {
        this.$router.push({name: "game_room", params: {room_id: 1, player_id: 1,},});
      })
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
