<template>
  <main>
    <SummaryStatistics />
    <UiTable @onCheckItem="handleItemChange" :table-data="notes" />

    <template v-if="checkedNotes.size">
      <UiAlert
        ><p>
          {{
            checkedNotes.size > 1
              ? "Do you want to delete these notes?"
              : "Do you want to delete this note?"
          }}
        </p>
        <template #actions
          ><UiButton @click="clearChecks">No</UiButton
          ><UiButton @click="handleDeleteNote">Yes</UiButton></template
        ></UiAlert
      >
    </template>
  </main>
</template>

<style>
@import "./assets/base.css";

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script lang="ts">
import SummaryStatistics from "@/components/SummaryStatistics.vue";
import UiTable from "@/components/ui/UiTable.vue";
import UiAlert from "@/components/ui/UiAlert.vue";
import UiButton from "@/components/ui/UiButton.vue";
import { defineComponent } from "vue";
import { useNotesStore } from "@/stores/notes";
import { storeToRefs } from "pinia";

export default defineComponent({
  components: { UiTable, SummaryStatistics, UiAlert, UiButton },

  data() {
    return {
      checkedNotes: new Set<HTMLInputElement>(),
    };
  },

  setup() {
    const notesStore = useNotesStore();
    const { notes } = storeToRefs(notesStore);
    const { deleteNote } = notesStore;

    return {
      notes,
      deleteNote,
    };
  },

  methods: {
    handleItemChange(event: Event) {
      const target = event.target as HTMLInputElement;

      if (target.checked) {
        this.checkedNotes.add(target);
      } else {
        this.checkedNotes.delete(target);
      }
    },

    // ^_^
    clearChecks() {
      this.checkedNotes.forEach((t) => (t.checked = false));
      this.checkedNotes.clear();
    },

    // looks little bit tricky but i just wanted to create UI for tables and manage them outside and don`t create deps for store
    handleDeleteNote() {
      if (!this.checkedNotes.size) return;

      this.checkedNotes.forEach((t) => {
        this.deleteNote(+t.value);
        this.checkedNotes.delete(t);
        this.clearChecks();
      });
    },
  },
});
</script>
