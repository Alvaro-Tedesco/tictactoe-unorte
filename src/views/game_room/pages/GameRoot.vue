<template>
  <section class="root-game">
    <header-page/>

    <main>
      <router-view/>
    </main>
  </section>
</template>

<script>
import HeaderPage from "../../../components/HeaderPage.vue";

export default {
  name: "GameRoot",

  components: {
    HeaderPage,
  },

  data() {
    return {
      interval: null,
    }
  },

  mounted() {
    this.interval = setInterval(() => {
      this.$store.dispatch('getSession', this.$route.params.sessionId);
    }, 2000);
  },

  beforeDestroy() {
    clearInterval(this.interval);
  }
}
</script>

<style lang="scss" scoped>
.root-game {
  width: 100%;

  main {
    height: calc(100vh - 54px);
    width: 100%;
  }
}
</style>
