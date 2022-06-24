const express = require('express');
// const exempleRouter = require('./exemple');

const router = express.Router();

// Les routes pour l'API
router.all('/', (req, res) => {
  res.send('Hello World!');
});

// On préfixe les routers de l'API

// router.use('/users', exempleRouter);

router.use(() => {
  throw new Error('API Route not found', { statusCode: 404 });
});

module.exports = router;
