<template>
  <section class="relative z-10">
    <div class="w-full h-full fixed inset-0 bg-primary opacity-50"></div>

    <div class="w-full h-full p-4 fixed inset-0 z-10 flex justify-center items-center">
      <template v-if="result === Result.ORANGE_WIN">
        <div>
          <h1 class="p-3 bg-red-500 rounded-md text-5xl w-fit">Player 1 Ganhou!</h1>
        </div>
      </template>
      <template v-else-if="result === Result.BLACK_WIN">
        <div>
          <h1 class="p-3 bg-blue-500 rounded-md text-5xl w-fit">Player 2 Ganhou!</h1>
        </div>
      </template>
      <template v-else-if="result === Result.DRAW">
        <div>
          <h1 class="p-3 bg-yellow-500 rounded-md text-5xl w-fit">Empate!</h1>
        </div>
      </template>
    </div>
  </section>
</template>
<script>
import Result from "../../../../enums/Result";

export default {
  name: "ResultDialog",

  props: {
    result: {type: Result, required: true},
  },

  data() {
    return {
      Result,
    };
  },
}
</script>
