<template>
  <section>
    <template v-if="$store.getters.result !== Result.NONE">
      <result-dialog :result="$store.getters.result"/>
    </template>

    <main class="flex justify-around">
      <template v-for="(player) in players">
        <section class="py-12 gap-5 flex flex-col">
          <div class="flex justify-center flex-col bg-white py-4 rounded-2xl">
            <div class="flex justify-center items-center gap-4">
              <span class="text-sm font-bold">{{ player.name }}</span>

              <span class="w-6 h-6 block rounded-full" :class="'bg-'+ player.piece.value.toLowerCase()"></span>
            </div>

            <span class="font-bold p-7">LER O QRCODE PARA ENTRAR NA PARTIDA</span>

            <v-qrcode :value="qrcode(player.id)"/>
          </div>
        </section>
      </template>
    </main>
  </section>
</template>

<script>
import Result from "../../../enums/Result";
import VQrcode from "../../../components/VQrcode.vue";
import ResultDialog from "./components/ResultDialog.vue";
import HeaderPage from "../../../components/HeaderPage.vue";
import Player from "../../../enums/Player";

export default {
  name: "LoginPage",

  components: {
    VQrcode,
    HeaderPage,
    ResultDialog,
  },

  data() {
    return {
      Result,
      players: [
        Player.PLAYER_1,
        Player.PLAYER_2,
      ],
    };
  },

  computed: {
    qrcode() {
      return (id) => {
        return "http://192.168.1.50/jogo/sala/" + this.$route.params.sessionId + "/" + id;
      }
    },
  },

  methods: {
    backButton() {
      this.$router.back();
    },
  }
}
</script>
