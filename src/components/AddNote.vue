<template>
  <div class="add-note">
    <div class="header">Add Note</div>
    <div class="body">
      <form>
        <label for="title">
          <input
            v-model="form.title"
            class="full-w"
            id="title"
            type="text"
            required
            placeholder="Add title"
          />
        </label>
        <label for="content">
          <textarea
            v-model="form.content"
            class="full-w"
            id="content"
            required
            placeholder="Add content"
          />
        </label>
      </form>
      <template v-if="formErrors.length">
        <template v-for="error in formErrors">
          <UiAlert>{{ error }}</UiAlert>
        </template>
      </template>
    </div>
    <div class="footer">
      <UiButton @click="handleSaveModal">Save</UiButton>
      <UiButton @click="closeModal" color="secondary">Cancel</UiButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UiButton from "@/components/ui/UiButton.vue";
import UiAlert from "@/components/ui/UiAlert.vue";

export default defineComponent({
  name: "AddNote",

  components: { UiButton, UiAlert },

  emits: ["saveNote"],

  data() {
    return {
      formErrors: [],
      form: {
        title: "",
        content: "",
      },
    };
  },

  props: {
    closeModal: {
      type: Function,
      required: true,
    },
  },

  methods: {
    handleSaveModal() {
      if (this.form.content && this.form.title) {
        this.$emit("saveNote", this.form);
      }

      this.formErrors = [];

      if (!this.form.content) {
        this.formErrors.push("content reqired");
      }

      if (!this.form.title) {
        this.formErrors.push("title reqired");
      }
    },
  },
});
</script>

<style scoped>
.header {
  font-size: 18px;
  margin-bottom: 20px;
}
.footer {
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.body form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.full-w {
  width: 100%;
}
</style>
