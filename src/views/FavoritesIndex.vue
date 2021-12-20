<template>
  <div class="prompts-index">
    <section id="specials" class="specials">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <br />
          <br />
          <br />
          <h2>Favorites</h2>
          <p>List of Favorites</p>
          <br />
          <div>
            <!-- <form class="example" action="/prompts">
              <input type="text" v-model="titleFilter" placeholder="Search..." list="titles" />
              <button type="submit"><i class="fa fa-search"></i></button>
              <datalist id="titles">
                <option v-for="favorite in favorites" :key="favorite.id">{{ favorite.prompt.title }}</option>
              </datalist>
            </form> -->
            <br />
            <br />
          </div>
          <div
            class="row"
            data-aos="fade-up"
            data-aos-delay="100"
            v-for="favorite in favorites"
            v-bind:key="favorite.id"
          >
            <div class="col-lg-3">
              <ul class="nav nav-tabs flex-column">
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" id="favorite.id"></a>
                  <a class="nav-link" data-bs-toggle="tab" id="favorite.id"></a>
                  <button v-on:click="destroyFavorite(favorite)">Delete</button>
                  <div
                    class="row"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    v-for="favorite in favorites"
                    v-bind:key="favorite.id"
                  ></div>
                </li>
              </ul>
            </div>
            <div class="col-lg-9 mt-4 mt-lg-0">
              <div class="tab-content">
                <div class="tab-pane active show">
                  <div class="row">
                    <div class="col-lg-8 details order-2 order-lg-1">
                      <p>{{ favorite.prompt.title }}</p>
                      <h3>
                        {{ favorite.prompt.content }}
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
      currentPrompt: "",
      editPromptParams: "",
      errors: [],
      favorites: [],
      // user_id: localStorage.getItem("user_id"),
    };
  },
  created: function () {
    this.indexFavorites();
  },
  methods: {
    indexFavorites: function () {
      axios.get("/favorites").then((response) => {
        console.log("favorites index", response.data);
        this.favorites = response.data;
      });
    },
    showForm: function (prompt) {
      this.currentPrompt = prompt;
      console.log(this.currentPrompt, this.currentPrompt.id);
      document.querySelector("#prompt-info").showModal();
    },
    updatePrompt: function (prompt) {
      var editPromptParams = prompt;
      axios
        .patch("/prompts/" + prompt.id, editPromptParams)
        .then((response) => {
          console.log("The prompt has been updated.", response.data, prompt.id), this.$router.go();
        })
        .catch((error) => console.log(error.response));
    },
    destroyFavorite: function (favorite) {
      axios.delete(`/favorites/${favorite.id}`).then((response) => {
        console.log("The favorite has been deleted.", response.data);
        var index = this.favorites.indexOf(favorite);
        this.favorites.splice(index, 1);
      });
    },
  },
};
</script>
