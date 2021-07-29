<template>
  <v-footer dark padless color="primary">
    <v-container>
      <div class="footer">
        <div class="logo">
          <div class="logo__title">SHOP.ME</div>
          <div>
            <v-btn height="30" icon text rounded v-for="(link, i) in socials" :key="i" target="_blank" :href="link.to">
              <v-icon small>{{ link.icon }}</v-icon>
            </v-btn>
          </div>
        </div>

        <div class="category">
          <div v-for="(c, i) in category" :key="i">{{ c.title }}</div>
        </div>

        <div class="category">
          <div v-for="(c, i) in trending" :key="i">{{ c.title }}</div>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    socials: [
      { icon: 'mdi-facebook', to: 'https://www.facebook.com' },
      { icon: 'mdi-youtube', to: 'https://www.youtube.com' },
      { icon: 'mdi-instagram', to: 'https://www.instagram.com' },
      { icon: 'mdi-twitter', to: 'https://www.twitter.com' },
    ],
    category: [
      { title: 'Jeans' },
      { title: 'T-Shirts' },
      { title: 'Shirts' },
      { title: 'Sweatshirts' },
      { title: 'Jackets' }
    ],
    trending: [
      { title: 'Jeans' },
      { title: 'T-Shirts' },
      { title: 'Shirts' },
      { title: 'Sweatshirts' },
      { title: 'Jackets' }
    ]
  })
}
</script>


<style>
.footer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(31%, 1fr));
  grid-gap: 12px;
}
</style>