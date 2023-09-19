<template>
  <section class="flex justify-between p-1 bg-primary">
    <img :src="logoLER" alt="Logo LER" class="w-[50px]"/>

    <img :src="logoUNORTE" alt="Logo UNORTE" class="w-[50px]"/>
  </section>
</template>

<script>
export default {
  name: "HeaderPage",

  data() {
    return {
      logoLER: "https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg",
      logoUNORTE: "https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg",
    }
  },
}
</script>
