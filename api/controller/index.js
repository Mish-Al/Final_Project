const express = require("express");
const { verifyAToken } = require('../middleware/AuthenticateUser');
const routes = express.Router();
const {
  users,
  products,
  categories,
  brands,
  sizes,
  orders,
  order_items,
  payment_methods,
  reviews,
  images,
  cart
} = require("../model");

  // <====== User Routes =====>
routes.get("/users", (req, res) => {
    users.fetchUsers(req, res)
  });
routes.get("/user/:id", (req, res) => {
    users.fetchUser(req, res)
  });
 routes.post("/registerUser", (req, res) => {
    users.register(req, res)
  });
routes.put("/user/:id", (req, res) => {
    users.updateUser(req, res)
  });
routes.patch("/user/:id", (req, res) => {
    users.updateUser(req, res)
  });
routes.delete("/user/:id", (req, res) => {
    users.deleteUser(req, res)
  });
routes.post('/login',
   (req, res)=>{
      users.login(req, res)
  });

  // <====== Product Routes =====>
routes.get("/products", (req, res) => {
  products.fetchProducts(req, res)
});
routes.get("/product/:id", (req, res) => {
  products.fetchProduct(req, res)
});
routes.post("/product",  (req, res) => {
  products.addProduct(req, res)
});
routes.put("/products/:id",  (req, res) => {
  products.updateProduct(req, res)
});
routes.patch("/products/:id", (req, res) => {
  products.updateProduct(req, res)
});
routes.delete("/products/:id", (req, res) => {
  products.deleteProduct(req, res)
});

  // <====== Brands Routes =====>
routes.get("/brands", (req, res) => {
  brands.fetchBrands(req, res)
});
routes.get("/brands/:id", (req, res) => {
  brands.fetchBrand(req, res)
})
routes.post("/brands", (req, res) => {
  brands.addBrand(req, res)
});
routes.patch("/brands/:id", (req, res) => {
  brands.update(req, res)
});

 
// <====== Sizes Routes =====>
routes.get("/sizes", (req, res) => {
  sizes.fetchSizes(req, res)
});
routes.get("/sizes/:id", (req, res) => {
  sizes.fetchSize(req, res)
});
routes.post("/sizes", (req, res) => {
  sizes.addSize(req, res)
});


// <==== Category Routes ====>
routes.get('/categories', (req, res) => {
  categories.fetchCategories(req, res)
});
routes.get('/categories/:id', (req, res) => {
  categories.fetchCategory(req, res)
});
routes.post("/categories", (req, res) => {
  categories.addCategory(req, res)
});


// <==== Cart Routes ====>
routes.get("/cart", (req, res) => {
  cart.fetchCarts(req, res)
});
routes.get("/cart/:id", (req, res) => {
  cart.fetchCart(req, res)
});
routes.post("/cart", (req, res) => {
  cart.addCart(req, res)
});
routes.put("/cart/:id", (req, res) => {
  cart.updateCart(req, res)
});
routes.patch("/cart/:id", (req, res) => {
  cart.updateCart(req, res)
});
routes.delete("/cart/:id", (req, res) => {
  cart.deleteCart(req, res)
});

// <==== Orders Routes ====>
routes.get("/orders", (req, res) => {
  orders.fetchOrders(req, res)
});
routes.get("/orders/:id", (req, res) => {
  orders.fetchOrder(req, res)
});
routes.post("/orders", (req, res) => {
  orders.addOrder(req, res)
});

// <==== Order_Items Routes ====>
routes.get("/order_items", (req, res) => {
  order_items.fetchOrders(req, res)
});
routes.get("/order_item/:id", (req, res) => {
  order_items.fetchOrder(req, res)
});
routes.post("/order_item", (req, res) => {
  order_items.addOrder(req, res)
});

// <==== Payment Routes ====>
routes.get("/payment_methods", (req, res) => {
  payment_methods.fetchOrders(req, res)
});
routes.get("/payment_methods/:id", (req, res) => {
  payment_methods.fetchPayment(req, res)
});
routes.post("/payment_methods", (req, res) => {
  payment_methods.addPayment(req, res)
});

// <==== Reviews Routes ====>
routes.get("/reviews", (req, res) => {
  reviews.fetchReviews(req, res)
});
routes.get("/review/:id", (req, res) => {
  reviews.fetchReview(req, res)
});
routes.post("/reviews", (req, res) => {
  reviews.addReview(req, res)
});

// <==== Images Routes ====>
routes.get("/images", (req, res) => {
  images.fetchImages(req, res)
});
routes.get("/image/:id", (req, res) => {
  images.fetchImage(req, res)
});
routes.post("/images", (req, res) => {
  images.addImage(req, res)
})


  module.exports = {
   express,
   routes,
   verifyAToken
}
