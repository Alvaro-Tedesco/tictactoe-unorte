<template>
  <section>
    <template v-if="$store.getters.result !== Result.NONE">
      <result-dialog :result="$store.getters.result"/>
    </template>

    <main class="flex justify-around">
      <section class="py-12 gap-5 flex flex-col">
        <div class="flex justify-center">
          <span>JOGADOR 1</span>
        </div>

        <div class="flex justify-center">
          <span>LER O QRCODE PARA ENTRAR NA PARTIDA</span>
        </div>

        <div class="flex justify-center bg-blue p-2 rounded-2xl">
          <v-qrcode :value="qrcodeP1"/>
        </div>
      </section>

      <div class="border border-black mt-5"></div>

      <section class="py-12 gap-5 flex flex-col">
        <div class="flex justify-center">
          <span>JOGADOR 2</span>
        </div>

        <div class="flex justify-center">
          <span>LER O QRCODE PARA ENTRAR NA PARTIDA</span>
        </div>

        <div class="flex justify-center bg-red p-2 rounded-2xl">
          <v-qrcode :value="qrcodeP2"/>
        </div>
      </section>
    </main>
  </section>
</template>

<script>
import HeaderPage from "../../../components/HeaderPage.vue";
import VQrcode from "../../../components/VQrcode.vue";
import ResultDialog from "./components/ResultDialog.vue";
import Result from "../../../enums/Result";

export default {
  name: 'LoginPage',

  components: {
    ResultDialog,
    VQrcode,
    HeaderPage,
  },

  data() {
    return {
      Result,
    };
  },

  computed: {
    qrcodeP1() {
      return 'http://192.168.0.135:8080/jogo/sala/' + this.$route.params.sessionId + '/1';
    },

    qrcodeP2() {
      return 'http://192.168.0.135:8080/jogo/sala/' + this.$route.params.sessionId + '/2';
    }
  },

  methods: {
    backButton() {
      this.$router.back();
    }
  }
}
</script>
