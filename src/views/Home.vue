<template>
  <div class="home">
    <!-- Banner -->
    <div class="primary banner">
      <div class="banner__content container">
        <!-- <div class="bottom">
          <v-btn color="#EDEBF0" text style="background-color: #EDEBF0;" class="mr-2">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-btn color="#EDEBF0" text style="background-color: #EDEBF0;">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </div> -->
      </div>
    </div>
    <div class="py-6 py-sm-8 py-md-10 py-lg-12">
      <div class="container">
        <!-- Category -->
        <div class="text-h4 text-center">Our Exclusive Collection</div>
        <div class="exclusive__collection my-5">
          <div v-for="(c, i) in category" :key="i">
            <img :src="c.img" :alt="c.name">
          </div>
        </div>

        <!-- Products -->
        <div class="mb-3 d-flex align-center justify-space-between">
          <div class="text-h4">Our Products</div>
          <v-btn color="primary" rounded outlined class="elevation-0 px-5">
            <span style="text-transform: capitalize; font-size: 13px !important;">more</span>
            <v-icon size="18" right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
        <div class="products">
          <div class="product" v-for="(p, i) in products" :key="i">
            <div class="product__img">
              <img :src="p">
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
    category: [
      { name: 'dress', img: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13719154/2021/3/5/3fda7627-9073-4702-a66e-f32f10bc64021614925061807-Athena-Fuchsia-Pink-dress-with-Balloon-puff-sleeves-81614925-1.jpg' },
      { name: 'glasses', img: 'https://pakistanipretwear.com/wp-content/uploads/2020/11/2-2.png' },
      { name: 'shoes', img: 'https://ae01.alicdn.com/kf/H31f1836ce9cf451d87ff8bc21a5474d1b/Sports-Running-Shoes-Kids-Girls-Sneakers-Teenager-Trainers-Breathable-Casual-Outdoor-Tennis-Shoes-Girl-Black-Pink.jpg' },
      { name: 'bags', img: 'https://ae01.alicdn.com/kf/HTB1HwD.K5LaK1RjSZFxq6ymPFXaW/Fashion-Backpack-Women-Leisure-Backpack-Girls-School-Bags-Casual-Canvas-Student-Backpack-Teenage-Girls-Children-Bags.jpg_640x640.jpg' }
    ],
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

<style scoped>
.banner { height: 80vh; }
.banner__content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Category */
.category {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15%, 1fr));
  grid-gap: 12px;
}

.exclusive__collection {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
}
.exclusive__collection img {
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
}
</style>