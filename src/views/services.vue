<template>
  <div>
    <services></services>
    <b-card
      v-for="(card, index) in products"
      :key="index"
      :title="card.title"
      :img-src="card.thumbnailUrl"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
import services from "../components/Services";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "products",
  data() {
    return {
      products: []
    };
  },
  methods: {
    obtenerData() {
      this.axios
        .get(`https://jsonplaceholder.typicode.com/photos`)
        .then(response => {
          this.products = response.data;
        });
    }
  },
  created() {
    this.obtenerData();
  },
  components: {
    services
  }
};
</script>

<style></style>
