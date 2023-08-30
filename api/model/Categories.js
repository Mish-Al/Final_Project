const db = require("../config/config");


class Categories { 


  fetchCategories(req, res) {
    const query = `
      SELECT *
      FROM Categories;
    `;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchCategory(req, res) {
    const query = `
      SELECT *
      FROM Categories
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

  addCategory(req, res) {
    const data = req.body;
    const query = `
      INSERT INTO Categories
      SET ?;
    `;

    db.query(query, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Successfully Added",
      });
    });
  }
}

module.exports = Categories