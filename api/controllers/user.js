import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM compromissos";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO compromissos(`nome`, `descricao`, `data_hora`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.descricao,
    req.body.data_hora,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Compromisso criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE compromissos SET `nome` = ?, `descricao` = ?, `data_hora` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.descricao,
    req.body.data_hora,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Compromisso atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM compromissos WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Compromisso deletado com sucesso.");
  });
};
