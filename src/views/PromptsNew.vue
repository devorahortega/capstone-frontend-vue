<template>
  <div class="prompt-new">
    <section id="create-a-prompt" class="create-a-prompt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Create</h2>
          <p>Create a Prompt</p>
        </div>

        <form
          action="/prompts/new"
          method="post"
          role="form"
          class="php-email-form"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="row">
            <div class="col-lg-4 col-md-6 form-group">
              <input
                type="text"
                name="name"
                class="form-control"
                id="name"
                placeholder="Your Name"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                data-rule="email"
                data-msg="Please enter a valid email"
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="text"
                class="form-control"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="text"
                name="date"
                class="form-control"
                id="date"
                placeholder="Date"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="text"
                class="form-control"
                name="time"
                id="time"
                placeholder="Time"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="number"
                class="form-control"
                name="people"
                id="people"
                placeholder="# of people"
                data-rule="minlen:1"
                data-msg="Please enter at least 1 chars"
              />
              <div class="validate"></div>
            </div>
          </div>
          <div class="form-group mt-3">
            <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
            <div class="validate"></div>
          </div>
          <div class="mb-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">
              Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!
            </div>
          </div>
          <div class="text-center"><button type="submit">Book a Table</button></div>
        </form>
      </div>
    </section>
    <!-- End Book A Table Section -->
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
