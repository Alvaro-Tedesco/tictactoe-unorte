<template>
  <section class="root-v-button">
    <button :class="classes" @click="$emit('click')">{{text}}</button>
  </section>
</template>

<script>
export default {
  name: "VButton",

  components: {},

  props: {
    text: { type: String, default: "" },
    classes: { type: String, default: "" },
  },

  data() {
    return {}
  },

  created() {
  },

  computed: {},

  watch: {},

  methods: {},
}
</script>
