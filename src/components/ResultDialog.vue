<template>
  <section class="relative z-10" v-if="result.value !== Result.NONE.value && result.value !== Result.MOVE.value">
    <div class="w-full fixed inset-0 bg-primary opacity-50"></div>

    <div class="w-full h-full p-4 fixed inset-0 z-20 flex justify-center items-center">
      <div
          class="flex flex-col justify-center items-center rounded-md text-white text-center p-3 text-4xl"
          :class="getBackgroundColorComputed"
          :style="`width: ${width}px; height: ${height}px;`">
        <template v-if="result.value === Result.DRAW.value">
          <h1 class="text-black">EMPATE!</h1>
        </template>

        <template v-else-if="result.value === Result.ERROR.value">
          <h1>PARTIDA ENCERRADA COM ERRO NO ROBÔ!</h1>
        </template>

        <template v-else-if="$store.getters.lastPlayer">
          <h1>
            <template v-if="$store.getters.lastPlayer.id === $route.params.playerId">
              Parabéns! <br> Você ganhou.
            </template>

            <template v-else-if="$store.getters.lastPlayer.next().id === $route.params.playerId">
              Você perdeu.
            </template>

            <template v-else>
              JOGADOR {{ result.value === Result.ORANGE_WIN.value ? "1" : "2" }} GANHOU!
            </template>
          </h1>
        </template>

        <v-button @click="onClick">
          {{ buttonTextComputed }}
        </v-button>
      </div>
    </div>
  </section>
</template>

<script>
import Result from "../enums/Result";
import Player from "../enums/Player";
import VButton from "./VButton.vue";

export default {
  name: "ResultDialog",

  components: {
    VButton,
  },

  props: {
    playerId: {type: String, required: true},
    result: {type: Result, required: true},
    height: {type: [Number, String], default: 300},
    width: {type: [Number, String], default: 300},
  },

  data() {
    return {
      Result,
      Player,
    };
  },

  computed: {
    buttonTextComputed() {
      if (this.playerId === Player.SPECTATOR.id) {
        return "Fechar";
      }

      return "Voltar";
    },

    getBackgroundColorComputed() {
      if (this.result.value === Result.DRAW.value) {
        return "bg-primary";
      }

      return "bg-light-blue";
    },
  },

  methods: {
    onClick() {
      if (this.playerId === Player.SPECTATOR.id) {
        this.$store.dispatch("finishSession", this.$route.params.sessionId);

        this.$router.push({name: "home"});
      } else {
        window.close();
      }
    },
  },
};
</script>
