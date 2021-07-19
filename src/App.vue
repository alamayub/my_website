<template>
  <v-app>
    <Login />
    <Navbar />
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';
import Login from './components/Login.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar, Login, Footer },
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
  /* background: rgb(237 235 240 / 40%); */
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
  grid-template-columns: repeat(auto-fit, minmax(18%, 1fr));
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
@media (max-width: 960px) {
  .products {
    grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
    grid-gap: 12px;
  }
}
@media (max-width: 750px) {
  .products { grid-template-columns: repeat(auto-fit, minmax(32%, 1fr)); }
}
@media (max-width: 550px) {
  .products { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }
}
</style>