const db = require("../config/config");


class Brands { 


  fetchBrands(req, res) {
    const query = `
      SELECT *
      FROM Brands;
    `;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchBrand(req, res) {
    const query = `
      SELECT *
      FROM Brands
      WHERE brand_id = ?;
    `;

    db.query(query, [req.params.id], (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }

  addBrand(req, res) {
    const data = req.body;
    const query = `
      INSERT INTO Brands
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

  update(req, res) {
    const query = `
      UPDATE Brands
      SET ?
      WHERE brand_id = ?;
    `;

    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Update Successful",
      });
    });
  }

//   deleteBrand(req, res) {
//     const query = `
//       DELETE FROM Brands
//       WHERE id = ?; 
//     `;

//     db.query(query, [req.params.id], (err) => {
//       if (err) throw err;
//       res.json({
//         status: res.statusCode,
//         msg: "Record Deleted",
//       });
//     });
//   }
}

module.exports = Brands