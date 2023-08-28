const express = require("express");
const bodyParser = require("body-parser");
const { verifyAToken } = require;
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
  wishlist,
  cart,
} = require("../model");


routes.get("/users", (req, res) => {
    users.fetchUsers(req, res);
  });
  routes.get("/user/:id", (req, res) => {
    users.fetchUser(req, res);
  });
  routes.post("/register", bodyParser.json(), (req, res) => {
    users.register(req, res);
  });
  routes.put("/user/:id", bodyParser.json(), (req, res) => {
    users.updateUser(req, res);
  });
  routes.delete("/user/:id", (req, res) => {
    users.deleteUser(req, res);
  });
  routes.get("")

  routes.post('/login',
  bodyParser.json(), (req, res)=>{
      users.login(req, res)
  });