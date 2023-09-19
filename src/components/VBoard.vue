<template>
  <section class="root-v-board">
    <table>
      <caption class="hidden">Tabuleiro</caption>
      <tr class="h-20 bg-primary">
        <th id="" class="hidden"></th>
        <td class="w-20 border-l border-t border-b rounded-tl-md hover:bg-extra-light-green" @click="$emit('moviment', 'firstSquare')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_o.svg" alt="Ícone O">
          </div>
        </td>

        <td class="w-20 border-l border-t border-b border-r hover:bg-extra-light-green" @click="$emit('moviment', 'secondSquare')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_o.svg" alt="Ícone O">
          </div>
        </td>

        <td class="w-20 border-t border-b border-r rounded-tr-md hover:bg-extra-light-green" @click="$emit('moviment', 'thirdSquare')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_o.svg" alt="Ícone O">
          </div>
        </td>
      </tr>

      <tr class="h-20 bg-primary">
        <td class="w-20 border-l border-b hover:bg-extra-light-green" @click="$emit('moviment', 'fourSquare')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_x.svg" alt="Ícone X">
          </div>
        </td>

        <td class="w-20 border-l border-b border-r hover:bg-extra-light-green" @click="$emit('moviment', 'fiveSquare')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_x.svg" alt="Ícone X">
          </div>
        </td>

        <td class="w-20 border-b border-r hover:bg-extra-light-green" @click="$emit('moviment', 'sixSquare')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_x.svg" alt="Ícone X">
          </div>
        </td>
      </tr>

      <tr class="h-20 bg-primary">
        <td class="w-20 border-l border-b border-r rounded-bl-md hover:bg-extra-light-green" @click="$emit('moviment', 'sevenSquare')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_o.svg" alt="Ícone O">
          </div>
        </td>

        <td class="w-20 border-b border-r hover:bg-extra-light-green" @click="$emit('moviment', 'eightSquare')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_o.svg" alt="Ícone O">
          </div>
        </td>

        <td class="w-20 border-b border-r rounded-br-md hover:bg-extra-light-green" @click="$emit('moviment', 'nineSquare')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_o.svg" alt="Ícone O">
          </div>
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  name: "VBoard",
}
</script>

<style lang="scss" scoped>
.root-v-board {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
