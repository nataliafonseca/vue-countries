<template>
  <v-app>
    <header-component />
    <router-view />
  </v-app>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: { HeaderComponent },
  created() {
    const colorTheme = localStorage.getItem("color_theme");
    this.$vuetify.theme.dark = colorTheme === "dark" ? true : false;
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
}
</style>
