<template>
    <div class="about">

  <h1>ADMIN</h1>
  <br>
  <button type="button" style="margin-bottom: 1rem;" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
       Add Product
      </button>
  <div class="container" style="border: 5px double #DEE2E6; border-radius: 1rem; width: 80%;">
      <div class="table-responsive" style="margin-top: 1rem;">
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
                />
            </td>
            <td><button class="btn">Edit</button></td>

              <td><button class="btn" type="button" @click="deleteProduct(product.product_id)">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div> 
    </div> 
  <br>
  <br>
      <h1>USERS</h1>
      <br>
      <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Add</button> -->
      <!-- <button type="button" style="margin-bottom: 1rem;" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
       Add User
      </button> -->
  <div class="container"  style="border: 5px double #CED4DA; border-radius: 1rem; width: 80%; margin-bottom: 1rem;">
      <div class="table-responsive" style="margin-top: 1rem;" v-if="users">
          <table class="table users">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Role</th>
                <th scope="col">Email</th>
                <th scope="col">Image</th>
                <!-- <th scope="col">Edit</th>
                <th scope="col">Delete</th> -->
              </tr>
            </thead>
            <tbody v-for="user in users" :key="user.user_id">
              <tr>
                <td>{{ user.first_name }}</td>
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
                <td><button class="btn">Edit</button></td>
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
  
  <button type="button" style="margin-bottom: 1rem;" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
       Add User
      </button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form class="form" @submit.prevent="register">
          <div class="form-control-wrapper">
            <span class="inline">
              <input
                type="name"
                class="form-control"
                placeholder="First Name"
                v-model="payload.first_name"
                required
              />
            </span>
          </div>
          <div class="form-control-wrapper">
            <span class="inline">
              <input
                type="surname"
                class="form-control"
                placeholder="Last Name"
                v-model="payload.last_name"
                required
              />
            </span>
          </div>
          <div class="form-control-wrapper">
            <span class="inline">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                v-model="payload.email"
                required
              />
            </span>
          </div>
          <div class="form-control-wrapper">
            <span class="inline">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                minlength="4"
                maxlength="12"
                v-model="payload.user_password"
              />
            </span>
          </div>
          <div class="form-control-wrapper">
            <span class="inline">
              <input
                type="text"
                class="form-control"
                v-model="payload.image_url"
              />
            </span>
          </div>
          <div class="form-control-wrapper">
            <div class="col">
              <button type="submit" class="btn btn-success">
                Submit
                <span
                  v-show="spinner"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
        </form>
            <!-- <button type="submit" class="btn">Add</button> -->
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
    data() {
    return {
      payload: {
        first_name: "",
        last_name: "",
        email: "",
        user_password: "",
        image_url: "https://i.postimg.cc/3rZ0H0D8/profile-Image.png",
      },
    };
  },
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
    DeleteProducts(product_id) {
       this.$store.dispatch('DeleteProducts', product_id)
   },
   DeleteUsers(user_id) {
       this.$store.dispatch('DeleteUsers', user_id)
   }
  }
};
</script>


<style scoped>
img{
    width: 15rem;
}
.btn{
  background-color: #212529;
  border: 2px ridge #495057;
  color: #E9ECEF;
  margin: 4px;
  /* width: 4rem; */
}
.btn:hover{
  background-color: #CED4DA;
  color: #495057;
  border: 2px ridge #E9ECEF;
}
</style>