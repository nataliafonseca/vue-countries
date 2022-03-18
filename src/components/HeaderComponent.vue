<template>
  <div class="header-component">
    <v-app-bar elevation="1">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title class="title"> Where in the world? </v-toolbar-title>
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

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav>
        <v-list-item-group v-model="group">
          <router-link :to="{ name: 'home' }">
            <v-list-item>
              <v-list-item-icon class="list-icon">
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link :to="{ name: 'country', params: { country: 'brazil' } }">
            <v-list-item>
              <v-list-item-icon class="list-icon">
                <v-icon>fa-globe</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Country</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
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
