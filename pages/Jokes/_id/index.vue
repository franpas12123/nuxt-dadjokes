<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-actions>
          <v-btn large text to="/jokes" nuxt>Go back</v-btn>
        </v-card-actions>
        <v-card-title>{{this.joke}}</v-card-title>
        <hr />
        <v-card-subtitle>
          <small>
            <b>Joke ID:</b>
            {{this.id}}
          </small>
        </v-card-subtitle>
        <v-spacer></v-spacer>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "Dad Jokes",
      joke: "",
      id: ""
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    try {
      this.id = this.$route.params.id;

      const res = await axios.get(
        `https://icanhazdadjoke.com/j/${this.id}`,
        config
      );
      this.joke = res.data.joke;
    } catch (err) {
      console.log(err);
    }
  },
  head() {
    return {
      title: "Dad Jokes",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place for corny jokes"
        }
      ]
    };
  }
};
</script>

<style>
</style>