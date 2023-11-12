<template>
  <section class="relative z-10">
    <div class="w-full h-full fixed inset-0 bg-primary opacity-50"></div>

    <div class="w-full h-full p-4 fixed inset-0 z-20 flex justify-center items-center">
      <div
          class="flex justify-center items-center rounded-md text-white text-center"
          :class="getBackgroundColorComputed"
          :style="`width: ${width}px; height: ${height}px;`">
        <template v-if="result === Result.DRAW">
          <h1 class="p-3 bg-yellow-500 rounded-md text-black text-4xl">EMPATE!</h1>
        </template>

        <template v-else-if="result === Result.FINISHED">
          <h1 class="p-3 bg-red rounded-md text-4xl">PARTIDA ENCERRADA!</h1>
        </template>

        <template v-else>
          <h1 class="p-3 bg-red-500 rounded-md text-4xl">
            <template v-if="$store.getters.lastPlayer.id === $route.params.playerId">
              Parabéns! <br> Você ganhou.
            </template>

            <template v-else-if="$store.getters.lastPlayer.next().id === $route.params.playerId">
              VOCÊ PERDEU!
            </template>

            <template v-else>
              JOGADOR {{ result === Result.ORANGE_WIN ? "1" : "2" }} GANHOU!
            </template>
          </h1>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import Result from "../enums/Result";
import Player from "../enums/Player";

export default {
  name: "ResultDialog",

  props: {
    result: {type: Result, required: true},
    width: {type: [Number, String], default: 300},
    height: {type: [Number, String], default: 300},
  },

  data() {
    return {
      Result,
      Player,
    };
  },

  computed: {
    getBackgroundColorComputed() {
      if (this.result === Result.DRAW) {
        return "bg-primary";
      }

      return "bg-light-blue";
    },
  },
};
</script>
