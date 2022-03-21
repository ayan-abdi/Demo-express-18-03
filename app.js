const express = require('express');
const homeRouter = require('./routes/home-router');
const memberRouter = require('./routes/member-router');
const session = require('express-session');
// Variable d'environnement
require('dotenv-flow').config();

// Creation du serveur
const app = express();
// Variables config
const { PORT, NODE_ENV, SESSION_SECRET } = process.env;  
// const { PORT, NODE_ENV, SESSION_SECRET } a chaque fois une infos est rajouter exple session dans mon env.devlopment il faut la mettre ici 

// storage session in file (exemple)
const FileStore = require('session-file-store')(session);

// Active session in express
// Manage session in express
app.use(session({
    store: FileStore({}),
    secret: SESSION_SECRET,
    resave: true, //il permet de sauvegarder les infos de la session
    saveUninitialized: false,
    //c'est pour dire que la session est save que si il accepte le cookie
}));

// Middleware
app.use(express.urlencoded({ extended: true}));

// Moteur de vue configuration
app.set('view engine', 'ejs');
app.set('views', process.cwd() + '/views');

// Routes
app.use(homeRouter);
app.use(memberRouter);

app.listen( PORT, () => {
    console.log(`kombinen allemaal ♥ in ${PORT} [${NODE_ENV}]` );
});



