<template>
  <div class="country-view">
    <v-btn @click="$router.go(-1)">
      <v-icon left>fa-arrow-left</v-icon>
      Back
    </v-btn>
    <transition>
      <div v-if="loading" class="text-center mt-6" key="loading">
        <v-progress-circular indeterminate></v-progress-circular>
      </div>
      <div v-else key="element">
        <v-img class="flag-img" :src="countryData.flags.png"></v-img>
        <h2 class="title">{{ countryData.name.common }}</h2>
        <p>{{ countryData.nativeName }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CountryView",
  props: ["country"],
  data() {
    return {
      loading: false,
      countryData: null,
    };
  },
  methods: {
    getCountryData() {
      this.countryData = null;
      this.loading = true;
      fetch(`https://restcountries.com/v3.1/name/${this.country}`)
        .then((response) => response.json())
        .then((json) => {
          this.countryData = json[0];
          this.loading = false;
        });
    },
  },
  created() {
    this.getCountryData();
  },
};
</script>

<style scoped>
.flag-img {
  margin-top: 40px;
  margin-bottom: 40px;
}

.country-view {
  padding: 20px;
}
</style>
