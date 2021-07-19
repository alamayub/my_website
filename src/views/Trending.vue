<template>
  <div class="products__div">
    <div class="container">
      <div class="products">
        <div class="product" v-for="(p, i) in products" :key="i">
          <div class="product__img">
            <img :src="p">
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
      'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2020/9/16/25f5b6a7-ce25-4e66-8a61-3aa2037b6c741600207614629-1.jpg',
      'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8076725/2018/12/7/943ed6af-c315-4119-8d0a-ac89311d55661544170431419-AKS-Women-Dresses-7841544170430220-1.jpg',
      'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13435636/2021/1/22/f6914028-82fa-4187-90a4-1867d8eac3a11611296894583IndoEraGreenEmbroideredkurtaPalazzowithDupattaSetsDressesDee1.jpg',
      'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11364418/2020/1/28/8e31363f-8ac5-4669-9aa8-114d502d7be61580207577109-SASSAFRAS-Women-Maroon-Solid-Tiered-Maxi-Dress-3781580207574-1.jpg',
      'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11364432/2020/1/24/47d6a27d-2e5e-45e9-85ef-a9a5ebf417a11579852235194-SASSAFRAS-Women-Olive-Green-Printed-A-Line-Dress-73115798522-1.jpg',
      'https://i.pinimg.com/originals/a0/59/23/a05923a8ec8e3967a17f015f5c2d2314.jpg',
      'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/12826890/2020/11/20/3a2f3107-1d07-4072-a1a7-5cea432d9d791605865044963-Maaesa-Women-Grey--Orange-Printed-Tiered-A-Line-Dress-344160-1.jpg',
      'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2242503/2018/7/30/00fa54ff-cc59-4d9e-b618-34766946f2c81532942294504-Tokyo-Talkies-Women-Navy-Printed-Shirt-Dress-5291532942294350-1.jpg',
      'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2021/1/21/d08a474c-6631-4cc2-af75-276b8d18f3e21611231055095-1.jpg',
      'https://i.pinimg.com/originals/d2/46/56/d2465670fdf25ea043f59f7b6e782430.jpg',
      'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10715888/2019/10/4/2508fa85-67c7-4a65-8189-9ae68bba16cc1570190578307-Inddus-Women-Dresses-491570190576076-1.jpg'      
    ]
  })
}
</script>