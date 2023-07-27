import {db} from "../db.js";

export const getUsers = (_, res) => {
    const search = "SELECT * FROM compromissos";

    db.query(search, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};