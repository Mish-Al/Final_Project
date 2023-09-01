const db = require("../config/config");


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
      WHERE image_id = ?;
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

  
  deleteImage(req, res) {
    const query = `
    DELETE FROM Images
    WHERE image_id = ?;
    `
    db.query(query, 
        (err) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Image Deleted"
            })
        })
};
updateImage(req, res) {
  const query =`
  UPDATE Images 
  SET ?
  WHERE image_id = ${req.params.id};
  `
  db.query(query, [req.body],
      (err) => {
      if(err) throw err
      res.json({
          status: res.statusCode,
          msg: "Update Successful"
      })
  })
};

}

module.exports = Images