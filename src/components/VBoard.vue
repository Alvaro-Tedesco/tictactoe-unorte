<template>
  <section>
    <table class="bg-none">
      <caption class="hidden">Tabuleiro</caption>
      <tr class="h-20">
        <th id="" class="hidden"></th>
        <td class="w-20 hover:bg-extra-light-green border" :class="`${colorBackground('A1')} ${borderColor}`"
            @click="setPosition('A1')">
        </td>

        <td class="w-20 hover:bg-extra-light-green border" :class="`${colorBackground('B1')} ${borderColor}`"
            @click="setPosition('B1')">
        </td>

        <td class="w-20 hover:bg-extra-light-green border" :class="`${colorBackground('C1')} ${borderColor}`"
            @click="setPosition('C1')">
        </td>
      </tr>

      <tr class="h-20">
        <td class="w-20 hover:bg-extra-light-green border" :class="`${colorBackground('A2')} ${borderColor}`"
            @click="setPosition('A2')">
        </td>

        <td class="w-20 hover:bg-extra-light-green border" :class="`${colorBackground('B2')} ${borderColor}`"
            @click="setPosition('B2')">
        </td>

        <td class="w-20 hover:bg-extra-light-green border" :class="`${colorBackground('C2')} ${borderColor}`"
            @click="setPosition('C2')">
        </td>
      </tr>

      <tr class="h-20">
        <td class="w-20 hover:bg-extra-light-green border" :class="`${colorBackground('A3')} ${borderColor}`"
            @click="setPosition('A3')">
        </td>

        <td class="w-20 hover:bg-extra-light-green border" :class="`${colorBackground('B3')} ${borderColor}`"
            @click="setPosition('B3')">
        </td>

        <td class="w-20 hover:bg-extra-light-green border" :class="`${colorBackground('C3')} ${borderColor}`"
            @click="setPosition('C3')">
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
import Player from "../enums/Player";
import {mapGetters} from "vuex";

export default {
  name: "VBoard",

  props: {
    isSecondPlayer: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      Player,
    };
  },

  computed: {
    ...mapGetters(["board"]),

    colorBackground() {
      return (position) => {
        return `bg-${this.board.positions[position].value.toLowerCase()}`;
      };
    },

    borderColor() {
      return this.isSecondPlayer ? "border-green" : "";
    },
  },

  methods: {
    setPosition(position) {
      this.$emit("position", position);
    },
  },
}
</script>
