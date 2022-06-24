const express = require('express');

const apiRouter = require('./api');

const router = express.Router();

// Les routes pour l'API auront le préfixe /api
router.use('/api', apiRouter);

router.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = router;
