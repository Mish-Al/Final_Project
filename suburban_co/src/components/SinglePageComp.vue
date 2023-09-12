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
            <h1 class="card-title" style="margin-top: 4rem;">{{ $route.query.product_name }}</h1>
            <h5 class="card-title">{{ $route.query.price }}</h5>
            <div class="container">
              <p class="card-text">{{ $route.query.product_info }}</p></div>
              <button class="btn" @click="addToCart(product)">add to cart</button>
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

.card-body{
  height: 65vh;
}

.card-text{
  width: 100%;
  
}
.btn{
  margin-top: 2rem;
  background-color: #212529;
  border: 3px ridge #495057;
  color: #E9ECEF;
}
.btn:hover{
  background-color: #CED4DA;
  color: #495057;
  border: 3px ridge #E9ECEF;
}
.card-title{
  width: 100%;
}

img {
  width: 25rem;
  height: 26rem;
  object-fit: contain;
}

@media screen and (max-width: 700px) {
  img {
    width: 15rem;
    height: 17rem;
    margin-top: 2rem;
  }
  .card-body{
    height: 43%;
  }
  .card-text{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}
</style>