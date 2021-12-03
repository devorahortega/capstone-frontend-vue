<template>
  <div class="prompts-index">
    <h1>Prompts</h1>
    <div v-for="prompt in prompts" v-bind:key="prompt.id">
      <h3>{{ prompt.title }}</h3>
      <p>{{ prompt.content }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      prompts: [],
    };
  },
  created: function () {
    this.indexPrompts();
  },
  methods: {
    indexPrompts: function () {
      axios.get("/prompts").then((response) => {
        console.log("prompts index", response);
        this.prompts = response.data;
      });
    },
  },
};
</script>
