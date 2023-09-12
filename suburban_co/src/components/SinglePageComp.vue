<template>
    <div class="container">
      <div class="row" style="margin-top: 3rem display: flex; justify-content: center; align-items: center;">
        <div class="card-head col-12 col-md-6">
          <img
            :src="$route.query.img"
            :alt="$route.query.img"
            loading="lazy"
          />
        </div>
         
          <div class="card-body col-12 col-md-6">
            <h3 class="card-title" style="width: 100%; margin-top: 4rem;">{{ $route.query.product_name }}</h3>
            <h5 class="card-title" style="width: 100%;">{{ $route.query.price }}</h5>
              <p class="card-text" style="width: 100%;">{{ $route.query.product_info }}</p>
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
.card-body{
  height: 65vh;
}

img {
  width: 25rem;
  height: 26rem;
}

@media screen and (max-width: 500px) {
  img {
    width: 15rem;
    height: 17rem;
    margin-top: 2rem;
  }
  .card-body{
    height: 43vh;
  }
}
</style>