import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

import Login from "../views/Login.vue";
import Error404 from "../views/Error404.vue";
import Dashboard from "../views/About.vue";

import Users from "../views/users/Users.vue";
import UsersIndex from "../views/users/UsersIndex.vue";
import UsersCreate from "../views/users/UsersCreate.vue";
import UsersShow from "../views/users/UsersShow.vue";
import UsersEdit from "../views/users/UsersEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { title: "Login" },
  },
  {
    path: "/about",
    name: "Dashboard",
    component: Dashboard,
    meta: { title: "Dashboard", icon: "tachometer-alt" },
  },
  {
    path: "/users",
    component: Users,
    children: [
      {
        path: "",
        name: "Users",
        component: UsersIndex,
        meta: { title: "Users", icon: "user", permissions: "index-users" },
      },
      {
        path: "create",
        name: "UsersCreate",
        component: UsersCreate,
        meta: { title: "Create User", permissions: ["create", "create-users"] },
      },
      {
        path: ":id",
        name: "UsersShow",
        component: UsersShow,
        meta: { title: "Show User", permissions: "show-users" },
      },
      {
        path: ":id/edit",
        name: "UsersEdit",
        component: UsersEdit,
        meta: { title: "Edit User", permissions: "edit-users" },
      },
    ],
  },
  {
    // the 404 route, when none of the above matches
    path: "*",
    name: "Error404",
    component: Error404,
    meta: { title: "404 Not Found" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // set page title
  document.title = `${to.meta.title} - ${process.env.VUE_APP_NAME}`;

  if (from.name != "Login") {
    if (store.getters["auth/isAuthenticated"]) {
      if (to.meta.permissions) {
        const permissions = store.getters["auth/permissions"];
        const routePermissions = to.meta.permissions;
        let hasPermission;
        if (Array.isArray(routePermissions)) {
          hasPermission = permissions.some((permission) =>
            routePermissions.includes(permission)
          );
        } else {
          hasPermission = permissions.includes(routePermissions);
        }

        if (hasPermission) {
          next();
        } else {
          router.push({ name: "Dashboard" });
        }
      }
    }
  }
  next();
});

export default router;
