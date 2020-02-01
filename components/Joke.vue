<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-subtitle>{{joke}}</v-card-subtitle>
        <v-card-actions>
          <v-btn text :to="'/jokes/' + id">See Joke</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Joke",
  props: ["joke", "id"]
};
</script>

<style>
</style>