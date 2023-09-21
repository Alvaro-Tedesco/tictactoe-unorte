<template>
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
</template>

<script>
import HeaderPage from "../../../components/HeaderPage.vue";
import VQrcode from "@/components/VQrcode.vue";

export default {
  name: 'LoginPage',

  components: {
    VQrcode,
    HeaderPage,
  },

  computed: {
    qrcodeP1() {
      return 'http://localhost/jogo/sala/' + this.$route.params.sessionId + '/1';
    },

    qrcodeP2() {
      return 'http://localhost/jogo/sala/' + this.$route.params.sessionId + '/2';
    }
  },

  methods: {
    backButton() {
      this.$router.back();
    }
  }
}
</script>