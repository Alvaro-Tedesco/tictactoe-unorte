<template>
  <section>
    <table>
      <caption class="hidden">Tabuleiro</caption>
      <tr class="h-20 bg-primary" :class="$route.params.playerId === '1' ? 'border' : 'border border-green'">
        <th id="" class="hidden"></th>
        <td class="w-20 hover:bg-extra-light-green"
            :class="movementDone.A1 ? `bg-${movementDone.A1}` : ''" @click="$emit('move', 'A1')">
          <div :class="$route.params.playerId === '1' ? 'bg-orange' : 'bg-black'"></div>
        </td>

        <td class="w-20 hover:bg-extra-light-green"
            :class="`${movementDone.B1 ? `bg-${movementDone.B1}` : ''} ${$route.params.playerId === '1' ? 'border' : 'border border-green'}`" @click="$emit('move', 'B1')">
          <div :class="$route.params.playerId === '1' ? 'bg-orange' : 'bg-black'"></div>
        </td>

        <td class="w-20 hover:bg-extra-light-green"
            :class="movementDone.C1 ? `bg-${movementDone.C1}` : ''" @click="$emit('move', 'C1')">
          <div :class="$route.params.playerId === '1' ? 'bg-orange' : 'bg-black'"></div>
        </td>
      </tr>

      <tr class="h-20 bg-primary" :class="$route.params.playerId === '1' ? 'border' : 'border border-green'">
        <td class="w-20 hover:bg-extra-light-green"
            :class="movementDone.A2 ? `bg-${movementDone.A2}` : ''" @click="$emit('move', 'A2')">
          <div :class="$route.params.playerId === '1' ? 'bg-orange' : 'bg-black'"></div>
        </td>

        <td class="w-20 hover:bg-extra-light-green"
            :class="`${movementDone.B2 ? `bg-${movementDone.B2}` : ''} ${$route.params.playerId === '1' ? 'border' : 'border border-green'}`" @click="$emit('move', 'B2')">
          <div :class="$route.params.playerId === '1' ? 'bg-orange' : 'bg-black'"></div>
        </td>

        <td class="w-20 hover:bg-extra-light-green"
            :class="movementDone.C2 ? `bg-${movementDone.C2}` : ''" @click="$emit('move', 'C2')">
          <div :class="$route.params.playerId === '1' ? 'bg-orange' : 'bg-black'"></div>
        </td>
      </tr>

      <tr class="h-20 bg-primary" :class="$route.params.playerId === '1' ? 'border' : 'border border-green'">
        <td class="w-20 hover:bg-extra-light-green"
            :class="movementDone.A3 ? `bg-${movementDone.A3}` : ''" @click="$emit('move', 'A3')">
          <div :class="$route.params.playerId === '1' ? 'bg-orange' : 'bg-black'"></div>
        </td>

        <td class="w-20 hover:bg-extra-light-green"
            :class="`${movementDone.B3 ? `bg-${movementDone.B3}` : ''} ${$route.params.playerId === '1' ? 'border' : 'border border-green'}`" @click="$emit('move', 'B3')">
          <div :class="$route.params.playerId === '1' ? 'bg-orange' : 'bg-black'"></div>
        </td>

        <td class="w-20 hover:bg-extra-light-green"
            :class="movementDone.C3 ? `bg-${movementDone.C3}` : ''" @click="$emit('move', 'C3')">
          <div :class="$route.params.playerId === '1' ? 'bg-orange' : 'bg-black'"></div>
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  name: "VBoard",

  props: {
    movementDone: {
      type: Object,
      default: () => {
      },
    },
  },
}
</script>
