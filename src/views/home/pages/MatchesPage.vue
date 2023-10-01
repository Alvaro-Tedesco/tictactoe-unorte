<template>
  <section class="w-full h-full p-4">
    <div class="w-full p-8 flex justify-center">
      <label class="text-white text-3xl">Controle de Jogos</label>
    </div>

    <div class="w-full p-4 flex justify-center">
      <v-list :list="matches"/>
    </div>

    <div class="w-full pt-6 flex justify-center">
      <v-button classes="p-2 bg-primary rounded-md text-sm" @click="backToHomePage">Voltar</v-button>
    </div>
  </section>
</template>

<script>
import VList from "../../../components/VList.vue";
import VButton from "../../../components/VButton.vue";

export default {
  name: "MatchesPage",

  components: {
    VButton,
    VList,
  },

  data() {
    return {
      matches: [],
    };
  },

  methods: {
    backToHomePage() {
      this.$router.push({
        name: "home",
      });
    },
  },
}
</script>
