<template>
  <button
      class="p-2 rounded-md font-bold"
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
      default: "bg-light-blue text-white",
    },
  },
};
</script>
