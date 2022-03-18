<template>
  <v-card class="mx-auto" max-width="344">
    <router-link
      :to="{
        name: 'country',
        params: { countryCode: country.cioc.toLowerCase() },
      }"
    >
      <v-img :src="country.flags.png" height="200px"></v-img>

      <v-card-title>{{ country.name.common }}</v-card-title>

      <v-card-subtitle>
        <p>
          <strong>Population: </strong>{{ country.population | numberFormat }}
        </p>
        <p><strong>Region: </strong>{{ country.region }}</p>
        <p><strong>Capital: </strong>{{ country.capital[0] }}</p>
      </v-card-subtitle>
    </router-link>
  </v-card>
</template>

<script>
export default {
  name: "CountryCard",
  props: ["country"],
  data() {
    return {};
  },
  filters: {
    numberFormat(value) {
      return value.toLocaleString("en-US");
    },
  },
};
</script>

<style scoped>
p {
  margin: 0;
}
</style>
