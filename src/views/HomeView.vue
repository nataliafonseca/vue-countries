<template>
  <div class="home-view">
    <search-bar />
    <transition>
      <div v-if="loading" class="text-center" key="loading">
        <v-progress-circular indeterminate></v-progress-circular>
      </div>
      <div v-else key="element">
        <v-col class="d-flex" cols="8" sm="6">
          <v-select
            :items="items"
            label="Filter by Region"
            v-model="region"
          ></v-select>
        </v-col>
        <country-card
          class="mb-6"
          v-for="country in countriesList"
          :key="country.tld"
          :data="country"
        />

        {{ countriesList }}
      </div>
    </transition>
  </div>
</template>

<script>
import CountryCard from "../components/CountryCard.vue";
import SearchBar from "../components/SearchBar.vue";

export default {
  name: "HomeView",
  components: { SearchBar, CountryCard },
  data() {
    return {
      region: "All",
      countriesList: null,
      items: ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"],
      loading: true,
    };
  },
  methods: {
    populateCountriesList(path) {
      this.countriesList = null;
      this.loading = true;
      fetch(`https://restcountries.com/v3.1/${path}`)
        .then((response) => response.json())
        .then((json) => {
          this.countriesList = json;
          this.loading = false;
        });
    },
    filterByRegion() {
      this.populateCountriesList(`region/${this.region}`);
    },
  },
  created() {
    this.populateCountriesList("all");
  },
  watch: {
    region() {
      this.filterByRegion();
    },
  },
};
</script>

<style scoped>
.home-view {
  padding: 20px;
}

.v-enter {
  opacity: 0;
}

.v-enter-active {
  transition: all 0.3s;
}
</style>
