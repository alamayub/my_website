<template>
  <div class="products__div">
    <div class="container">
      <div class="products">
        <ItemCard v-for="(p, i) in products" :key="i" :p="p" />
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  data: () => ({
    products: [
      require('../assets/img/img.webp'),
      require('../assets/img/img0.webp'),
      require('../assets/img/img1.jpg'),
      require('../assets/img/img1.webp'),
      require('../assets/img/img2.webp'),
      require('../assets/img/img2.jpg'),
      require('../assets/img/img3.webp'),
      require('../assets/img/img4.webp'),
      require('../assets/img/img5.jpg'),
      require('../assets/img/img6.webp'),
      require('../assets/img/img6.jpg'),
      require('../assets/img/img7.jpg')
    ]
  })
}
</script>

<style scoped>
.product {
  transition: 250ms;
  overflow: hidden;
  cursor: pointer;
}
.product:hover {
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 20%);
}
.product__desc {
  font-family: 'Poppins', sans-serif;
  line-height: 1;
  border-bottom: .5px solid rgb(0 0 0 / 10%);
  border-left: .5px solid rgb(0 0 0 / 10%);
  border-right: .5px solid rgb(0 0 0 / 10%);
}
.product__title {
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 6px 0;
  font-weight: lighter;
  color: #535766;
}
.product__price { 
  font-size: 12px;
  font-weight: 100; 
  color: #535766;
}
.product__price span:first-child { 
  font-size: 14px;
  font-weight: 600; 
  color: black !important;
}
</style>