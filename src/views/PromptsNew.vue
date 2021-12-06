<template>
  <div class="prompt-new">
    <form v-on:submit.prevent="createPrompt()">
      <h1>New Prompts</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <label>Title:</label>
      <input type="text" v-model="newPromptParams.title" />
      <label>Content:</label>
      <input type="text" v-model="newPromptParams.content" />
      <input type="submit" vaulue="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newPromptParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createPrompt: function () {
      axios
        .post("/prompts", this.newPromptParams)
        .then(() => {
          this.$router.push("/prompts");
        })
        .catch((error) => {
          this.status = error.response.status;
          console.log(error.response);
        });
    },
  },
};
</script>
