<template>
  <div class="products__div">
    <div class="container">
      <div class="products">
        <div class="product" v-for="(p, i) in products" :key="i" data-aos="zoom-in">
          <div class="product__img">
            <img :src="p">
          </div>
          <div class="product__desc pa-3">
            <div class="product__type text-uppercase font-weight-bold" data-aos="fade-left">dress</div>
            <div class="product__title text-capitalize" data-aos="fade-right">Kurti dress for multiple ocation</div>
            <div class="product__price" data-aos="fade-left">
              <span>Rs.999</span>&nbsp;<i>Rs.1250</i>&nbsp;<span class="amber--text"><i>(25% off)</i></span>
            </div>
          </div>
        </div>
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