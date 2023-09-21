<template>
  <section>
    <table>
      <caption class="hidden">Tabuleiro</caption>
      <tr class="h-20 border bg-primary">
        <th id="" class="hidden"></th>
        <td class="w-20 rounded-tl-md hover:bg-extra-light-green" @click="$emit('move', 'A1')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_o.svg" alt="Ícone O">
          </div>
        </td>

        <td class="w-20 border hover:bg-extra-light-green" @click="$emit('move', 'B1')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_o.svg" alt="Ícone O">
          </div>
        </td>

        <td class="w-20 rounded-tr-md hover:bg-extra-light-green" @click="$emit('move', 'C1')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_o.svg" alt="Ícone O">
          </div>
        </td>
      </tr>

      <tr class="h-20 border bg-primary">
        <td class="w-20 hover:bg-extra-light-green" @click="$emit('move', 'A2')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_x.svg" alt="Ícone X">
          </div>
        </td>

        <td class="w-20 border hover:bg-extra-light-green" @click="$emit('move', 'B2')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_x.svg" alt="Ícone X">
          </div>
        </td>

        <td class="w-20 hover:bg-extra-light-green" @click="$emit('move', 'C2')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_x.svg" alt="Ícone X">
          </div>
        </td>
      </tr>

      <tr class="h-20 border bg-primary">
        <td class="w-20 rounded-bl-md hover:bg-extra-light-green" @click="$emit('move', 'A3')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_o.svg" alt="Ícone O">
          </div>
        </td>

        <td class="w-20 border hover:bg-extra-light-green" @click="$emit('move', 'B3')">
          <div class="w-full flex justify-center items-center">
            <img src="../assets/icons/icon_o.svg" alt="Ícone O">
          </div>
        </td>

        <td class="w-20 rounded-br-md hover:bg-extra-light-green" @click="$emit('move', 'C3')">
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
