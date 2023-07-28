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