<template>
  <section class="w-full h-full">
    <template v-if="activeLoading">
      <v-loading/>
    </template>

    <div class="w-full py-14 sm:flex sm:justify-evenly">
      <div class="w-full p-4 flex justify-center items-center">
        <div class="w-40 p-2 flex justify-center items-center gap-4 border border-primary bg-primary rounded-md"
             :class="getShadow(Player.PLAYER_1.id)">
          <span class="text-sm text-light-blue font-bold">JOGADOR 1</span>

          <span class="w-6 h-6 block rounded-full bg-orange"></span>
        </div>
      </div>

      <div class="w-full flex justify-center">
        <v-board @position="setPosition($event)"/>
      </div>

      <div class="w-full p-4 flex justify-center items-center">
        <div class="w-40 p-2 flex justify-center items-center gap-4 border border-primary bg-primary rounded-md"
             :class="getShadow(Player.PLAYER_2.id)">
          <span class="text-sm text-light-blue font-bold">JOGADOR 2</span>

          <span class="w-6 h-6 block rounded-full bg-black"></span>
        </div>
      </div>
    </div>

    <result-dialog :result="$store.getters.result" :player-id="$route.params.playerId"/>
  </section>
</template>

<script>
import Piece from "../../../enums/Piece";
import Player from "../../../enums/Player";
import Position from "../../../enums/Position";
import Result from "../../../enums/Result";
import Session from "../../../models/Session";
import ResultDialog from "../../../components/ResultDialog.vue";
import VBoard from "../../../components/VBoard.vue";
import VButton from "../../../components/VButton.vue";
import VLoading from "../../../components/VLoading.vue";

export default {
  name: "GameBoard",

  components: {
    ResultDialog,
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
      control: 0,
      interval: null,
      session: null,
    };
  },

  created() {
    if (this.$route.params.replay && this.$store.getters.result !== Result.NONE) {
      this.session = this.$store.getters.session.clone();
      this.$store.dispatch("setSession", null);

      setTimeout(() => {
        const session = Session.nextMove(this.session, this.session.history[0]);

        this.$store.dispatch("setSession", session);
      }, 2000);

      this.interval = setInterval(() => {
        const session = Session.nextMove(this.session, this.session.history[this.control++]);

        this.$store.dispatch("setSession", session);
        if (session.result !== Result.NONE) {
          clearInterval(this.interval);
        }
      }, 2000);
    }
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  computed: {
    playerTurn() {
      return this.$store.getters.turn.id === this.$route.params.playerId;
    },

    getShadow() {
      return (id) => {
        if (this.$store.getters.turn.id === id) {
          return 'shadow-md shadow-green';
        } else {
          return 'shadow-none opacity-60';
        }
      }
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
          alert("Não foi possível definir a posição: " + (error?.response?.data?.message ?? "Erro interno"));
          console.error(error);
        }).finally(() => {
          this.activeLoading = false;
        });
      } else {
        this.activeLoading = false;
        alert("Não é sua vez");
      }
    },
  },
};
</script>
