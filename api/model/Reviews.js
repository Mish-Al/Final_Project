const db = require("../config/config");


class Reviews { 


  fetchReviews(req, res) {
    const query = `
      SELECT *
      FROM Reviews;
    `;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchReview(req, res) {
    const query = `
      SELECT *
      FROM Reviews
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

  addReview(req, res) {
    const data = req.body;
    const query = `
      INSERT INTO Reviews
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

module.exports = Reviews