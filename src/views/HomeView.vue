<template>
  <div class="home-view">
    <search-bar @trigger-search="searchByName" />
    <v-col class="d-flex" cols="8" sm="6">
      <v-select
        :items="items"
        label="Filter by Region"
        v-model="region"
      ></v-select>
    </v-col>
    <transition>
      <div v-if="loading" class="text-center mt-6" key="loading">
        <v-progress-circular indeterminate></v-progress-circular>
      </div>
      <div v-else-if="noMatch" class="text-center mt-6" key="noMatch">
        <p>No country matches this search.</p>
      </div>
      <div v-else key="element">
        <v-lazy
          v-for="country in countriesListOrdered"
          :key="country.name.common"
          v-model="isActive"
          transition="fade-transition"
        >
          <country-card class="mb-6" :country="country" />
        </v-lazy>
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
      noMatch: false,
      isActive: false,
    };
  },
  computed: {
    countriesListOrdered() {
      return [...this.countriesList].sort((a, b) =>
        a.name.common < b.name.common ? -1 : 1
      );
    },
  },
  methods: {
    populateCountriesList(path) {
      this.countriesList = null;
      this.loading = true;
      this.noMatch = false;

      fetch(`https://restcountries.com/v3.1/${path}`)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          if (json.status === 404) {
            this.loading = false;
            this.noMatch = true;
          } else {
            this.countriesList = json;
            this.loading = false;
          }
        });
    },
    filterByRegion() {
      if (this.region === "All") {
        this.populateCountriesList("all");
      } else {
        this.populateCountriesList(`region/${this.region}`);
      }
    },
    searchByName(value) {
      if (value.trim()) {
        this.populateCountriesList(`name/${value.trim()}`);
      } else {
        this.populateCountriesList("all");
      }
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
</style>
