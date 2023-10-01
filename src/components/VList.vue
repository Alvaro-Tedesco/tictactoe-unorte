<template>
  <table class="rounded-2xl bg-primary w-[500px]" aria-describedby="">
    <template v-for="(item, index) in record">
      <template v-if="index === 0">
        <tr class="border-b">
          <template v-for="field in getFieldsNumber()">
            <th :style="headerStyle(field)">
              <span>{{ translate(Object.keys(item)[field - 1]) }}</span>
            </th>
          </template>
        </tr>
      </template>

      <template v-if="Object.keys(item).length > 1">
        <tr>
          <template v-for="field in getFieldsNumber()">
            <td :class="'text-center ' + (field < getFieldsNumber() ? 'border-r h-[30px]' : '')">
              <span>{{ Object.values(item)[field - 1] }}</span>
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
        <span>
          Página {{ getActualPage() }} de {{ getPageNumber() }}
          <span class="cursor-pointer" @click="setActualPage(-1)"> <- </span>
          <span class="cursor-pointer" @click="setActualPage(1)"> -> </span>
        </span>
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
      paginateMaxPerPage: 8,
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
        "border-right-width": "1px",
        "width": 100 / this.getFieldsNumber() + "%",
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
        return "";
      }

      if (text === "winner") {
        return "Vencedores";
      }

      if (text === "match") {
        return "Partidas";
      }

      return text;
    },
  },
}
</script>

<style lang="scss" scoped>
th {
  font-weight: normal;
  font-size: 20px;
}

span {
  color: darkslateblue;
}
</style>
