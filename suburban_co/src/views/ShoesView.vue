<template>
  <div>
    <nav class="navbar navbar-expand">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/products" class="nav-link">All</router-link>
            <router-link to="/upper" class="nav-link">Upper</router-link>
            <router-link to="/lower" class="nav-link">Lower</router-link>
            <router-link to="/shoes" class="nav-link">Shoes</router-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="my-5 container">
      <div
        class="row"
        style="margin-top: 3rem; font-family: 'Merriweather', serif"
        v-if="shoes"
      >
        <div
          class="car col-12 col-sm-6 col-md-4 p-2"
          v-for="product in shoes"
          :key="product.product_id"
        >
          <img
            :src="product.image_url"
            :alt="product.product_name"
            style="width: 14rem; height: 18rem"
            loading="lazy"
          />
          <div class="card-body">
            <br />
            <h5 class="card-title">{{ product.product_name }}</h5>
            <h5 class="card-title">{{ product.price }}</h5>
            <router-link
              :to="{
                name: 'single',
                params: { id: product.product_id },
                query: {
                  product_name: product.product_name,
                  product_info: product.product_info,
                  img: product.image_url,
                  price: product.price,
                },
              }"
              class="btn"
              >View More</router-link
            ><span>
              <button class="btn" @click="addToCart(product)">
                Buy Now
              </button></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SpinnerComp from "@/components/SpinnerComp.vue";
export default {
  components: {
    SpinnerComp,
  },
  computed: {
    shoes() {
      return this.$store.state.shoes;
    },
  },
  mounted() {
    this.$store.dispatch("fetchShoes");
  },
};
</script>

<style scoped>
img {
  width: 20rem;
  height: 20.5rem;
  object-fit: contain;
}
.collapse {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-link {
  margin: 5px;
  border-bottom: 3px ridge;
}
</style>