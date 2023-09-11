<template>
    <div>
      <div class="row" style="margin-top: 3rem display: flex; justify-content: center; align-items: center;">
        <div class="card-head col-6">
          <img
            :src="$route.query.img"
            :alt="$route.query.img"
            style="width:25rem;height:26rem;object-fit: contain;"
            loading="lazy"
          />
        </div>
         
          <div class="card-body col-6" style="height: 65vh;">
            <h5 class="card-title" style="width: 80%; margin-top: 4rem;">{{ $route.query.product_name }}</h5>
            <h5 class="card-title" style="width: 80%;">{{ $route.query.price }}</h5>
              <p class="card-text" style="width: 80%;">{{ $route.query.product_info }}</p>
              <button class="btn" @click="addToCart(product)">Buy Now</button>
          </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: ["product_id"],
    computed: {
      product () {
        return this.$store.state.product
      }
    }
  }
  </script>
  <style scoped>
h5 {
    font-family: 'Taviraj', serif;
    margin-bottom: 1rem;
}
h6 {
    font-family: 'Taviraj', serif;
}


@media screen and (min-width: 300px) {
  
}
</style>