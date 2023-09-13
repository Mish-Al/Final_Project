const db = require("../config/config")
const {hash, compare, hashSync} = require('bcrypt');
const {createToken} = require("../middleware/AuthenticateUser.js")

class Users {
    fetchUsers(req, res) {
        const query = `
        SELECT * FROM Users;
        `
        db.query(query,
            (err, results) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
            })
};

fetchUser(req, res) {
    const query = `
        SELECT user_id, first_name, last_name, email, phone, user_password, image_url
        FROM Users
        WHERE user_id = ${req.params.id};
        `
        db.query(query,
            (err, result) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    result
                })
            })
};

updateUser(req, res) {
    const query = `
    UPDATE Users
    SET ?
    WHERE user_id = ?
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

deleteUser(req, res) {
    const query = `
    DELETE FROM Users
    WHERE user_id = ${req.params.id}
    `
    db.query(query, 
        (err) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "User Deleted"
            })
        })
};

addUser(req, res) {
    const data = req.body;
    const query = `
      INSERT INTO Users
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

login(req, res) {
    const {email, user_password} = req.body
    const query = `
    SELECT  first_name, last_name, email, user_password, user_role
    FROM Users
    WHERE email = '${email}';
    `
    db.query(query, async (err, result) => {
        if(err) throw err
        if(!result?.length) {
            res.json({
                status: res.statusCode,
                msg: "Invalid Email"
            })
    } else {
       await compare(user_password,
            result[0].user_password,
            (cErr, cResult) => {
                if(cErr) throw cErr

                const token = createToken({
                    email,
                    user_password
                })

                if(cResult) {
                    res.json({
                        msg: "Login Successful",
                        token,
                        result: result[0]
                    })
                } else {
                    res.json({
                        status: res.statusCode,
                        msg: "Password not valid or Register Error"
                    })
                }
            })
    } 
    })
};

async register(req, res) {
    const data = req.body
    //encryption
    data.user_password = await hash(data.user_password, 10)
    //payload
    const user = {
        email: data.email,
        user_password: data.user_password
    }

    const query = `
    INSERT INTO Users
    SET ?
    `
    db.query(query, [data], (err) => {
        if(err) throw err
        let token = createToken(user)
        res.json({
            status: res.statusCode,
            token,
            msg: "Registration Complete"
        })
    })
}
}

module.exports = Users