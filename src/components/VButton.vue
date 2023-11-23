<template>
  <button
      class="p-2 bg-light-blue rounded-md text-white font-bold"
      :class="classes"
      @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VButton",

  emits: ["click"],

  props: {
    classes: {
      type: String,
      default: "",
    }
  },
}
</script>
