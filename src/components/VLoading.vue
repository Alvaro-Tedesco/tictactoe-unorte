<template>
  <section class="relative z-10">
    <div class="w-full h-full fixed inset-0 bg-primary opacity-50"></div>

    <div class="w-full h-full p-4 fixed inset-0 z-10">
      <div class="h-full flex justify-center items-center">
        <div class="flex justify-center items-center">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-red"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VLoading",
}
</script>
