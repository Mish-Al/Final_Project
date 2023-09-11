<template>
    <section class="upper" v-for="product in products" :key="product.category_id">
        <div class="card">

        </div>
    </section>
</template>

<script>
import axios from "axios";
import SpinnerComp from "@/components/SpinnerComp.vue";
    export default {
        SpinnerComp,

        computed: {
            products() {
                return this.$store.state.products
            },
        },
        mounted() {
            this.store.dispatch("fetchProducts")
        },
        methods: {
            fetchProducts() {
                axios.get("https://suburban-co.onrender.com/products").then((res) => {
                    console.log(res);
                })
            },
            
        }
    }
</script>

<style scoped>

</style>