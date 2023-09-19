<template>
  <section class="root-game-board">
    <div class="w-full pt-4 px-4 flex justify-between">
      <div class="p-4 border border-primary bg-primary rounded-md" :class="true ? 'shadow-md shadow-green' : 'shadow-none'">
        <span>NOME DO JOGADOR 1</span>
      </div>

      <div class="p-4 border border-primary bg-primary rounded-md" :class="true ? 'shadow-md shadow-green' : 'shadow-none'">
        <span>NOME DO JOGADOR 2</span>
      </div>
    </div>


  </section>
</template>

<script>
export default {
  name: "GameBoard",
}
</script>

<style lang="scss" scoped>
.root-game-board {
  width: 100%;
  height: 100%;
}
</style>
