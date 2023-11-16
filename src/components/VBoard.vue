<template>
  <section>
    <table class="bg-none">
      <caption class="hidden">Tabuleiro</caption>

      <template v-for="rows in positions">
        <tr class="h-20">
          <th id="tableHead" class="hidden bg-orange bg-black"/>
          <template v-for="position in rows">
            <td
                class="w-20 border border-light-blue"
                :class="$route.params.playerId === Player.SPECTATOR.id ? 'cursor-default' : 'hover:bg-extra-light-green'"
                @click="$route.params.playerId === Player.SPECTATOR.id ? null : setPosition(position)">
              <div class="w-20 h-20 p-2">
                <div class="w-full h-full" :class="colorBackground(position)"></div>
              </div>
            </td>
          </template>
        </tr>
      </template>
    </table>
  </section>
</template>

<script>
import Player from "../enums/Player";
import Position from "../enums/Position";
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
      Position,
      positions: [
        [Position.A1, Position.A2, Position.A3],
        [Position.B1, Position.B2, Position.B3],
        [Position.C1, Position.C2, Position.C3],
      ]
    };
  },

  computed: {
    ...mapGetters(["board"]),

    /**
     * @returns {function(Position): string}
     */
    colorBackground() {
      return (position) => {
        return `bg-${this.board.positions[position.value].value.toLowerCase()}`;
      };
    },
  },

  methods: {
    /**
     * @param {Position} position
     */
    setPosition(position) {
      this.$emit("position", position);
    },
  },
}
</script>
