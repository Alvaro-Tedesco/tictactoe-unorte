<template>
  <section>
    <header-page :back-button="backButton()"/>

    <router-view/>
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
    }
  }
}
</script>