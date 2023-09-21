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
      <v-board @move="makeMove($event)"/>
    </div>

    <div class="w-full mt-12 pb-4 flex justify-center items-center">
      <v-button @click="backToGameRoom">SAIR</v-button>
    </div>
  </section>
</template>

<script>
import VBoard from "@/components/VBoard.vue";
import VButton from "@/components/VButton.vue";

export default {
  name: "GameBoard",

  components: {
    VBoard,
    VButton,
  },

  methods: {
    /**
     * @param {string} position
     */
    makeMove(position) {
      console.log('movimento no:', position);
      console.log('Implementar requisição de movimento pro back-end');
    },

    backToGameRoom() {
      console.log('Implementar requisição de cancelamento da sessão pro back-end');
      this.$router.push({name: "game_room", params: {room_id: 1, player_id: 1,},});
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
