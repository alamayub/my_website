<template>
  <v-app-bar app color="primary" dark elevate-on-scroll>
    <div class="logo">
      <span>SHOP.ME</span>
    </div>
    <v-spacer></v-spacer>
    <div class="links">
      <v-btn height="30" :icon="screen" text rounded v-for="(link, i) in links" :key="i" :to="link.to" class="px-5">
        <span v-if="!screen">{{ link.name }}</span>
        <v-icon small v-if="screen">{{ link.icon }}</v-icon>
      </v-btn>
    </div>
    <v-spacer></v-spacer>
      <div class="log__btn">
        <v-btn class="white primary--text" rounded width="150" @click="login">
        <span>login</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Home', to: '/', icon: 'mdi-home' },
      { name: 'Products', to: '/products', icon: 'mdi-sitemap' },
      { name: 'Trending', to: '/trending', icon: 'mdi-trending-up' }
    ]
  }),
  methods: {
    login() {
      this.$store.commit('SET_LOGIN_DIALOG', true)
    }
  },
  computed: {
    screen() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
        case 'sm': return false
        case 'md': return false
        default: return false
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

span {
  text-transform: capitalize; 
  font-size: 13px !important;
}
.logo span {
  font-size: 16px !important;
  font-style: oblique;
  font-weight: bold !important;
}
</style>