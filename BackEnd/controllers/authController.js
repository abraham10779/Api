const connection = require('../config/db');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const values = [username, password];

  connection.query("SELECT * FROM login WHERE username = ? AND password = ?", values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.length > 0) {
        res.status(200).send({
          "id": result[0].id,
          "user": result[0].user,
          "username": result[0].username
        });
      } else {
        res.status(400).send('Usuario no existe');
      }
    }
  });
};

exports.register = (req, res) => {
  const { id, user, username, password } = req.body;
  const values = [id, user, username, password];
  const sql = "INSERT INTO login (id, user, username, password) VALUES (?, ?, ?, ?)";

  connection.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send("Usuario registrado correctamente");
    }
  });
};
