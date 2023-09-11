const db = require("../config/config");

class Products {
  fetchProducts(req, res) {
    const query = `
        SELECT *
        FROM Products;
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchProduct(req, res) {
    const query = `
        SELECT *
        FROM Products
        WHERE product_id = ${req.params.id};
        `;
    db.query(query, (err, result) => {
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }

fetchProducts(req, res) {
  const { category } = req.query;
  let query = 'SELECT * FROM Products';

  if (category) {
    query += ` WHERE category_id = "${category}"`;
  }

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.json({
      status: res.statusCode,
      results,
    });
  });
}

fetchProductsByBrand(req, res) {
  const { brand_id } = req.query;
  let query = 'SELECT * FROM Products';

  if (brand_id) {
    query += ` WHERE brand_id = "${brand_id}"`;
  }

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.json({
      status: res.statusCode,
      results,
    });
  });
}

  fetchVans(req, res) {
    const query = `
        SELECT * FROM Products
        WHERE brand_id = "1";
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchNike(req, res) {
    const query = `
        SELECT * FROM Products
        WHERE brand_id = "2";
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchBalance(req, res) {
    const query = `
        SELECT * FROM Products
        WHERE brand_id = "3";
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchLevi(req, res) {
    const query = `
        SELECT * FROM Products
        WHERE brand_id = "4";
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  addProduct(req, res) {
    const query = `
            INSERT INTO Products
            SET ?;
        `;
    db.query(query, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Successfully Added",
      });
    });
  }

  updateProduct(req, res) {
    const query = `
        UPDATE Products 
        SET ?
        WHERE product_id = ${req.params.id};
        `;
    db.query(query, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Update Successful",
      });
    });
  }

  deleteProducts(req, res) {
    const query = `
        DELETE FROM Products 
        WHERE product_id =  ${req.params.id}
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
}

module.exports = Products;
