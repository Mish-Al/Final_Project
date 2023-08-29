const Users = require('./Users.js')
const Orders = require('./Orders.js')
const Products = require('./Products.js')
const Brands = require('./Brands.js')
const Categories = require('./Categories.js')
const Order_Items = require('./OrderItems')
const Payment_Methods = require('./Payment.js')
const Reviews = require('./Reviews')
const Sizes = require('./Sizes')
const Images = require('./Images')
const Cart = require('./Cart')

module.exports = {
    users: new Users(),
    orders: new Orders(),
    products: new Products(),
    brands: new Brands(),
    categories: new Categories(),
    order_items: new Order_Items(),
    payment_methods: new Payment_Methods(),
    reviews: new Reviews(),
    sizes: new Sizes(),
    images: new Images(),
    cart: new Cart()
}