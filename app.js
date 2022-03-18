const express = require('express');
const memberRouter = require('./routes/member-router');
// Variable d'environnement
require('dotenv-flow').config();
const app = express();
// Variables config
const { PORT, NODE_ENV } = process.env;
// Moteur de vue
app.set('view engine', 'ejs');
app.set('views', process.cwd() + '/views');

// Routes
app.use(memberRouter);

app.listen( PORT, () => {
    console.log(`kombinen allemaal ♥ in ${PORT} [${NODE_ENV}]` );
});

