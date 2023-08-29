const db = require("../config");


class Categories { 


  fetchCategories(req, res) {
    const query = `
      SELECT category_name
      FROM Catergories;
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
      SELECT category_name
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
}

module.exports = Categories