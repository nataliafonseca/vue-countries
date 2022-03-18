<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="data.flags.png" height="200px"></v-img>

    <v-card-title>{{ data.name.common }}</v-card-title>

    <v-card-subtitle>
      <p><strong>Population: </strong>{{ data.population | numberFormat }}</p>
      <p><strong>Region: </strong>{{ data.region }}</p>
      <p><strong>Capital: </strong>{{ data.capital[0] }}</p>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "CountryCard",
  props: ["data"],
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
