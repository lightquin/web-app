const db = require('../models/itemModel');

exports.getAllItems = (req, res) => {
    db.all('SELECT * FROM items', [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.render('index', { items: rows });
        }
    });
};

exports.addItem = (req, res) => {
    const { name, description } = req.body;
    db.run('INSERT INTO items (name, description) VALUES (?, ?)', [name, description], function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.redirect('/');
        }
    });
};

exports.updateItem = (req, res) => {
    const { id, name, description } = req.body;
    db.run('UPDATE items SET name = ?, description = ? WHERE id = ?', [name, description, id], function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.redirect('/');
        }
    });
};

exports.deleteItem = (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM items WHERE id = ?', id, function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.redirect('/');
        }
    });
};