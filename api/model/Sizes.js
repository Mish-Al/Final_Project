const db = require("../config");


class Sizes { 


  fetchSizes(req, res) {
    const query = `
      SELECT size_name
      FROM Sizes;
    `;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchSize(req, res) {
    const query = `
      SELECT size_name
      FROM Sizes
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

  addSize(req, res) {
    const data = req.body;
    const query = `
      INSERT INTO Sizes
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

module.exports = Sizes