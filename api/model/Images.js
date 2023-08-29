const db = require("../config");


class Images { 


  fetchImages(req, res) {
    const query = `
      SELECT *
      FROM Images;
    `;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchImage(req, res) {
    const query = `
      SELECT *
      FROM Images
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

  addImage(req, res) {
    const data = req.body;
    const query = `
      INSERT INTO Images
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

module.exports = Images