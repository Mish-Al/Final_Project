const Users = require('/Users')
const Orders = require('/Orders')
const Products = require('/Products')
const Brands = require('./Brands')
const Categories = require('/Catergories')
const Order_Items = require('./Order-items')
const Payment_Methods = require('./Payment_Methods')
const Reviews = require('./Reviews')
const Sizes = require('./Sizes')
const Images = require('./Images')
const Wishlist = require('./Wishlist')

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
    wishlist: new Wishlist()
}