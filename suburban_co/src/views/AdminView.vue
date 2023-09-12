<template>
    <div class="about">

  <h1>ADMIN</h1>
  <br>
  <div class="container">
      <div class="table-responsive" style="margin-top: 1rem">
        <table class="table products">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
            </tr>
        </thead>
        <tbody v-for="product in products" :key="product.product_id">
            <tr>
                <td >{{ product.product_name }}</td>
              <td>{{ product.price }}</td>
              <td>
                <img
                :src="product.image_url"
                :alt="product.product_id"
                style="width: 5rem"
                />
            </td>
            <td><button>Edit</button></td>

              <td><button class="btn" type="button" @click="deleteProduct(product.product_id)">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div> 
    </div> 
  <br>
  <br>
      <h1>USERS</h1>
      <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Add</button> -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
       Add User
      </button>
  <div class="container">
      <div class="table-responsive" style="margin-top: 1rem" v-if="products">
          <table class="table users">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Role</th>
                <th scope="col">Email</th>
                <th scope="col">Image</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody v-for="user in users" :key="user.user_id">
              <tr>
                <th>{{ user.first_name }}</th>
                <td>{{ user.last_name }}</td>
                <td>{{ user.user_role }}</td>
                <td>{{ user.email }}</td>
                <td>
                  <img
                    :src="user.image_url"
                    :alt="user.first_name"
                    style="width: 5rem"
                  />
                </td>
                <td><button>Edit</button></td>
                <td><button class="btn" type="button" @click="deleteUser(user.user_id)">Delete</button></td>
              </tr>
            </tbody>
          </table>
          
        </div>  
    </div>
        <!-- <div class="else" v-else>
          <Spinner/>
        </div> -->
        <!-- Button trigger modal -->

  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form @submit.prevent="addFormUser" class="d-flex flex-column gap-5">
                <!-- <input type="text" v-model="userData.first_name" placeholder="name" name="" id="">
                <input type="text" v-model="userData.last_name" placeholder="surname" name="" id="">
                <input type="text" v-model="userData.user_role" placeholder="role" name="" id="">
                <input type="text" v-model="userData.email" placeholder="email" name="" id="">
                <input type="text" v-model="userData.user_password" placeholder="password" name="" id="">
                <input type="text" v-model="userData.image_url" placeholder="image" name="" id=""> -->

                <button type="submit" class="btn">Add</button>
               </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Send message</button>
        </div>
      </div>
    </div>
  </div>
    
      </div>
  </template>

<script>



export default {
 computed: {
   products() {
     return this.$store.state.products;
   },
   users(){
       return this.$store.state.users;
   }
 },
 mounted() {
   this.$store.dispatch("fetchProducts");
   this.$store.dispatch("fetchUsers");
 },
 components:{
   
   //  HeaderComp
  },
  methods: {
    // addProduct() {
    //     this.$store.dispatch('addProduct', this.payload)
    // },
    deleteProducts(product_id) {
       this.$store.dispatch('deleteProducts', product_id)
   },
   deleteUser(user_id) {
       this.$store.dispatch('DeleteUsers', product_id)
   }
  }
};
</script>


<style scoped>

</style>