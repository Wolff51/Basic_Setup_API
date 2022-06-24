const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// eslint-disable-next-line consistent-return
module.exports = () => (req, res, next) => {
  if (req.headers.access_token) {
    try {
      jwt.verify(req.headers.access_token, process.env.ACCESS_TOKEN_SECRET);
    } catch (err) {
      return res.status(401).json({
        message: 'Invalid token',
      });
    }
  } else {
    return res.status(401).json({ error: 'No token' });
  }
  next();
};
