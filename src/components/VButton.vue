<template>
  <section>
    <button class="p-3 bg-primary rounded-md" @click="$emit('click')">
      <slot></slot>
    </button>
  </section>
</template>

<script>
export default {
  name: "VButton",
}
</script>
