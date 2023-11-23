<template>
  <section class="root-not-found-page w-full min-h-screen flex justify-center items-center">
    <div>
      <img
          width="300"
          height="300"
          class="m-auto rounded-full"
          alt="404 página não encontrada!"
          src="../../../assets/images/404-icon.jpeg">

      <h2 class="pt-4 text-white text-3xl font-bold">404 - PÁGINA NÃO ENCONTRADA</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style lang="scss" scoped>
.root-not-found-page {
  background-image: linear-gradient(to bottom, #F25835, #000000 130%);
}
</style>
