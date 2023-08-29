const db = require("../config/config");


class Cart { 


  fetchCarts(req, res) {
    const query = `
      SELECT *
      FROM Cart;
    `;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchCart(req, res) {
    const query = `
      SELECT *
      FROM Cart
      WHERE id = ?;
    `

    db.query(query, [req.params.id], (err, result) => {
      if (err) throw err
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  addCart(req, res) {
    const data = req.body;
    const query = `
      INSERT INTO Cart
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
  deleteCart(req, res) {
        const query = `
        DELETE FROM Cart 
        WHERE cart_id = ?
        `;
        db.query(query,[req.params.id],
            (err, results) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Item Deleted"
            })
        })
    }
    updateCart(req, res) {
        const query = `
        UPDATE Cart
        SET ?
        WHERE cart_id = ?
        `
        db.query(query,
            [req.body, req.params.id],
            (err) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "Update Successful"
                })
            })
    };
}

module.exports = Cart