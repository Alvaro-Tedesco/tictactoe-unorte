<template>
  <section>
    <header-page/>

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
}
</script>