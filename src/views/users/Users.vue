<template>
  <div class="about">
    <h1>This is a users page</h1>
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.username }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Users",

  data() {
    return {
      users: [],
    };
  },

  computed: {
    ...mapGetters({
      api_token: "auth/api_token",
    }),
  },

  mounted() {
    this.getUsers();
  },

  methods: {
    getUsers() {
      let config = {
        headers: {
          Authorization: "Bearer " + this.api_token,
        },
      };
      this.axios.get("/users", config).then((response) => {
        let { data } = response.data;

        if (data) {
          this.users = data;
        }
      });
    },
  },
};
</script>
