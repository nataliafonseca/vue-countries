<template>
  <div class="app-top-bar">
    <v-app-bar elevation="1">
      <v-toolbar-title class="title">Where in the world?</v-toolbar-title>
      <v-icon
        @click="toggleColorTheme"
        v-if="$vuetify.theme.dark"
        class="color-mode-toggle"
        >fa-sun</v-icon
      >
      <v-icon @click="toggleColorTheme" v-else class="color-mode-toggle"
        >fa-moon</v-icon
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppTopBar",
  data: () => ({
    drawer: false,
    group: null,
    darkMode: true,
  }),
  methods: {
    toggleColorTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem(
        "color_theme",
        `${this.$vuetify.theme.dark ? "dark" : "light"}`
      );
    },
  },
};
</script>

<style scoped>
.color-mode-toggle {
  margin-left: auto;
  padding-right: 1rem;
}

.title {
  font-weight: bold;
  font-size: 1rem;
  margin-left: 10px;
}

.list-icon {
  margin-right: 10px;
}
</style>
