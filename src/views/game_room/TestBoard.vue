<template>
  <section class="root-test-board">
    <v-board @moviment="makeMoviment($event)"/>
  </section>
</template>

<script>
import VBoard from "@/components/VBoard.vue";

export default {
  name: "TestBoard",

  components: {
    VBoard,
  },

  methods: {
    /**
     * @param {string} moviment
     */
    makeMoviment(moviment) {
      console.log('movimento no:', moviment)
    },
  },
}
</script>

<style lang="scss" scoped>
.root-test-board {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
