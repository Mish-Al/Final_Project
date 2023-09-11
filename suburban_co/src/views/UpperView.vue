<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
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
        <section class="upper" v-for="product in upper" :key="product.product_id">
        <div class="card">
            <div class="card-head">
                <img :src="product.image_url" :alt="product.product_name">
            </div>
            <div class="card-body">
                <h4 class="card-head">{{ product.product_name }}</h4>
                <p class="card-text">{{ product.price }}</p>
            </div>
        </div>
    </section>
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
            upper() {
                return this.$store.state.upper
            },
        },
        mounted() {
            this.$store.dispatch("fetchUpper")
        },     
}

</script>

<style scoped>
img {
    width: 20rem;
    height: 20.5rem;
    object-fit: contain;
}
.collapse{
    display: flex;
    justify-content: center;
    align-items: center;
}
.upper{
    display: flex;
    justify-content: center;
}
</style>