<template>
  <div>
    <b-alert show>
      {{ saludo }} <b>{{ client.name }} {{ client.last_name }}</b>
    </b-alert>
  </div>
</template>

<script>
export default {
  name: "saludo",
  data() {
    return {
      saludo: "Hola",
      client: { name: "Diana", last_name: "Marrufo" }
    };
  },
  methods: {
    saludo() {
      return "Hola es un saludo";
    }
  }
};
</script>

<style></style>
