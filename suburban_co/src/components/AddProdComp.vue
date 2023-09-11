<template>
    <div class="container">
      <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Product
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title fs-5" id="exampleModalLabel">Add New Product</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <div class="modal-body" @submit.prevent = "addProduct">
              <p>Name</p>
              <input  v-model="newProd.prodName" id="name" type="text" placeholder="Enter the name of product" class="intpName w-100">
              <p>Price</p>
              <input v-model="newProd.amount" id="price" type="text" placeholder="Enter the price" class="intpPrice w-100">
              <p>Image</p>
              <input v-model="newProd.prodUrl" id="img" type="url" placeholder="Enter the Image url" class="intpImg w-100">
              <p>Quantity</p>
              <input v-model="newProd.quantity" id="description" type="text" placeholder="Enter the description" class="intpDescr w-100">
            </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn">Add</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      newProd: {
        prodID: "",
        prodName: "",
        price: 0,
        image: "",
        quantity: 0,
      },
    };
  },

  methods: {
    addProduct() {
      this.$store.dispatch("addProduct", this.newProd);
    },
  },
};
</script>

<style scoped>

</style>