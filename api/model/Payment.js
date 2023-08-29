const db = require("../config");


class Payment_Methods { 


  fetchPayment(req, res) {
    const query = `
      SELECT *
      FROM Payment_Methods;
    `;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchPayment(req, res) {
    const query = `
      SELECT *
      FROM Payment_Methods
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
  addPayment(req, res) {
    const data = req.body;
    const query = `
      INSERT INTO Payment_Methods
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

module.exports = Payment_Methods