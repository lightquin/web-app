const db = require('../database');

exports.getAllItems = (req, res) => {
  db.all('SELECT * FROM items', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.render('items', { items: rows });
  });
};

exports.createItem = (req, res) => {
  const { name, description } = req.body;
  db.run('INSERT INTO items (name, description) VALUES (?, ?)', [name, description], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.redirect('/items');
  });
};


