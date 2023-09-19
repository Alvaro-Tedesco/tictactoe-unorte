<template>
  <section class="root-game-room">
    <header-page/>

    <main>
      <div class="text-center">
        <v-button text="Jogar" classes="p-3 bg-primary rounded-md"
                  @click="redirectToGame"/>
      </div>
    </main>

  </section>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import VButton from "@/components/VButton.vue";

export default {
  name: "GameRoom",

  components: {
    VButton,
    HeaderPage,
  },

  methods: {
    redirectToGame() {
      console.log('redirecionar para jogo');
    },
  },
}
</script>

<style lang="scss" scoped>
.root-game-room {
  main {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 54px);
  }
}
</style>
