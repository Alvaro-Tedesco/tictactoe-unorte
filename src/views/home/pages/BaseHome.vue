<template>
  <section class="root-base-home">
    <header-page :back-button="backButton()"/>

    <main>
      <router-view/>
    </main>
  </section>
</template>

<script>
import HeaderPage from "../../../components/HeaderPage.vue";

export default {
  name: "BaseHome",

  components: {
    HeaderPage,
  },

  methods: {
    backButton() {
      if (this.$route.name === "home") {
        return null;
      }

      return () => this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.root-base-home {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #F25835, #000000 130%);

  main {
    width: 100%;
    height: calc(100vh - 83px);
  }
}
</style>
