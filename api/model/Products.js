const db = require("../config/config");

class Products { 
    fetchProducts(req, res) {
        const query = `
        SELECT product_id, product_name, price, catergory_id, brand_id, size_id
        FROM Products;
        `
        db.query(query, 
            (err, results) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
            })
    };

    fetchProduct(req, res) {
        const query = `
        SELECT product_id, product_name, price, catergory_id, brand_id, size_id
        FROM Products
        WHERE product_id = ${req.params.id};
        `
        db.query(query, 
            (err, result) => {
                res.json({
                    status: res.statusCode,
                    result
                })
            })
    };

    addProduct(req, res) {
        const query = `
            INSERT INTO Products 
            SET ?;
        `
        db.query(query, [req.body],
             (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg:"Successfully Added"
            })
        })
    };

    updateProducts(req, res) {
        const query =`
        UPDATE Products 
        SET ?
        WHERE product_id = ${req.params.id};
        `
        db.query(query, [req.body],
            (err) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Update Successful"
            })
        })
    };

    deleteProducts(req, res) {
        const query = `
        DELETE FROM Products 
        WHERE product_id = ?
        `;
        db.query(query,[req.params.id],
            (err, results) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
}

module.exports = Products