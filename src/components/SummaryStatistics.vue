<template>
  <UiCard>
    <div class="summary-body">
      <!--      As a feature can create it dynamic in future-->
      <div class="item">
        <div class="item-header">Total</div>
        <div class="item-content">{{ totalNotes }}</div>
      </div>
      <div class="item">
        <div class="item-header">New</div>
        <div class="item-content">{{ newNotes }}</div>
      </div>
      <div class="item">
        <div class="item-header">Completed</div>
        <div class="item-content">{{ completedNotes }}</div>
      </div>
      <div class="item">
        <div class="item-header">Not completed</div>
        <div class="item-content">{{ notCompletedNotes }}</div>
      </div>
    </div>
  </UiCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useNotesStore } from "@/stores/notes";
import { storeToRefs } from "pinia";
import UiCard from "@/components/ui/UiCard.vue";

export default defineComponent({
  name: "SummaryStatistics",
  components: { UiCard },
  setup() {
    const notesStore = useNotesStore();
    const { notes, totalNotes, completedNotes, notCompletedNotes, newNotes } =
      storeToRefs(notesStore);

    console.log("notes: ", notes);

    return {
      notes,
      totalNotes,
      completedNotes,
      notCompletedNotes,
      newNotes,
    };
  },
});
</script>

<style scoped>
.summary-body {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.item {
  display: flex;
  flex-direction: column;
}

.item-header {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
  font-weight: 600;
}

.item-content {
  font-size: 16px;
}
</style>
