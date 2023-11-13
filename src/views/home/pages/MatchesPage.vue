<template>
  <section class="w-full h-full p-4">
    <template v-if="activeLoading">
      <v-loading/>
    </template>

    <div class="w-full p-8 flex justify-center">
      <label class="text-white text-3xl">Controle de Jogos</label>
    </div>

    <div class="w-full p-4 flex justify-center">
      <v-list :list="matches" :column-defs="columnDefs" @view="goToGame"/>
    </div>

    <div class="w-full pt-6 flex justify-center">
      <v-button classes="p-2 bg-primary rounded-md text-light-blue font-bold text-sm" @click="backToHomePage">
        Voltar
      </v-button>
    </div>
  </section>
</template>

<script>
import Result from "../../../enums/Result";
import VLoading from "../../../components/VLoading.vue";
import VList from "../../../components/VList.vue";
import VButton from "../../../components/VButton.vue";
import Player from "../../../enums/Player";

export default {
  name: "MatchesPage",

  components: {
    VList,
    VButton,
    VLoading,
  },

  data() {
    return {
      Result,
      matches: [
        {
          winner: "",
          match: "",
        },
      ],
      columnDefs: {
        winner: {
          label: "Resultado",
        },
        match: {
          label: "Partida",
        },
        actions: {
          label: "Ações",
          actions: [
            "view",
          ]
        }
      },
      activeLoading: false,
    };
  },

  created() {
    this.getAllSessions();
  },

  methods: {
    async getAllSessions() {
      this.activeLoading = true;

      await this.$store.dispatch("getAllSessions").then((response) => {
        this.adjustSessionsResponseData(response.data);
      }).catch((error) => {
        alert('não foi possível obter as partidas: ' + error);
        console.error(error);
      }).finally(() => {
        this.activeLoading = false;
      });
    },

    adjustSessionsResponseData(sessionsResponseData) {
      if (sessionsResponseData.length === 0) {
        return;
      }

      this.matches = sessionsResponseData.map((session, index) => {
        return {
          winner: Result.codeToDescription(session.result),
          match: index + 1,
          session,
        }
      });
    },

    backToHomePage() {
      this.$router.push({
        name: "home",
      });
    },

    goToGame({session}) {
      this.$store.dispatch("setSession", session);

      this.$router.push({
        name: "game_board",
        params: {
          sessionId: session.id,
          playerId: Player.SPECTATOR.id,
          replay: true,
        }
      });
    }
  },
}
</script>
