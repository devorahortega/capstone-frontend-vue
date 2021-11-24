<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h3>Please login or sign up</h3>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      message: "Welcome to Promptly",
    };
  },
};
</script>
