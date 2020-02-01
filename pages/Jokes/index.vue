<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <h1>{{title}}</h1>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="4" lg="3">
          <v-form @submit.prevent="onSubmit">
            <v-text-field
              class
              flat
              hide-details
              label="Search"
              v-model="text"
              solo-inverted
              append-icon="mdi-magnify"
            ></v-text-field>
          </v-form>
        </v-col>
      </v-row>
      <Joke v-for="joke in jokes" :key="joke.id" :id="joke.id" :joke="joke.joke" />
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import Joke from "../../components/Joke";

export default {
  components: {
    Joke
  },
  data() {
    return {
      title: "Dad Jokes",
      jokes: [],
      text: ""
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    try {
      const res = await axios.get("https://icanhazdadjoke.com/search", config);
      this.jokes = res.data.results;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async onSubmit() {
      const config = {
        headers: {
          Accept: "application/json"
        }
      };

      try {
        const res = await axios.get(
          `https://icanhazdadjoke.com/search?term=${this.text}`,
          config
        );
        this.jokes = res.data.results;
        console.log(this.text);
      } catch (err) {
        console.log(err);
      }
      this.text = "";
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