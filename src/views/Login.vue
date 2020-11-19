<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <label for="username">Username :</label><br />
      <input type="text" v-model="username" id="username" />
    </div>
    <div>
      <label for="password">Password :</label><br />
      <input type="password" v-model="password" id="password" />
    </div>
    <div>
      <button @click="submit">Login</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",

  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    ...mapActions({
      setAuth: "auth/login",
    }),

    submit() {
      const formData = {
        username: this.username,
        password: this.password,
      };
      this.axios
        .post("/login", formData)
        .then((response) => {
          let { data } = response;
          console.log(data.message);

          this.setAuth(data.data);
          this.$router.push({ name: "Dashboard" });
        })
        .catch((error) => {
          let { data } = error.response;
          console.log(data.message);
        });
    },
  },
};
</script>
