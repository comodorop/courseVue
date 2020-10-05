<template>
  <div id="app">
    <barra></barra>
    <router-view></router-view>
  </div>
</template>

<script>
import saludo from "./components/saludo";
import services from "./components/Services";
import barra from "./components/barra";
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  components: {
    saludo,
    barra
  }
};
</script>

<style></style>
