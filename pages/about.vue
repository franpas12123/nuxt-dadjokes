<template>
  <v-row>
    <v-col>
      <h1>About Page</h1>
      <p>An app that displays corny dad jokes.</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: "Dad Jokes",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best corny joke"
        }
      ]
    };
  }
};
</script>

<style>
</style>