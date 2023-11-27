<template>
  <section>
    <main class="flex justify-around">
      <template v-for="(player) in players">
        <section class="py-12 gap-5 flex flex-col">
          <div class="flex justify-center flex-col bg-white py-4 rounded-2xl">
            <div class="flex justify-center items-center gap-4">
              <span class="text-sm font-bold">{{ player.name }}</span>

              <span class="w-6 h-6 block rounded-full" :class="'bg-'+ player.piece.value.toLowerCase()"></span>
            </div>

            <span class="font-bold p-7">LER O QRCODE PARA ENTRAR NA PARTIDA</span>

            <div class="flex justify-center items-center h-[200px]">
              <template v-if="$store.getters.session.players.includes(player.value)">
                <check-bold-icon size="120" fill-color="#005500"/>
              </template>
              <template v-else>
                <v-qrcode :value="qrcode(player.id)"/>
              </template>
            </div>
          </div>
        </section>
      </template>
    </main>

    <footer class="w-full flex justify-center items-center">
      <v-button classes="bg-primary text-light-blue" @click="goToGame">
        Assistir partida
      </v-button>
    </footer>

    <result-dialog :result="$store.getters.result" :player-id="Player.SPECTATOR.id"/>
  </section>
</template>

<script>
import Player from "../../../enums/Player";
import Result from "../../../enums/Result";
import HeaderPage from "../../../components/HeaderPage.vue";
import ResultDialog from "../../../components/ResultDialog.vue";
import VQrcode from "../../../components/VQrcode.vue";
import VButton from "../../../components/VButton.vue";
import CheckBoldIcon from "vue-material-design-icons/CheckBold.vue";

export default {
  name: "LoginPage",

  components: {
    VButton,
    VQrcode,
    HeaderPage,
    ResultDialog,
    CheckBoldIcon,
  },

  data() {
    return {
      Result,
      Player,
      players: [
        Player.PLAYER_1,
        Player.PLAYER_2,
      ],
    };
  },

  created() {
    if (this.$store.getters.result?.value === Result.NONE.value) {
      this.interval = setInterval(() => {
        if (this.$store.getters.result?.value !== Result.NONE.value) {
          clearInterval(this.interval);
        }
        this.$store.dispatch('getSession', this.$route.params.sessionId);
      }, 200);
    }
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  computed: {
    qrcode() {
      return (id) => {
        return "http://10.0.0.101/jogo/sala/" + this.$route.params.sessionId + "/" + id;
      }
    },
  },

  watch: {
    '$store.getters.session.players': {
      deep: true,
      immediate: true,
      handler(vl) {
        if (vl?.length === 2) {
          setTimeout(() => {
            this.goToGame();
          }, 3000);
        }
      },
    },
  },

  methods: {
    backButton() {
      this.$router.back();
    },

    goToGame() {
      this.$router.push({
        name: "game_board",
        params: {
          sessionId: this.$route.params.sessionId,
          playerId: Player.SPECTATOR.id,
        }
      });
    },
  }
}
</script>
