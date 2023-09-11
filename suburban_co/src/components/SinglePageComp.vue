<template>
    <div>
      <div class="row" style="margin-top: 3rem display: flex; justify-content: center; align-items: center;">
        <div
        >
          <img
            :src="$route.query.img"
            :alt="$route.query.img"
            style="width:14rem;height:18rem;"
            loading="lazy"
          />
          <div class="card-body">
            <br />
            <h5 class="card-title">{{ $route.query.product_name }}</h5>
            <h5 class="card-title">{{ $route.query.price }}</h5>
            <p class="card-text">{{ $route.query.product_info }}</p>
          </div>
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
</style>