import { defineStore } from "pinia";
import { notes } from "@/__mockData__/notes";

export const useNotesStore = defineStore({
  id: "notes",
  state: () => ({
    notes,
  }),
  getters: {
    totalNotes(state) {
      return state.notes.length || 0;
    },
    completedNotes(state) {
      return state.notes.filter((n) => n.status === "Completed").length || 0;
    },
    notCompletedNotes(state) {
      return (
        state.notes.filter((n) => n.status === "Not completed").length || 0
      );
    },
  },
  actions: {
    deleteNote(id: number) {
      this.notes = this.notes.filter((n) => n.id !== id);
    },
  },
});
