<template>
  <v-app>
    <login />
    <navbar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Login from './components/Login.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar, Login },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>


<style>
html { scroll-behavior: smooth; }
body {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
}
* { text-decoration: none; }
.container {
  max-width: 1450px !important;
  margin-right: auto !important;
  margin-left: auto !important;
  padding: 12px;
}

/* Products */
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
  grid-gap: 16px;
}
.product {
  display: block;
  position: relative;
}
.product__img img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 30px !important;
  min-width: 64px;
}
@media (max-width: 900px) {
  .products {
    grid-template-columns: repeat(auto-fit, minmax(31%, 1fr));
    grid-gap: 12px;
  }
}
@media (max-width: 550px) {
  .products {
    grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
    grid-gap: 12px;
  }
}
</style>