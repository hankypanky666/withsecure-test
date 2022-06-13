<template>
  <main>
    <SummaryStatistics />
    <UiTable
      select-field-name="checked"
      @onCheckItem="handleItemChange"
      :table-data="notes"
    />

    <UiButton @click="handleAddNote">Add</UiButton>

    <template v-if="checkedNotesLen">
      <UiAlert
        ><p>
          {{
            checkedNotesLen > 1
              ? "Do you want to delete these notes?"
              : "Do you want to delete this note?"
          }}
        </p>
        <template #actions
          ><UiButton color="warn" @click="clearChecks">No</UiButton
          ><UiButton color="secondary" @click="handleDeleteNote"
            >Yes</UiButton
          ></template
        ></UiAlert
      >
    </template>
  </main>

  <UiModal :show="showAddNote">
    <AddNote
      @saveNote="addNewNote"
      :close-modal="() => (showAddNote = false)"
    ></AddNote>
  </UiModal>
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
import { defineComponent, ref } from "vue";
import { useNotesStore } from "@/stores/notes";
import { storeToRefs } from "pinia";
import type { Note } from "@/__mockData__/notes";
import UiModal from "@/components/ui/UiModal.vue";
import AddNote from "@/components/AddNote.vue";

export default defineComponent({
  components: {
    AddNote,
    UiModal,
    UiTable,
    SummaryStatistics,
    UiAlert,
    UiButton,
  },

  setup() {
    const showAddNote = ref(false);
    const notesStore = useNotesStore();
    const { notes, checkedNotesLen } = storeToRefs(notesStore);
    const { deleteNote, updateNote, clearCheckedNotes, addNote } = notesStore;

    return {
      notes,
      deleteNote,
      updateNote,
      checkedNotesLen,
      clearCheckedNotes,
      showAddNote,
      addNote,
    };
  },

  methods: {
    handleItemChange(note: Note) {
      this.updateNote(note.id, !note.checked);
    },

    // ^_^
    clearChecks() {
      this.clearCheckedNotes();
    },

    // looks little bit tricky but i just wanted to create UI for tables and manage them outside and don`t create deps for store
    handleDeleteNote() {
      if (!this.checkedNotesLen) return;

      this.deleteNote();
    },

    handleAddNote() {
      this.showAddNote = !this.showAddNote;
    },

    addNewNote(note: { title: string; content: string }) {
      this.addNote(note);
      this.showAddNote = false;
    },
  },
});
</script>
