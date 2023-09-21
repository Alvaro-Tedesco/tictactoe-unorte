<template>
  <table class="rounded-2xl bg-primary w-[500px]" aria-describedby="">
    <template v-for="(item, index) in record">
      <template v-if="index === 0">
        <tr class="border-b">
          <template v-for="field in getFieldsNumber()">
            <th :style="headerStyle(field)">
              {{ translate(Object.keys(item)[field - 1]) }}
            </th>
          </template>
        </tr>
      </template>

      <template v-if="Object.keys(item).length > 1">
        <tr>
          <template v-for="field in getFieldsNumber()">
            <td :class="'text-center ' + (field < getFieldsNumber() ? 'border-r h-[30px]' : '')">
              {{ Object.values(item)[field - 1] }}
            </td>
          </template>
        </tr>
      </template>

      <template v-else>
        <tr>
          <template v-for="field in getFieldsNumber()">
            <td :class="field < getFieldsNumber() ? 'border-r h-[30px]' : ''"></td>
          </template>
        </tr>
      </template>
    </template>
    <tr class="border-t">
      <td class="text-end pr-4" :colspan="getFieldsNumber()">
        Página {{ getActualPage() }} de {{ getPageNumber() }}
        <span class="cursor-pointer" @click="setActualPage(-1)"> <- </span>
        <span class="cursor-pointer" @click="setActualPage(1)"> -> </span>
      </td>
    </tr>
  </table>
</template>

<script>

export default {
  name: "VList",

  props: {
    list: {type: Array, default: () => []},
  },

  data() {
    return {
      paginateMaxPerPage: 15,
      actualPage: 1,
    }
  },

  computed: {
    record() {
      const data = JSON.parse(JSON.stringify(this.list));
      let itemsPerPage = this.paginateMaxPerPage;
      let page = 1;

      for (let i = 0; i < data.length; i++) {
        if (itemsPerPage > data.length) {
          data.push({});
        }

        if (i === itemsPerPage) {
          itemsPerPage += this.paginateMaxPerPage;
          page += 1;
        }

        if (i < itemsPerPage) {
          data[i]._page = page;
        }
      }

      return data.filter((item) => item._page === this.actualPage);
    },

    headerStyle() {
      return (field) => field < this.getFieldsNumber() ? {
        'border-right-width': '1px',
        'width': 100 / this.getFieldsNumber() + '%',
      } : {};
    }
  },

  methods: {
    getActualPage() {
      return this.actualPage;
    },

    getPageNumber() {
      return Math.ceil(this.list.length / this.paginateMaxPerPage);
    },

    setActualPage(number) {
      const newActualPage = this.getActualPage() + number;

      if (newActualPage >= 1 && newActualPage <= this.getPageNumber()) {
        this.actualPage = newActualPage;
      }
    },

    getFieldsNumber() {
      return Object.keys(this.list[0]).length;
    },

    translate(text) {
      if (!text) {
        return '';
      }

      if (text === 'winner') {
        return 'vencedor';
      }

      if (text === 'match') {
        return 'partida';
      }
      return text;
    },
  },
}
</script>

<style scoped lang="scss">

</style>