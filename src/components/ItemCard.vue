<template>
  <div class="product" data-aos="zoom-in">
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
</template>

<script>
export default {
  props: {
    p: String  
  }  
}
</script>