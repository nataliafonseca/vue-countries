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
        <div class="my-8">
          <p>
            <strong>Population:</strong>
            {{ countryData.population | numberFormat }}
          </p>
          <p>
            <strong>Region:</strong>
            {{ countryData.region }}
          </p>
          <p>
            <strong>Sub Region:</strong>
            {{ countryData.subregion }}
          </p>
          <p>
            <strong>Capital:</strong>
            {{ countryData.capital[0] }}
          </p>
        </div>
        <div class="mb-8">
          <p>
            <strong>Top Level Domain:</strong>
            {{ countryData.tld[0] }}
          </p>
          <p>
            <strong>Currencies: </strong>
            <span
              class="span-list"
              v-for="(currency, symbol) in countryData.currencies"
              :key="symbol"
              >{{ currency.name }}</span
            >
          </p>
          <p>
            <strong>Languages: </strong>
            <span
              class="span-list"
              v-for="(language, symbol) in countryData.languages"
              :key="symbol"
              >{{ language }}</span
            >
          </p>
        </div>
        <div class="mb-8">
          <h3>Border Countries</h3>
          <div class="d-flex flex-wrap">
            <v-btn
              class="mr-3 mt-3"
              v-for="border in borderCountriesOrdered"
              :key="border"
              @click="
                $router.push({
                  name: 'country',
                  params: { countryCode: border.toLowerCase() },
                })
              "
              >{{ border }}</v-btn
            >
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CountryView",
  props: ["countryCode"],
  data() {
    return {
      loading: false,
      countryData: null,
    };
  },
  computed: {
    borderCountriesOrdered() {
      return [...this.countryData.borders].sort();
    },
  },
  methods: {
    getCountryData(code) {
      this.countryData = null;
      this.loading = true;
      fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then((response) => response.json())
        .then((json) => {
          this.countryData = json[0];
          this.loading = false;
        });
    },
  },
  filters: {
    numberFormat(value) {
      return value.toLocaleString("en-US");
    },
  },
  created() {
    this.getCountryData(this.countryCode);
  },
  beforeRouteUpdate(to, from, next) {
    this.getCountryData(to.params.countryCode);
    next();
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

.span-list + .span-list::before {
  content: ", ";
}

p {
  margin: 5px 0;
}
</style>
