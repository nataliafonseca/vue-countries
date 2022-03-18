<template>
  <div class="search-bar">
    <v-form @submit.prevent="triggerSearch">
      <v-text-field label="Search for a country" v-model="value"></v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    triggerSearch() {
      this.$emit("trigger-search", this.value);
    },
  },
};
</script>

<style scoped></style>
