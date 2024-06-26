const connection = require('../config/db');

exports.createUser = (req, res) => {
  const { username, password } = req.body;
  const values = [username, password];
  const sql = "INSERT INTO usuarios (username, password) VALUES (?, ?)";

  connection.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send("Usuario creado correctamente");
    }
  });
};

exports.getAllUsers = (req, res) => {
  const sql = "SELECT * FROM usuarios";

  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM usuarios WHERE id = ?";

  connection.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.length > 0) {
        res.status(200).json(result[0]);
      } else {
        res.status(404).send("Usuario no encontrado");
      }
    }
  });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const { username, password } = req.body;
  const values = [username, password, id];
  const sql = "UPDATE usuarios SET username = ?, password = ? WHERE id = ?";

  connection.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Usuario actualizado correctamente");
    }
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM usuarios WHERE id = ?";

  connection.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Usuario eliminado correctamente");
    }
  });
};
