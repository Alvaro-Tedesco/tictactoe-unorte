<template>
  <table class="rounded-2xl bg-primary w-[500px]" aria-describedby="">
    <tr class="border-b">
      <template v-for="(column, key, index) in getColumnDefs">
        <th :style="headerStyle(index)">
          <span>{{ column.label }}</span>
        </th>
      </template>
    </tr>

    <template v-for="item in record">
      <tr>
        <template v-for="(value, key, index) in getColumnDefs">
          <td
              class="text-center"
              :class="index < Object.keys(getColumnDefs).length-1 ? 'border-r h-[30px]' : ''"
              style="text-align: -webkit-center;"
          >
            <template v-if="key === 'actions' && item.winner">
              <template v-for="action in value.actions">
                <template v-if="action === 'view'">
                  <eye-icon class="w-6 h-6 cursor-pointer" @click="$emit('view', item)"/>
                </template>
              </template>
            </template>

            <template v-else>
              <span>{{ item[key] }}</span>
            </template>
          </td>
        </template>
      </tr>
    </template>

    <tr class="border-t">
      <td class="text-end pr-4" :colspan="Object.keys(getColumnDefs).length">
        <span>
          Página {{ getActualPage() }} de {{ getPageNumber() }}
          <span class="cursor-pointer" @click="setActualPage(-1)"> &lt;- </span>
          <span class="cursor-pointer" @click="setActualPage(1)"> -&gt; </span>
        </span>
      </td>
    </tr>
  </table>
</template>

<script>
import EyeIcon from 'vue-material-design-icons/Eye.vue';

export default {
  name: "VList",

  emits: ["view"],

  components: {
    EyeIcon
  },

  props: {
    list: {type: Array, default: () => []},
    columnDefs: {type: Object, default: () => ({})},
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
      return (field) => field < Object.keys(this.getColumnDefs).length-1 ? {
        "border-right-width": "1px",
        "width": 100 / Object.keys(this.getColumnDefs).length + "%",
      } : {};
    },

    getColumnDefs() {
      return this.columnDefs;
    },
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
