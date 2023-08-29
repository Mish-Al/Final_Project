const db = require("../config/config");


class Order_Items { 


  fetchOrders(req, res) {
    const query = `
      SELECT *
      FROM Order_Items;
    `;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchOrder(req, res) {
    const query = `
      SELECT *
      FROM Order_Items
      WHERE id = ?;
    `

    db.query(query, [req.params.id], (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }

  addOrder(req, res) {
    const data = req.body;
    const query = `
      INSERT INTO Order_Items
      SET ?;
    `

    db.query(query, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Successfully Added",
      });
    });
  }

}

module.exports = Order_Items