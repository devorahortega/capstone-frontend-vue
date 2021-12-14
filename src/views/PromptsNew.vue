<template>
  <div class="prompt-new">
    <br />
    <br />
    <br />
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Create</h2>
          <p>Make a new prompt:</p>
        </div>
      </div>

      <div class="container" data-aos="fade-up">
        <div class="row mt-5">
          <div class="col-lg-4">
            <div class="info">
              <img src="assets/img/create.png" alt="" class="img-fluid" />
            </div>
          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              class="php-email-form"
              v-on:submit.prevent="createPrompt()"
            >
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <div class="row"></div>
              <div class="form-group mt-3">
                <input
                  type="text"
                  v-model="newPromptParams.title"
                  class="form-control"
                  name="title"
                  id="title"
                  placeholder="Prompt Title"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <textarea
                  class="form-control"
                  v-model="newPromptParams.content"
                  name="content"
                  rows="8"
                  placeholder="Prompt Content"
                  required
                ></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your prompt has been saved. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit" vaulue="Submit">Create Prompt</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
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
