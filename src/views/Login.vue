<template>
  <div class="login">
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <br />
          <br />
          <br />
          <h2>Account</h2>
          <p>Login</p>
        </div>
      </div>

      <div class="container" data-aos="fade-up">
        <div class="row mt-5">
          <div class="col-lg-4">
            <!--   <div class="info">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div class="open-hours">
                  <i class="bi bi-clock"></i>
                  <h4>Open Hours:</h4>
                  <p>
                    Monday-Saturday:
                    <br />
                    11:00 AM - 2300 PM
                  </p>
                </div>

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>-->
          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              class="php-email-form"
              v-on:submit.prevent="submit()"
            >
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <div class="col-md-6 form-group mt-3">
                <input
                  type="username"
                  class="form-control"
                  name="username"
                  id="username"
                  placeholder="Username"
                  required
                  v-model="newSessionParams.username"
                />
              </div>
              <div class="col-md-6 form-group mt-3">
                <input
                  type="text"
                  class="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                  v-model="newSessionParams.password"
                />
              </div>
              <div class="col-md-6 form-group mt-3">
                <input
                  type="text"
                  class="form-control"
                  name="password_confirmation"
                  id="password_confirmation"
                  placeholder="Confirm Password"
                  required
                  v-model="newSessionParams.password"
                />
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">You are logged in. Thank you!</div>
              </div>
              <div class="col-md-6 form-group mt-3">
                <div class="text-center"><button type="submit" value="Submit">Login</button></div>
              </div>
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
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$parent.flashMessage = "You have sucessfully logged in.";
          this.$router.push("/prompts");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
