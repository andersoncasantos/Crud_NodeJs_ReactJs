import {db} from "../db.js";

export const getUsers = (_, res) => {
    const search = "SELECT * FROM compromissos";

    db.query(search, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const search =
        "INSERT INTO compromissos(`nome`, `descricao`, `data_hora`) VALUES(?)";
    
    const values = [
        req.body.nome,
        req.body.descricao,
        req.body.data_hora,
    ];

    db.query(search, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Compromisso criado com sucesso!");
    }); 
};

export const updateUser = (req, res) => {
    const search = 
        "UPDATE compromissos SET `nome` = ?, `descricao` = ?, `data_hora` = ? WHERE `id` = ?";
    
    const values = [
        req.body.nome,
        req.body.descricao,
        req.data_hora,
    ];

    db.query(search, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Compromisso atualizado com sucesso!");
    });
};

export const deleteUser = (req, res) => {
    const search = 
        "DELETE FROM compromissos WHERE `id` = ?";

    db.query(search, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Compromisso deletado com sucesso!");
    });
};
