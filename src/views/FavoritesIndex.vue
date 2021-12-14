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
        <form class="example" action="/prompts">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
        <datalist id="titles">
          <option v-for="favorite in favorites" :key="favorite.id">{{ prompt.title }}</option>
        </datalist>
      </div>
    </div>

    <div class="row" data-aos="fade-up" data-aos-delay="100" v-for="prompt in prompts" v-bind:key="prompt.id">
      <div class="col-lg-3">
        <ul class="nav nav-tabs flex-column">
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" id="prompt.id">-</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-9 mt-4 mt-lg-0">
        <div class="tab-content">
          <div class="tab-pane active show">
            <div class="row">
              <div class="col-lg-8 details order-2 order-lg-1">
                <h3>{{ favorite.title }}</h3>
                <p>
                  {{ favorite.content }}
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
