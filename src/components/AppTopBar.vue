<template>
  <v-app-bar class="app-top-bar" elevation="1">
    <v-toolbar-title class="title">Where in the world?</v-toolbar-title>
    <v-btn
      icon
      @click="toggleColorTheme"
      class="color-mode-toggle"
      v-if="$vuetify.theme.dark"
    >
      <v-icon>fa-sun</v-icon>
    </v-btn>
    <v-btn icon @click="toggleColorTheme" class="color-mode-toggle" v-else>
      <v-icon>fa-moon</v-icon>
    </v-btn>
  </v-app-bar>
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
.app-top-bar {
  padding-right: 16px;
}

.color-mode-toggle {
  margin-left: auto;
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
