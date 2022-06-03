<template>
    <base-alert v-if="invalidInput" title="Invalid input" @close="closeDialog">
      <template #default>
        <p>At least one input is invalid (empty).</p>
        <p>Please, check all inputs and make sure none is empty before submit</p>
      </template>
      <template #actions>
        <base-button @click="closeDialog">OK</base-button>
      </template>
    </base-alert>
  <base-card>
    <form @submit.prevent="submitInputs" ref="add-resource-form">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titlle-inputt" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3" ref="description-input" />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="link-input" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data () {
    return {
      invalidInput: false
    };
  },
  methods: {
    submitInputs () {
      const title = this.$refs['titlle-inputt'].value;
      const description = this.$refs['description-input'].value;
      const link = this.$refs['link-input'].value;

      if (title.trim() === '' || description.trim() === '' || link.trim() === '') {
        this.invalidInput = true;
        return;
      }

      this.addResource({ title, description, link });
      this.$refs['add-resource-form'].reset();
    },
    closeDialog () {
      this.invalidInput = false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>