<template>
  <section>
    <button :class="classes" @click="$emit('click')">
      <slot></slot>
    </button>
  </section>
</template>

<script>
export default {
  name: "VButton",

  emits: ["click"],

  props: {
    classes: {
      type: String,
      default: "p-3 bg-primary rounded-md",
    }
  },
}
</script>
