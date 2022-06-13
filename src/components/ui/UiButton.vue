<template>
  <button class="ui-button" :class="classObject">
    <slot name="image"></slot>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UiButton",

  props: {
    color: {
      type: String,
      default: "primary",
    },
  },

  computed: {
    classObject() {
      return {
        [this.color]: !!this.color?.length,
      };
    },
  },
});
</script>

<style scoped>
button {
  all: initial;
}

.ui-button.primary {
  background-color: #3f51b5;
  color: white;
}

.ui-button.warn {
  background-color: red;
  color: white;
}

.ui-button.secondary {
  background-color: white;
  color: red;
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
