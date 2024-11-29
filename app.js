const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const itemRoutes = require('./routes/itemRoutes');
const app = express();
const asyncHandler = require('express-async-handler');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/items', itemRoutes);

app.get('/', (req, res) => {
  res.redirect('/items');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
