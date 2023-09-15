<template>
  <div class="about" style="color: #6C757D">
    <h1>Admin</h1>
    <br />
    <button
      type="button"
      style="margin-bottom: 1rem"
      class="btn"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add User
    </button>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">New User</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
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
              <br>
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
              <br>
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
              <br>
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
              <br>
              <div class="form-control-wrapper">
                <span class="inline">
                  <input
                    type="text"
                    class="form-control"
                    v-model="payload.image_url"
                  />
                </span>
              </div>
            </form>
            <!-- <button type="submit" class="btn">Add</button> -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" class="btn btn-success">
                    Submit
                    <!-- <span
                      v-show="spinner"
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span> -->
                  </button>          </div>
        </div>
      </div>
    </div>
    <br>
    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Add</button> -->
    <!-- <button type="button" style="margin-bottom: 1rem;" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
       Add User
      </button> -->
    <div
      class="container"
      style="
        border: 5px double #ced4da;
        border-radius: 1rem;
        width: 80%;
        margin-bottom: 1rem;
      "
    >
      <div class="table-responsive" style="margin-top: 1rem; border-radius: 1rem;" v-if="users">
        <table class="table users" style="border: 3px  #6C757D">
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
              <td>
                <button class="btn"><i class="bi bi-pen"></i></button>
              </td>
              <td>
                <button
                  class="btn"
                  type="button"
                  @click="deleteUser(user.user_id)"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <br />
    <br />
    <p></p>
    <br />
    <button
      type="button"
      style="margin-bottom: 1rem"
      class="btn"
      data-bs-toggle="modal"
      data-bs-target="#MishProd"
    >
      Add Product
    </button>
    <div
      class="modal fade"
      id="MishProd"
      tabindex="-1"
      aria-labelledby="MishProdLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="MishProd">New Product</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="form">
              <div class="form-control-wrapper">
                <span class="inline">
                  <input
                    type="name"
                    class="form-control"
                    placeholder="Product Name"
                    v-model="prodpayload.product_name"
                    required
                  />
                </span>
              </div>
              <br>
              <div class="form-control-wrapper">
                <span class="inline">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Price"
                    v-model="prodpayload.price"
                    required
                  />
                </span>
              </div>
              <br>
              <div class="form-control-wrapper">
                <span class="inline">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Image"
                    v-model="prodpayload.image_url"
                    required
                  />
                </span>
              </div>
              <br>
              <div class="form-control-wrapper">
                <span class="inline">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Product Info"
                    v-model="prodpayload.product_info"
                  />
                </span>
              </div>
              <br>
            </form>
            <!-- <button type="submit" class="btn">Add</button> -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button @click="addProduct" type="submit" class="btn btn-success">
                    Submit
                    <!-- <span
                      v-show="spinner"
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span> -->
                  </button>          </div>
        </div>
      </div>
    </div>
    <div
      class="container"
      style="
        border: 5px double #ced4da;
        border-radius: 1rem;
        width: 80%;
        margin-bottom: 1rem;
      "
    >
      <div class="table-responsive" style="margin-top: 1rem; border-radius: 1rem;">
        <table class="table products"  style="border: 3px  #6C757D">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody v-for="product in products" :key="product.product_id">
            <tr>
              <td>{{ product.product_name }}</td>
              <td>{{ product.price }}</td>
              <td>
                <img :src="product.image_url" :alt="product.product_id" />
              </td>
              <td>
                <button class="btn"><i class="bi bi-pen"></i></button>
              </td>

              <td>
                <button
                  class="btn"
                  type="button"
                  @click="deleteProduct(product.product_id)"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
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
      prodpayload: {
        product_name: "",
        product_info: "",
        price: "",
        image_url: "",
      }
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },
  components: {
    //  HeaderComp
  },
  methods: {
    addProduct() {
      this.$store.dispatch('addProductmain', this.prodpayload)
      console.log(this.prodpayload);
      },
      reloading() {
      location.reload()
    },
    deleteProduct(product_id) {
      this.$store.dispatch("deleteProduct", product_id);
    },
    deleteUser(user_id) {
      this.$store.dispatch("deleteUser", user_id);
    },
  },
};
</script>


<style scoped>
img {
  width: 15rem;
}
.btn {
  background-color: #212529;
  border: 2px ridge #495057;
  color: #e9ecef;
  margin: 4px;
  /* width: 4rem; */
}
.table {
  background-color: #e9ecef;
}

.btn:hover {
  background-color: #ced4da;
  color: #495057;
  border: 2px ridge #e9ecef;
}
</style>