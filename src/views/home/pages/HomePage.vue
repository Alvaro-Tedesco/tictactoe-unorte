<template>
  <section>
    <header-page/>

    <main class="flex justify-center">
      <section>
      </section>

      <section>
        <div class="flex flex-col gap-10">
          <div>
            <div class="flex justify-center">
              <span>Robotica</span>
            </div>
            <div class="flex justify-center">
              <span>Colaborativa</span>
            </div>
          </div>
          <div class="flex justify-center">
            <h1 class="p-3 bg-primary rounded-md text-5xl w-fit">Jogo da Velha</h1>
          </div>
          <div class="flex justify-center">
            <v-button>Jogar</v-button>
          </div>
          <div class="flex justify-center">
            <v-button>Partidas</v-button>
          </div>
        </div>
      </section>

      <section>
      </section>
    </main>
  </section>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import VButton from "@/components/VButton.vue";

export default {
  name: "HomePage",

  components: {
    VButton,
    HeaderPage,
  },
}
</script>
