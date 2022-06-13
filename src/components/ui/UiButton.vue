<template>
  <button class="ui-button">
    <slot name="image"></slot>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UiButton",
});
</script>

<style scoped>
button {
  all: initial;
}
.ui-button {
  border: 1px solid #ffffff;
  padding: 12px;
  border-radius: 4px;
  color: white;
}
.ui-button:hover {
  cursor: pointer;
}
</style>
