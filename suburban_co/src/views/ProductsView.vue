<template>
    <div>
        <!-- <button href="/upper"></button> -->
        <section class="upper" v-for="product in products" :key="product.product_id">
        <div class="card">
            <div class="card-body">
                <h4 class="card-head">{{ product.product_name }}</h4>
                <p class="card-text">{{ product.price }}</p>
            </div>
        </div>
        <div class="card-head" v-for="image in images" :key="image.image_id">
                <img :src="images.image_url" :alt="image.product_id">
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
            products() {
                return this.$store.state.products
            },
            images() {
                return this.$store.state.images
            },
        },
        mounted() {
            this.$store.dispatch("fetchProducts")
            this.$store.dispatch("fetchImages")
        },     
}

</script>

<style scoped>

</style>