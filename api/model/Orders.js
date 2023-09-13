const db = require('../config/config')

class Orders { 


  fetchOrders(req, res) {
    const query = `
      SELECT *
      FROM Orders;
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
      FROM Orders
      WHERE order_id = ?;
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
      INSERT INTO Orders
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

  deleteOrders(req, res) {
    const query = `
        DELETE FROM Orders 
        WHERE order_id =  ${req.params.id}
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

module.exports = Orders