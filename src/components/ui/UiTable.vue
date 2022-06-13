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
            <template v-for="(data, name, index) in item" :key="data">
              <td v-if="name !== selectFieldName">
                <template v-if="index === 0 && selectFieldName?.length">
                  <input
                    @change.prevent="$emit('onCheckItem', item)"
                    type="checkbox"
                    :name="data"
                    :value="data"
                    :checked="item.checked"
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
      type: Array as any,
    },
    selectFieldName: {
      type: String,
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

      if (!this.selectFieldName?.length) {
        return Object.keys(firstObjectFromArr);
      } else {
        return Object.keys(firstObjectFromArr).filter(
          (key) => key !== this.selectFieldName
        );
      }
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
