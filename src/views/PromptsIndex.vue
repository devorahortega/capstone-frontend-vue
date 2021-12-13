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
        </div>

        <div class="col-lg-9 mt-4 mt-lg-0">
          <div class="tab-pane" v-for="prompt in prompts" v-bind:key="prompt.id">
            <br />
            <div class="col-lg-4 text-center order-1 order-lg-2">
              <img src="assets/img/specials-5.png" alt="" class="img-fluid" />
            </div>
            <br />
            <div class="row">
              <div class="col-lg-8 details order-2 order-lg-1">
                <h3>{{ prompt.title }}</h3>
                <p>{{ prompt.content }}</p>
                <h1></h1>
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
