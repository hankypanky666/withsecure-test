<template>
  <div class="ui-table">
    <table>
      <thead>
        <tr>
          <template v-for="header in tableHeaders">
            <th>{{ header }}</th>
          </template>
        </tr>

        <template v-for="item in tableData">
          <tr>
            <template v-for="(data, _, index) in item" :key="data">
              <td>
                <template v-if="index === 0">
                  <input
                    @change.prevent="$emit('onCheckItem', $event)"
                    type="checkbox"
                    :name="data"
                    :value="data"
                  />
                </template>
                {{ data }}
              </td>
            </template>
          </tr>
        </template>
      </thead>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { Note } from "@/__mockData__/notes";

export default defineComponent({
  name: "UiTable",
  props: {
    tableData: {
      type: Array,
      default: [],
    },
  },

  emits: ["onCheckItem"],

  mounted() {
    console.log("tableData: ", this.tableData);
  },

  computed: {
    tableHeaders() {
      if (!this.tableData?.length) return;
      const firstObjectFromArr = this.tableData[0] as Note;

      return Object.keys(firstObjectFromArr);
    },
  },
});
</script>

<style scoped>
.ui-table table {
  border-spacing: unset;
}

.ui-table td {
  padding: 12px;
  border-bottom: 1px solid #000;
}

.ui-table th {
  background-color: #2c3e50;
  color: white;
  padding: 12px;
}
</style>
