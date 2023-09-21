<template>
  <section>
    <button :class="classes" @click="$emit('click')">{{ text }}</button>
  </section>
</template>

<script>
export default {
  name: "VButton",

  props: {
    text: {type: String, default: ""},
    classes: {type: String, default: ""},
  },
}
</script>
