<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="show" class="ui-modal">
        <div class="ui-wrapper">
          <div class="ui-container">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UiModal",

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.ui-modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.ui-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.ui-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .ui-container,
.modal-leave-to .ui-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
