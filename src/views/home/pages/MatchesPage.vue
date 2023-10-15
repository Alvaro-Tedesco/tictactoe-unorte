<template>
  <section class="w-full h-full p-4">
    <div class="w-full p-8 flex justify-center">
      <label class="text-white text-3xl">Controle de Jogos</label>
    </div>

    <div class="w-full p-4 flex justify-center">
      <v-list :list="matches"/>
    </div>

    <div class="w-full pt-6 flex justify-center">
      <v-button classes="p-2 bg-primary rounded-md text-light-blue font-bold text-sm" @click="backToHomePage">
        Voltar
      </v-button>
    </div>
  </section>
</template>

<script>
import services from "../../../http";
import Result from "../../../enums/Result";
import VList from "../../../components/VList.vue";
import VButton from "../../../components/VButton.vue";

export default {
  name: "MatchesPage",

  components: {
    VList,
    VButton,
  },

  data() {
    return {
      matches: [],
      matches: [
        {
          winner: "",
          match: "",
        },
      ],
    };
  },

  created() {
    this.getAllSessions();
  },

  methods: {
    getAllSessions() {
      services.session.all({}).then((response) => {
        this.adjustSessionsResponseData(response.data);
      }).catch((error) => {
        console.error(error);
      });
    },

    adjustSessionsResponseData(sessionsResponseData) {
      if (sessionsResponseData.length === 0) {
        return;
      }

      this.matches = sessionsResponseData.map((session, index) => {
        const winnerTexts = {
          [Result.DRAW.value]: "Empate",
          [Result.BLACK_WIN.value]: "Jogador 2",
          [Result.ORANGE_WIN.value]: "Jogador 1",
          [Result.FINISHED.value]: "Sessão finalizada",
          [Result.NONE.value]: "Sessão em andamento",
        };

        return {
          winner: winnerTexts[session.result],
          match: index + 1,
        }
      });
    },

    backToHomePage() {
      this.$router.push({
        name: "home",
      });
    },
  },
}
</script>
