<template>
  <div class="prompts-index">
    <section id="specials" class="specials">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <br />
          <br />
          <br />
          <h2>Prompts</h2>
          <p>List of Prompts</p>
          <br />
          <!-- <div>
            <form class="example" action="/prompts">
              <input type="text" v-model="titleFilter" list="titles" />
              <button type="submit"><i class="fa fa-search"></i></button>
              <datalist id="titles">
                <option v-for="prompt in prompts" :key="prompt.id">{{ prompt.title }}</option>
              </datalist>
            </form>
            <br />
            <br />
          </div> -->
          <div class="row" data-aos="fade-up" data-aos-delay="100" v-for="prompt in prompts" v-bind:key="prompt.id">
            <div class="col-lg-3">
              <ul class="nav nav-tabs flex-column">
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" id="prompt.id"></a>
                  <a class="nav-link" data-bs-toggle="tab" id="prompt.id">
                    <button v-on:click="showForm">Edit</button>
                    <dialog id="prompt-info">
                      <button type="button" id="close" data-bs-dismiss="modal" class="btn-close"></button>
                      <h1>Prompt Info</h1>
                      <form method="dialog">
                        <p>
                          <input type="text" placeholder="Title" v-model="currentPromptParams.title" />
                        </p>
                        <br />
                        <p>
                          <input type="text" placeholder="Content" v-model="currentPromptParams.content" />
                        </p>
                        <br />
                        <button v-on:click="updatePrompt(prompt)">Update</button>
                        <p></p>
                        <p />
                      </form>
                    </dialog>
                  </a>
                  <a class="nav-link" data-bs-toggle="tab" id="prompt.id">
                    <button v-on:click="favoritePrompt(prompt)">Favorite</button>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-9 mt-4 mt-lg-0">
              <div class="tab-content">
                <div class="tab-pane active show">
                  <div class="row">
                    <div class="col-lg-8 details order-2 order-lg-1">
                      <p>{{ prompt.title }}</p>
                      <h3>
                        {{ prompt.content }}
                      </h3>
                    </div>
                    <div class="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/specials-1.png" alt="" class="img-fluid" />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
// import Vue2Filters from "vue2-filters";

export default {
  // mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      prompts: [],
      currentPromptParams: {},
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
    showForm: function () {
      document.querySelector("#prompt-info").showModal();
    },
    updatePrompt: function () {
      axios
        .patch(`/prompts/${this.$route.params.id}`, this.currentPromptParams)
        .then((response) => {
          console.log("The prompt has been updated.", response.data);
          this.$router.push(`/prompts/${response.data.id}`);
        })
        .catch((error) => console.log(error.response));
    },
    favoritePrompt: function (prompt) {
      this.currentPrompt = prompt;
      axios
        .post(`/favorites`)
        .then(() => {
          this.$router.push("/favorites");
        })
        .catch((error) => {
          this.status = error.response.status;
        });
    },
  },
};
</script>
