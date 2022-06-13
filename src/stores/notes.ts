import { defineStore } from "pinia";
import { notes } from "@/__mockData__/notes";

export const useNotesStore = defineStore({
  id: "notes",
  state: () => ({
    notes: notes.map((n) => {
      return {
        ...n,
        checked: false,
      };
    }),
  }),
  getters: {
    newNotes(state) {
      return state.notes.filter((n) => n.status === "New").length || 0;
    },
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
    checkedNotesLen(state) {
      return state.notes.filter((n) => n.checked).length || 0;
    },
  },
  actions: {
    updateNote(noteId: number, checked: boolean) {
      this.notes = this.notes.map((n) => {
        if (n.id === noteId) {
          return {
            ...n,
            checked,
          };
        }

        return { ...n };
      });
    },

    clearCheckedNotes() {
      this.notes = this.notes.map((n) => {
        return {
          ...n,
          checked: false,
        };
      });
    },

    deleteNote() {
      this.notes = this.notes.filter((n) => !n.checked);
    },

    addNote(note: { title: string; content: string }) {
      const lastEl = this.notes[this.notes.length - 1] || null;

      if (lastEl?.id) {
        const newNote: any = {
          id: +lastEl.id + 1,
          title: note.title,
          content: note.content,
          status: "New",
          checked: false,
        };
        this.notes = [...this.notes, newNote];
      }
    },
  },
});
