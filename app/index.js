const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./routers');

const app = express();
// On ajoute le lien vers la doc swagger au besoin si le front est gérer par d'autres devs
require('./helpers/apiDocs')(app);

// Dossier static pour les fichiers statiques
app.use('/uploads', express.static('uploads'));
// Reconnaissance des requêtes JSON
app.use(bodyParser.json());
// Reconnaissance du req.body (pour les requêtes POST et PUT)
app.use(bodyParser.urlencoded({ extended: true }));

// On lève la restriction CORS pour nos amis React
app.use(cors(process.env.CORS_DOMAINS ?? '*'));

app.use(router);

module.exports = app;
