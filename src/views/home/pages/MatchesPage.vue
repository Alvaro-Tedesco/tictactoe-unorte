<template>
  <div class="flex justify-center p-3">
    <v-list :list="data"/>
  </div>
</template>
<script>
import VList from "@/components/VList.vue";

export default {
  name: "MatchesPage",

  components: {
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
    },
  },
}
</script>
