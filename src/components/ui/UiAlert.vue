<template>
  <div class="ui-alert">
    <div class="content">
      <slot></slot>
    </div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UiAlert",
});
</script>
<style scoped>
.ui-alert {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px;
  background-color: red;
  color: white;
  align-items: center;
  gap: 20px;
}

.actions {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
</style>
