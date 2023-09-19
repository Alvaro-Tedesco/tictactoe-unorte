<template>
  <main class="flex justify-around">
    <section class="py-12">
      <div class="flex justify-center">
        <span>JOGADOR 1</span>
      </div>

      <div class="flex justify-center">
        <span>LER O QRCODE PARA ENTRAR NA PARTIDA</span>
      </div>

      <div class="flex justify-center bg-primary p-2 rounded-2xl">
        <v-qrcode :value="qrcodeValue"/>
      </div>
    </section>

    <div class="border border-black mt-5"></div>

    <section class="py-12">
      <div class="flex justify-center">
        <span>JOGADOR 2</span>
      </div>

      <div class="flex justify-center">
        <span>LER O QRCODE PARA ENTRAR NA PARTIDA</span>
      </div>

      <div class="flex justify-center bg-primary p-2 rounded-2xl">
        <v-qrcode :value="qrcodeValue"/>
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
    qrcodeValue() {
      return 'https://google.com.br';
    }
  },

  methods: {
    backButton() {
      this.$router.back();
    }
  }
}
</script>