"use strict";
import Vue from "vue";
import store from "@/store";

const Helper = {
  install(Vue) {
    Vue.prototype.can = function(params) {
      const permissions = store.getters["auth/permissions"];
      let hasPermission;
      if (Array.isArray(params)) {
        hasPermission = permissions.some((permission) =>
          params.includes(permission)
        );
      } else {
        hasPermission = permissions.includes(params);
      }

      return hasPermission;
    };
  },
};
Vue.use(Helper);
