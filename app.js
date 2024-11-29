const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', itemRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});