<template>
  <section id="specials" class="specials">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <br />
        <br />
        <br />
        <h2>Favorites</h2>
        <p>Your Favorites</p>
      </div>
      <div>
        <form class="example" action="/favorites">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
        <datalist id="titles">
          <option v-for="favorite in favorites" :key="favorite.id">{{ favorite.prompt }}</option>
        </datalist>
        <br />
        <br />
      </div>
    </div>

    <div class="row" data-aos="fade-up" data-aos-delay="100" v-for="favorite in favorites" v-bind:key="favorite.id">
      <div class="col-lg-3">
        <ul class="nav nav-tabs flex-column">
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" id="prompt.id">
              <button v-on:click="showForm">Edit</button>
              <!-- <button type="button" id="close" data-bs-dismiss="modal" class="btn-close"></button> -->
              <h1>Prompt Info</h1>
              <dialog id="prompt-info">
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
                  <button>close</button>
                  <p></p>
                  <p />
                </form>
              </dialog>
              <p></p>
            </a>
            <a class="nav-link" data-bs-toggle="tab" id="prompt.id">
              <button v-on:click="destroyFavorite(favorite)">Delete</button>
            </a>
          </li>
        </ul>
      </div>

      <div class="col-lg-9 mt-4 mt-lg-0">
        <div class="tab-content">
          <div class="tab-pane active show">
            <div class="row">
              <div class="col-lg-8 details order-2 order-lg-1">
                <h3>{{ favorite.prompt.title }}</h3>
                <p>
                  {{ favorite.prompt.content }}
                </p>
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
  </section>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      favorites: [],
      prompt: prompt.id,
      currentFavorite: {},
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
