<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Title</label>
      <input type="text" v-model="enteredTitle" />
    </div>
    <div>
      <label>Text</label>
      <input type="text" v-model="enteredText" />
    </div>
    <div>
      <label>Is it important?</label>
      <input type="checkbox" v-model="enteredImportant" />
    </div>
    <div>
      <button>Add item</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-item"],
  data() {
    return {
      enteredTitle: "",
      enteredText: "",
      enteredImportant: false,
    };
  },
  methods: {
    submitData() {
      if (this.enteredTitle == "" || this.enteredText == "") {
        alert("Please enter a title and a text");
      } else {
        this.$emit(
          "add-item",
          this.enteredTitle,
          this.enteredText,
          this.enteredImportant
        );
      }
      this.enteredTitle = "";
      this.enteredText = "";
      this.enteredImportant = false;
    },
  },
};
</script>
