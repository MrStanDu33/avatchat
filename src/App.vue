<template>
  <component :is="currentPageComponent"></component>
</template>

<script>
import routes from './router';

export default {
  name: 'App',
  computed: {
    currentPageComponent() {
      const path = window.location.pathname;
      const routeExist = Object.keys(routes).indexOf(path);
      return routeExist !== -1
        ? routes[path].component
        : routes.default.component;
    },
  },
};
</script>
