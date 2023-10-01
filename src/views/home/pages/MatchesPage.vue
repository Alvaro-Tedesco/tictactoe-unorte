<template>
  <div class="flex justify-center p-3">
    <v-list :list="data"/>
  </div>
  <section class="w-full h-full p-4">
    <div class="w-full p-8 flex justify-center">
      <label class="text-white text-3xl">Controle de Jogos</label>
    </div>

    <div class="w-full p-4 flex justify-center">
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

  computed: {
    data() {
      return [
        {
          winner: 'Jogador 1',
          match: 0,
        },
        {
          winner: 'Jogador 2',
          match: 1,
        },
        {
          winner: 'Jogador 23',
          match: 1,
        },
        {
          winner: 'Jogador 25',
          match: 1,
        },
        {
          winner: 'Jogador 452',
          match: 1,
        },
        {
          winner: 'Jogador 25',
          match: 1,
        },
        {
          winner: 'Jogador 27',
          match: 1,
        },
      ];

  methods: {
    backToHomePage() {
      this.$router.push({
        name: "home",
      });
    },
  },
}
</script>
